#!/usr/bin/env node
import { Browser, By } from '@progress/kendo-e2e';
import AxeBuilder from '@axe-core/webdriverjs';
import { createServer } from 'http-server';
import glob from 'glob';

const PORT = 18111;
const HOST = 'localhost';
const TESTS_PATH = './tests';
const COMPONENT_PAGE_EXT = '.html';
const THEME = "default";
const SWATCH = "default-ocean-blue";

// Below are elements with failing focus indicator contrast ration requirement
const EXCLUDED_ELEMENTS = [
    'k-time-list-wrapper',
    'k-chip-outline-base',
    'k-colorpalette-tile',
    'k-bottom-nav-item',
    'k-button-outline',
    'k-button-clear-warning',
    'k-button-flat-warning',
    'k-button-link-warning',
    'k-button-solid-warning',
    'k-fab-solid-warning',
    'k-step-last'
];

let count = {
    violations: 0,
    incomplete: 0,
    aaa: 0,
    focus: 0
};

let incompleteTypes = {
    short: 0,
    pseudo: 0,
    one: 0
};

const pathUrl = ( path ) => `http://${HOST}:${PORT}/${path.replace('./', '')}?theme=${THEME}&swatch=${SWATCH}&gradientoff=true`;

const arrayChunks = ( array, chunkCount ) => {
    const result = [];
    const chunkSize = Math.ceil(array.length / chunkCount);

    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }

    return result;
};

const addViolation = ( output, target, filePath, countField ) => {
    let nodes = [];

    output[0].nodes.map(( node ) => {
        const html = node.html.toLowerCase();

        if (html.indexOf('disabled') === -1) {
            if (countField === 'incomplete') {
                const failureSummary = node.failureSummary;

                if (failureSummary.indexOf('obscured') === -1 && failureSummary.indexOf('overlapped') === -1) {
                    if (failureSummary.indexOf('1:1') > -1) {
                        incompleteTypes.one += 1;
                    } else if (failureSummary.indexOf('too short') > -1) {
                        incompleteTypes.short += 1;
                    } else if (failureSummary.indexOf('pseudo') > -1) {
                        incompleteTypes.pseudo += 1;
                    }

                    nodes.push({
                        html: node.html,
                        reason: failureSummary.replace('Fix any of the following:\n', '')
                    });
                }
            } else {
                nodes.push(html);
            }
        }
    });

    if (nodes.length) {
        target[filePath] = nodes;
        count[countField] += nodes.length;
    }
};

const getLuminance = (rgb) => {
    let a = [ rgb.r, rgb.g, rgb.b ].map((v) => {
        let val = v / 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });

    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

const calculateContrast = (a, b) => {
    const luminance1 = getLuminance(a);
    const luminance2 = getLuminance(b);
    const brightest = Math.max(luminance1, luminance2);
    const darkest = Math.min(luminance1, luminance2);
    const fullContrast = (brightest + 0.05) / (darkest + 0.05);

    return Math.floor(fullContrast * 100) / 100;
};

const getRGBFromRGBA = (foregroundColor, backgroundColor) => {
    const r1 = foregroundColor.r;
    const g1 = foregroundColor.g;
    const b1 = foregroundColor.b;
    const a1 = foregroundColor.a;

    const r2 = backgroundColor.r;
    const g2 = backgroundColor.g;
    const b2 = backgroundColor.b;

    return {
        r: Math.round(((1 - a1) * r2) + (a1 * r1)),
        g: Math.round(((1 - a1) * g2) + (a1 * g1)),
        b: Math.round(((1 - a1) * b2) + (a1 * b1))
    };
};

const decomposeColor = ( color ) => {
    const colorComponents = color.split(')')[0].split('(')[1].split(', ');
    const r = Number(colorComponents[0]);
    const g = Number(colorComponents[1]);
    const b = Number(colorComponents[2]);
    const a = Number(colorComponents[3] || 1);

    return { r: r, g: g, b: b, a: a };
};

const getContrast = ( col, self, background ) => {
    const colorWithAlfa = getRGBFromRGBA(col, background);
    const selfContrast = calculateContrast(colorWithAlfa, self);
    const backgroundContrast = calculateContrast(colorWithAlfa, background);

    return {
        selfContrast,
        backgroundContrast
    };
};

/* eslint-disable complexity */
const selfAndBackground = async(el, parent) => {
    const classes = await el.getAttribute('class');
    const boxShadow = await el.getCssValue('boxShadow');

    let background = await parent.getCssValue('backgroundColor');
    let self = await el.getCssValue('backgroundColor');
    let border = await el.getCssValue('borderColor');
    let borderWidth = await el.getCssValue('borderWidth');
    let outlineOffset = await el.getCssValue('outlineOffset');
    let temp, par, decomposed;

    if (background === 'rgba(0, 0, 0, 0)') {
        par = await parent.findElement(By.xpath('..'));
        background = await par.getCssValue('backgroundColor');

        while ((await par.getTagName()).toLowerCase() !== 'body' && background === 'rgba(0, 0, 0, 0)') {
            par = await par.findElement(By.xpath('..'));
            background = await par.getCssValue('backgroundColor');
        }

        if ((await par.getTagName()).toLowerCase() === 'body' || background === 'rgba(0, 0, 0, 0)') {
            background = 'rgb(255, 255, 255)';
        }
    }

    if (background.indexOf('rgba') > -1 && background !== 'rgba(255, 255, 255, 1)') {
        let parentParent = await (par || parent).findElement(By.xpath('..'));
        let parentBackground = await parentParent.getCssValue('backgroundColor');

        while ((await parentParent.getTagName()).toLowerCase() !== 'body' && parentBackground === 'rgba(0, 0, 0, 0)') {
            parentParent = await parentParent.findElement(By.xpath('..'));
            parentBackground = await parentParent.getCssValue('backgroundColor');
        }

        decomposed = getRGBFromRGBA(decomposeColor(background), decomposeColor(parentBackground));
        background = 'rgb(' + decomposed.r + ', ' + decomposed.g + ', ' + decomposed.b + ')';
    }

    if (self.indexOf('rgba') > -1 && self !== 'rgba(255, 255, 255, 1)') {
        decomposed = getRGBFromRGBA(decomposeColor(self), decomposeColor(background));
        self = 'rgb(' + decomposed.r + ', ' + decomposed.g + ', ' + decomposed.b + ')';
    }

    if (self === 'rgba(0, 0, 0, 0)') {
        self = background;
    }

    background = decomposeColor(background);
    self = decomposeColor(self);

    if (classes.indexOf('k-button-clear') > -1 ||
        classes.indexOf('k-time-list-wrapper') > -1 ||
        classes.indexOf('k-splitbar') > -1 ||
        classes.indexOf('k-bottom-nav-item') > -1) {
        // element background is used for focus indicator
        // hence contrast must be calculated against its background only
        return { self: background, background: background };
    } else if (classes.indexOf('k-taskboard-card') > -1 ||
        classes.indexOf('k-taskboard-column') > -1) {
        // element border is used for focus indicator
        return { background: self, self: background };
    } else if (classes.indexOf('k-step') > -1) {
        // pseudo element with border equal to element background is used for indicator
        // hence element background color should be used for calculation
        return { self: self, background: self };
    }

    if (borderWidth !== '0px' && border !== 'rgba(0, 0, 0, 0)') {
        if (border.split('rgb').length > 2) {
            border = border.replace('rgba(0, 0, 0, 0)', '').trim();
            border = 'rgb' + border.split('rgb')[1].trim();
        }

        if (boxShadow.indexOf('inset') > -1) {
            background = self;
        }

        self = getRGBFromRGBA(decomposeColor(border), self);
    } else if (boxShadow.indexOf('inset') > -1) {
        temp = background;
        background = self;

        if (outlineOffset === '0px') {
            self = temp;
        }
    }

    return {
        self,
        background
    };
};

const getIndicatorColor = async(el, browser) => {
    const classes = await el.getAttribute('class');
    let value = await el.getCssValue('boxShadow');

    if (classes.indexOf('k-disabled') > -1 ||
        classes.indexOf('k-breadcrumb') > -1) {
        // Disabled elements are not required to meet focus contrast requirements
        // Breadcrumb wrapper itself should not be focusable
        return null;
    }

    // Exclude known focus contrast bugs
    if (classes.split(' ').some(c => EXCLUDED_ELEMENTS.indexOf(c) > -1)) {
        return null;
    }
    // Exclude known bug in k-card with k-selected
    if (classes.split(' ').indexOf('k-card') > -1 && classes.indexOf('k-selected') > -1) {
        return null;
    }

    if (value === 'none') {
        if (classes.indexOf('k-floating-label-container') > -1 ||
            classes.indexOf('k-card-title') > -1) {
            // .k-floating-label-container.k-focus should be disregarded
            // .k-card-title.k-focus should be disregarded
            return null;
        } else if (classes.indexOf('k-calendar-td') > -1 ||
            classes.indexOf('k-menu-item') > -1) {
            // Calendar .k-focus.k-calendar-td > .k-link - boxShadow must be checked
            // Menu .k-focus.k-menu-item > .k-link - boxShadow must be checked
            value = await el.findElement(By.className('k-link')).getCssValue('boxShadow');
        } else if (classes.indexOf('k-colorgradient') > -1 ||
            classes.indexOf('k-wizard-step') > -1 ||
            classes.indexOf('k-tabstrip-content') > -1) {
            // .k-colorgradient.k-focus - outline must be checked
            // .k-wizard-step.k-focus - outline must be checked
            // .k-tabstrip-content.k-focus - outline must be checked
            value = await el.getCssValue('outlineColor');
        } else if (classes.indexOf('k-time-list-wrapper') > -1 ||
            classes.indexOf('k-splitbar') > -1 ||
            classes.indexOf('k-bottom-nav-item') > -1) {
            // .k-time-list-wrapper.k-focus -  background must be checked
            // .k-splitbar.k-focus - background must be checked
            // .k-bottom-nav-item.k-focus - background must be checked
            value = await el.getCssValue('backgroundColor');
        } else if (classes.indexOf('k-button-flat') > -1) {
            // k-button-flat.k-focus:after - boxShadow must be checked
            value = await browser.driver.executeScript(`
                let styles = window.getComputedStyle(arguments[0],":after");
                return styles["boxShadow"];
            `, el);
        } else if (classes.indexOf('k-button-clear') > -1) {
            // .k-button-clear.k-focus:after - background must be checked
            value = await browser.driver.executeScript(`
                let styles = window.getComputedStyle(arguments[0],":after");
                return styles["backgroundColor"];
            `, el);
        } else if (classes.indexOf('k-taskboard-card') > -1 ||
            classes.indexOf('k-taskboard-column') > -1) {
            // .k-taskboard-card.k-focus - border must be checked
            // .k-taskboard-column.k-focus - border must be checked
            value = await el.getCssValue('borderColor');
        } else if (classes.indexOf('k-step') > -1) {
            // Stepper .k-focus.k-step .k-step-indicator:after - border must be checked, or
            // Stepper .k-focus.k-step .k-step-label - box shadow must be checked
            value = await browser.driver.executeScript(`
                let element = arguments[0].querySelector('.k-step-indicator');

                if (element) {
                    let styles = window.getComputedStyle(element,':after')
                    return styles['borderColor'];
                } else {
                    let element = arguments[0].querySelector('.k-step-label');
                    let styles = window.getComputedStyle(element)
                    return styles['boxShadow'];
                }
            `, el);
        } else if (classes.indexOf('k-timeline-track-item') > -1) {
            // .k-timeline-track-item.k-focus k-timeline-circle - boxShadow
            value = await el.findElement(By.className('k-timeline-circle')).getCssValue('boxShadow');
        } else if (classes.indexOf('k-rating') > -1 ||
            classes.indexOf('k-rating-item') > -1) {
            // .k-rating-item.k-focus and .k-rating.k-focus - indicator could not be determined
            return null;
        } else {
            // .k-ripple-container .k-radio.k-focus - the case could not be determined
            // .k-ripple-container .k-checkbox.k-focus - the case could not be determined

            //console.log(filePath);
            //console.log('NA: ' + (await el.getAttribute('outerHTML')).replace(/\s/g,'').replace(/\n/g,''));
            return null;
        }
    }

    return decomposeColor(value);
};

const iterateFocusedElement = async(el, parent, browser) => {
    const value = await getIndicatorColor(el, browser);
    const sb = await selfAndBackground(el, parent);

    if (!value) {
        return null;
    }

    return getContrast(value, sb.self, sb.background);
};

const getFocusReport = async(el, browser) => {
    const parent = await el.findElement(By.xpath('..'));
    const elContrast = await iterateFocusedElement(el, parent, browser);
    let elReport = {};
    let key;

    if (!elContrast ||
        elContrast.selfContrast >= 3 && elContrast.backgroundContrast >= 3) {
        return null;
    } else if (elContrast.selfContrast >= 3) {
        delete elContrast.selfContrast;
    } else if (elContrast.backgroundContrast >= 3) {
        delete elContrast.backgroundContrast;
    }

    count.focus += 1;

    key = (await el.getAttribute('outerHTML')).replace(/\n\s+/g,'');
    elReport[key] = elContrast;

    return elReport;
};

const getContrastViolations = async() => {
    const files = glob.sync(`${TESTS_PATH}/**/*${COMPONENT_PAGE_EXT}`);
    //const files = [ TESTS_PATH + '/table/table-native-states.html'];
    const pages = files.map(path => [ path, pathUrl(path) ]);
    const chunks = arrayChunks(pages, 8);

    let violations = {};
    let incomplete = {};
    let aaa = {};
    let focusContrast = {};
    let result = {};

    await Promise.all(chunks.map(async( chunk, index ) => {
        let port = PORT + index;

        const browser = new Browser();
        const server = createServer({
            root: './',
            port: port
        });

        server.listen(port, HOST);

        for (let i = 0; i < chunk.length; i++) {
            const [ filePath, url ] = chunk[i];

            // Skipped components:
            // MediaPlayer is not WCAG compliant
            // Barcode represents an image of black lines on white (transparent) background
            // CircularProgressBar has a black text label element overlapping an svg with white background
            if (filePath.indexOf('mediaplayer') > -1 ||
                filePath.indexOf('barcode') > -1 ||

                //filePath.indexOf('scheduler') > -1 ||
                filePath.indexOf('circular-progressbar') > -1) {
                continue;
            }

            await browser.navigateTo(url);

            const axe = new AxeBuilder(browser.driver);
            axe.withRules([ 'color-contrast' ]);
            const output = await axe.analyze();
            axe.withRules([ 'color-contrast-enhanced' ]);
            const enhanced = await axe.analyze();

            if (output.violations.length) {
                addViolation(output.violations, violations, filePath, 'violations');
            }

            if (output.incomplete.length) {
                addViolation(output.incomplete, incomplete, filePath, 'incomplete');
            }

            if (enhanced.violations.length) {
                addViolation(enhanced.violations, aaa, filePath, 'aaa');
            }

            const focusedElements = await browser.driver.findElements(By.className('k-focus'));

            for (let el of focusedElements) {
                const focusReport = await getFocusReport(el, browser);

                if (!focusReport) {
                    continue;
                }

                if (!focusContrast[filePath]) {
                    focusContrast[filePath] = [];
                }

                focusContrast[filePath].push(focusReport);
            }
        }

        await browser.close();
        server.close();
    }));

    result = {
        violations,
        incomplete,
        aaa,
        focusContrast
    };

    printViolations(result);

    return result;
};

const printViolations = (result) => {
    const violations = result.violations;
    const aaa = result.aaa;
    let violatedComponents = [];
    let aaViolatedComponents = [];

    Object.keys(violations).forEach((key) => {
        const componet = key.split('/')[2];

        if (!violatedComponents.includes(componet)) {
            violatedComponents.push(componet);
        }
    });

    Object.keys(aaa).forEach((key) => {
        const componet = key.split('/')[2];

        if (!aaViolatedComponents.includes(componet)) {
            aaViolatedComponents.push(componet);
        }
    });

    // console.log(violatedComponents.sort());
    // console.log(aaViolatedComponents.sort());
    // console.log(incomplete);
    /* eslint-disable no-console */
    console.dir(result.focusContrast, { depth: 3 });

    console.dir(result.focusContrast, { depth: 3 });
    console.dir(result.violations, { depth: 5 });
    /* eslint-disable no-console */
    console.log(count);
    // console.log(incompleteTypes);
};

export { getContrastViolations };

getContrastViolations();
