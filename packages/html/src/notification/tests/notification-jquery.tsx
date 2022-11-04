import React from 'react';
import ReactDOM from 'react-dom/client';
import { Notification } from '../../notification';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    body {
        background: #fcfcfc;
    }

    #test-area {
        justify-items: start;
    }

    .k-animation-container {
        position: static;
        overflow: visible;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span className="k-colspan-all k-col-span-full">LTR</span>

            <div>
                <div className="k-animation-container">
                    <Notification text="Default notification" />
                </div>
            </div>
            <div>
                <div className="k-animation-container">
                    <Notification closable={true} text="Closable notification" />
                </div>
            </div>
            <div>
                <div className="k-animation-container">
                    <Notification themeColor="primary" text="Primary notification" />
                </div>
            </div>
            <div>
                <div className="k-animation-container">
                    <Notification themeColor="secondary" text="Secondary notification" />
                </div>
            </div>
            <div>
                <div className="k-animation-container">
                    <Notification themeColor="tertiary" text="Tertiary notification" />
                </div>
            </div>
            <div>
                <div className="k-animation-container">
                    <Notification themeColor="info" text="Info notification" icon="info" />
                </div>
            </div>
            <div>
                <div className="k-animation-container">
                    <Notification themeColor="success" text="Success notification" icon="success" />
                </div>
            </div>
            <div>
                <div className="k-animation-container">
                    <Notification themeColor="warning" text="Warning notification" icon="warning" />
                </div>
            </div>
            <div>
                <div className="k-animation-container">
                    <Notification themeColor="error" text="Error notification" icon="error" />
                </div>
            </div>
            <div>
                <div className="k-animation-container">
                    <Notification themeColor="dark" text="Dark notification" />
                </div>
            </div>
            <div>
                <div className="k-animation-container">
                    <Notification themeColor="light" text="Light notification" />
                </div>
            </div>
            <div>
                <div className="k-animation-container">
                    <Notification themeColor="inverse" text="Inverse notification" />
                </div>
            </div>

            <span className="k-colspan-all k-col-span-full">RTL</span>
            <div dir="rtl">
                <div className="k-animation-container">
                    <Notification text="Default notification" />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-animation-container">
                    <Notification closable={true} text="Closable notification" />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-animation-container">
                    <Notification themeColor="primary" text="Primary notification" />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-animation-container">
                    <Notification themeColor="secondary" text="Secondary notification" />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-animation-container">
                    <Notification themeColor="tertiary" text="Tertiary notification" />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-animation-container">
                    <Notification themeColor="info" text="Info notification" icon="info" />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-animation-container">
                    <Notification themeColor="success" text="Success notification" icon="success" />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-animation-container">
                    <Notification themeColor="warning" text="Warning notification" icon="warning" />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-animation-container">
                    <Notification themeColor="error" text="Error notification" icon="error" />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-animation-container">
                    <Notification themeColor="dark" text="Dark notification" />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-animation-container">
                    <Notification themeColor="light" text="Light notification" />
                </div>
            </div>
            <div dir="rtl">
                <div className="k-animation-container">
                    <Notification themeColor="inverse" text="Inverse notification" />
                </div>
            </div>

        </div>
    </>
);
