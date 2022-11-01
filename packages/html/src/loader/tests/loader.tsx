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


            <span>Primary</span>
            <span>
                <Loader size={'large'} themeColor={'primary'} loaderAnimationEffect={'pulsing-2'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'primary'} loaderAnimationEffect={'spinner-3'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'primary'} loaderAnimationEffect={'spinner-4'} />
            </span>

            <span>Secondary</span>
            <span>
                <Loader size={'large'} themeColor={'secondary'} loaderAnimationEffect={'pulsing-2'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'secondary'} loaderAnimationEffect={'spinner-3'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'secondary'} loaderAnimationEffect={'spinner-4'} />
            </span>

            <span>Tertiary</span>
            <span>
                <Loader size={'large'} themeColor={'tertiary'} loaderAnimationEffect={'pulsing-2'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'tertiary'} loaderAnimationEffect={'spinner-3'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'tertiary'} loaderAnimationEffect={'spinner-4'} />
            </span>

            <span>Info</span>
            <span>
                <Loader size={'large'} themeColor={'info'} loaderAnimationEffect={'pulsing-2'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'info'} loaderAnimationEffect={'spinner-3'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'info'} loaderAnimationEffect={'spinner-4'} />
            </span>

            <span>Success</span>
            <span>
                <Loader size={'large'} themeColor={'success'} loaderAnimationEffect={'pulsing-2'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'success'} loaderAnimationEffect={'spinner-3'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'success'} loaderAnimationEffect={'spinner-4'} />
            </span>

            <span>Warning</span>
            <span>
                <Loader size={'large'} themeColor={'warning'} loaderAnimationEffect={'pulsing-2'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'warning'} loaderAnimationEffect={'spinner-3'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'warning'} loaderAnimationEffect={'spinner-4'} />
            </span>

            <span>Error</span>
            <span>
                <Loader size={'large'} themeColor={'error'} loaderAnimationEffect={'pulsing-2'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'error'} loaderAnimationEffect={'spinner-3'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'error'} loaderAnimationEffect={'spinner-4'} />
            </span>

            <span>Dark</span>
            <span>
                <Loader size={'large'} themeColor={'dark'} loaderAnimationEffect={'pulsing-2'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'dark'} loaderAnimationEffect={'spinner-3'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'dark'} loaderAnimationEffect={'spinner-4'} />
            </span>

            <span>Light</span>
            <span>
                <Loader size={'large'} themeColor={'light'} loaderAnimationEffect={'pulsing-2'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'light'} loaderAnimationEffect={'spinner-3'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'light'} loaderAnimationEffect={'spinner-4'} />
            </span>

            <span>Inverse</span>
            <span>
                <Loader size={'large'} themeColor={'inverse'} loaderAnimationEffect={'pulsing-2'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'inverse'} loaderAnimationEffect={'spinner-3'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'inverse'} loaderAnimationEffect={'spinner-4'} />
            </span>

        </div>
    </>
);
