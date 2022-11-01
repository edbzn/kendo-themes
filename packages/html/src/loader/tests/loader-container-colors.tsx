import React from 'react';
import ReactDOM from 'react-dom/client';
import { Loader } from '../loader';
import { LoaderContainer } from '../loader-container';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .example {
        width: 100%;
        min-height: 200px;
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Primary</span>
            <span className="example">
                <LoaderContainer size={'large'} position={'top'} labelThemeColor={'primary'} overlayColor={'dark'} hasPanel={true}>
                    <Loader size={'large'} themeColor={'primary'} loaderAnimationEffect={'pulsing-2'} />
                </LoaderContainer>
            </span>

            <span>Secondary</span>
            <span className="example">
                <LoaderContainer size={'large'} position={'top'} labelThemeColor={'secondary'} overlayColor={'dark'} hasPanel={true}>
                    <Loader size={'large'} themeColor={'secondary'} loaderAnimationEffect={'pulsing-2'} />
                </LoaderContainer>
            </span>

            <span>Tertiary</span>
            <span className="example">
                <LoaderContainer size={'large'} position={'top'} labelThemeColor={'tertiary'} overlayColor={'dark'} hasPanel={true}>
                    <Loader size={'large'} themeColor={'tertiary'} loaderAnimationEffect={'pulsing-2'} />
                </LoaderContainer>
            </span>

            <span>Info</span>
            <span className="example">
                <LoaderContainer size={'large'} position={'top'} labelThemeColor={'info'} overlayColor={'dark'} hasPanel={true}>
                    <Loader size={'large'} themeColor={'info'} loaderAnimationEffect={'pulsing-2'} />
                </LoaderContainer>
            </span>

            <span>Success</span>
            <span className="example">
                <LoaderContainer size={'large'} position={'top'} labelThemeColor={'success'} overlayColor={'dark'} hasPanel={true}>
                    <Loader size={'large'} themeColor={'success'} loaderAnimationEffect={'pulsing-2'} />
                </LoaderContainer>
            </span>

            <span>Warning</span>
            <span className="example">
                <LoaderContainer size={'large'} position={'top'} labelThemeColor={'warning'} overlayColor={'dark'} hasPanel={true}>
                    <Loader size={'large'} themeColor={'warning'} loaderAnimationEffect={'pulsing-2'} />
                </LoaderContainer>
            </span>

            <span>Error</span>
            <span className="example">
                <LoaderContainer size={'large'} position={'top'} labelThemeColor={'error'} overlayColor={'dark'} hasPanel={true}>
                    <Loader size={'large'} themeColor={'error'} loaderAnimationEffect={'pulsing-2'} />
                </LoaderContainer>
            </span>

            <span>Dark</span>
            <span className="example">
                <LoaderContainer size={'large'} position={'top'} labelThemeColor={'dark'} overlayColor={'dark'} hasPanel={true}>
                    <Loader size={'large'} themeColor={'dark'} loaderAnimationEffect={'pulsing-2'} />
                </LoaderContainer>
            </span>

            <span>Light</span>
            <span className="example">
                <LoaderContainer size={'large'} position={'top'} labelThemeColor={'light'} overlayColor={'dark'} hasPanel={true}>
                    <Loader size={'large'} themeColor={'light'} loaderAnimationEffect={'pulsing-2'} />
                </LoaderContainer>
            </span>

            <span>Inverse</span>
            <span className="example">
                <LoaderContainer size={'large'} position={'top'} labelThemeColor={'inverse'} overlayColor={'dark'} hasPanel={true}>
                    <Loader size={'large'} themeColor={'inverse'} loaderAnimationEffect={'pulsing-2'} />
                </LoaderContainer>
            </span>
        </div>
    </>
);
