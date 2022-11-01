import React from 'react';
import { Loader } from '../loader';
import { LoaderContainer } from '../loader-container';
import ReactDOM from 'react-dom/client';

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
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span></span>
            <span className="col">Dark</span>
            <span className="col">Light</span>


            <span>Panel</span>
            <span className="example">
                <LoaderContainer size={'large'} position={'top'} labelThemeColor={'primary'} overlayColor={'dark'} hasPanel={true}>
                    <Loader size={'large'} themeColor={'primary'} loaderAnimationEffect={'pulsing-2'} />
                </LoaderContainer>
            </span>

            <span className="example">
                <LoaderContainer size={'large'} position={'top'} labelThemeColor={'primary'} overlayColor={'light'} hasPanel={true}>
                    <Loader size={'large'} themeColor={'primary'} loaderAnimationEffect={'pulsing-2'} />
                </LoaderContainer>
            </span>

            <span>No Panel</span>
            <span className="example">
                <LoaderContainer size={'large'} position={'top'} labelThemeColor={'primary'} overlayColor={'dark'}>
                    <Loader size={'large'} themeColor={'primary'} loaderAnimationEffect={'pulsing-2'} />
                </LoaderContainer>
            </span>

            <span className="example">
                <LoaderContainer size={'large'} position={'top'} labelThemeColor={'primary'} overlayColor={'light'}>
                    <Loader size={'large'} themeColor={'primary'} loaderAnimationEffect={'pulsing-2'} />
                </LoaderContainer>
            </span>

        </div>
    </>
);
