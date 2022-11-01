import React from 'react';
import { Loader } from '../loader';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span></span>
            <span className="col">Pulsing 2</span>
            <span className="col">Spinner 3</span>
            <span className="col">Spinner 4</span>


            <span>Small</span>
            <span>
                <Loader size={'small'} themeColor={'primary'} loaderAnimationEffect={'pulsing-2'} />
            </span>

            <span>
                <Loader size={'small'} themeColor={'primary'} loaderAnimationEffect={'spinner-3'} />
            </span>

            <span>
                <Loader size={'small'} themeColor={'primary'} loaderAnimationEffect={'spinner-4'} />
            </span>

            <span>Medium</span>
            <span>
                <Loader size={'medium'} themeColor={'primary'} loaderAnimationEffect={'pulsing-2'} />
            </span>

            <span>
                <Loader size={'medium'} themeColor={'primary'} loaderAnimationEffect={'spinner-3'} />
            </span>

            <span>
                <Loader size={'medium'} themeColor={'primary'} loaderAnimationEffect={'spinner-4'} />
            </span>

            <span>Large</span>
            <span>
                <Loader size={'large'} themeColor={'primary'} loaderAnimationEffect={'pulsing-2'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'primary'} loaderAnimationEffect={'spinner-3'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'primary'} loaderAnimationEffect={'spinner-4'} />
            </span>
        </div>
    </>
);
