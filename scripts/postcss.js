const fs = require('fs');
const p = require('path');
const glob = require("glob");

const autoprefixer = require('autoprefixer');
let postcss = require('postcss');

const dists = glob.sync('packages/*/dist/all.css');

dists.forEach((dist) => {
    const css = fs.readFileSync(p.resolve(dist));
    postcss([ autoprefixer ]).process(css, { from: undefined }).then(result => {
        if (result.messages && result.messages.length) {
            result.messages.forEach((msg) => {
                if (msg.type === 'warning') {
                    // eslint-disable-next-line no-console
                    console.warn(
                        `POSTCSS: ` +
                        `${msg.text} ` +
                        `at line: ${msg.line} column: ${msg.column} of ${dist}`
                    );
                }
            });
        }
    });
});
