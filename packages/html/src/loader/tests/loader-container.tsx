import React from 'react';
import { LoaderContainer } from '../loader-container';
import { Loader } from '../loader';
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
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span></span>
            <span className="col">Small</span>
            <span className="col">Medium</span>
            <span className="col">Large</span>


            <span>Top</span>
            <span className="example">
                <LoaderContainer size={'small'} position={'top'} labelThemeColor={'primary'} overlayColor={'dark'} hasPanel={true}>
                    <Loader size={'small'} themeColor={'primary'} loaderAnimationEffect={'pulsing-2'} />
                </LoaderContainer>
            </span>

            <span className="example">
                <LoaderContainer size={'medium'} position={'top'} labelThemeColor={'primary'} overlayColor={'dark'} hasPanel={true}>
                    <Loader size={'medium'} themeColor={'primary'} loaderAnimationEffect={'pulsing-2'} />
                </LoaderContainer>
            </span>

            <span className="example">
                <LoaderContainer size={'large'} position={'top'} labelThemeColor={'primary'} overlayColor={'dark'} hasPanel={true}>
                    <Loader size={'large'} themeColor={'primary'} loaderAnimationEffect={'pulsing-2'} />
                </LoaderContainer>
            </span>

            <span>End</span>
            <span className="example">
                <LoaderContainer size={'small'} position={'end'} labelThemeColor={'primary'} overlayColor={'dark'} hasPanel={true}>
                    <Loader size={'small'} themeColor={'primary'} loaderAnimationEffect={'pulsing-2'} />
                </LoaderContainer>
            </span>

            <span className="example">
                <LoaderContainer size={'medium'} position={'end'} labelThemeColor={'primary'} overlayColor={'dark'} hasPanel={true}>
                    <Loader size={'medium'} themeColor={'primary'} loaderAnimationEffect={'pulsing-2'} />
                </LoaderContainer>
            </span>

            <span className="example">
                <LoaderContainer size={'large'} position={'end'} labelThemeColor={'primary'} overlayColor={'dark'} hasPanel={true}>
                    <Loader size={'large'} themeColor={'primary'} loaderAnimationEffect={'pulsing-2'} />
                </LoaderContainer>
            </span>

            <span>Start</span>
            <span className="example">
                <LoaderContainer size={'small'} position={'start'} labelThemeColor={'primary'} overlayColor={'dark'} hasPanel={true}>
                    <Loader size={'small'} themeColor={'primary'} loaderAnimationEffect={'pulsing-2'} />
                </LoaderContainer>
            </span>

            <span className="example">
                <LoaderContainer size={'medium'} position={'start'} labelThemeColor={'primary'} overlayColor={'dark'} hasPanel={true}>
                    <Loader size={'medium'} themeColor={'primary'} loaderAnimationEffect={'pulsing-2'} />
                </LoaderContainer>
            </span>

            <span className="example">
                <LoaderContainer size={'large'} position={'start'} labelThemeColor={'primary'} overlayColor={'dark'} hasPanel={true}>
                    <Loader size={'large'} themeColor={'primary'} loaderAnimationEffect={'pulsing-2'} />
                </LoaderContainer>
            </span>
        </div>
    </>
);
