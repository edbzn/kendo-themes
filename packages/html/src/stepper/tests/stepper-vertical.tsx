import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    #test-area hr {
        width: 100%;
        grid-column: 1 / -1;
        visibility: hidden;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>Indicator</span>
            <span>Indicator + label</span>
            <span>Icon</span>
            <span>Label</span>

            <section>
                <nav className="k-stepper k-widget" style={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }}>
                    <ol className="k-step-list k-step-list-vertical" style={{ gridRowStart: "1", gridRowEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <Icon className="k-step-indicator-icon" name="check"></Icon>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-current k-focus" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">2</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-last" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">3</span>
                                </span>
                            </a>
                        </li>
                    </ol>
                    <div className="k-widget k-progressbar k-progressbar-vertical k-progressbar-reverse" style={{ gridRowStart: "1", gridRowEnd: "3", top: "17px" }}>
                        <span className="k-progress-status-wrap k-progress-end"></span>
                        <div className="k-state-selected" style={{ width: '100%', height: "50%" }}>
                            <span className="k-progress-status-wrap k-progress-end" style={{ width: '100%', height: "200%" }}></span>
                        </div>
                    </div>
                </nav>
            </section>
            <section>
                <nav className="k-stepper k-widget" style={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }}>
                    <ol className="k-step-list k-step-list-vertical" style={{ gridRowStart: "1", gridRowEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done k-step-success" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">1</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Account Info with too long text</span>
                                    <Icon name="check"></Icon>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-current k-focus k-step-error" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">2</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Personal Info</span>
                                    <Icon className="k-validation-icon" name="warning"></Icon>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-last k-step-optional" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link" >
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">3</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Payment Details</span>
                                    <span className="k-step-label-optional">(Optional)</span>
                                </span>
                            </a>
                        </li>
                    </ol>
                    <div className="k-widget k-progressbar k-progressbar-vertical k-progressbar-reverse" style={{ gridRowStart: "1", gridRowEnd: "3", top: "17px" }}>
                        <span className="k-progress-status-wrap k-progress-end"></span>
                        <div className="k-state-selected" style={{ width: '100%', height: "50%" }}>
                            <span className="k-progress-status-wrap k-progress-end" style={{ width: '100%', height: "200%" }}></span>
                        </div>
                    </div>
                </nav>
            </section>
            <section>
                <nav className="k-stepper k-widget" style={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }}>
                    <ol className="k-step-list k-step-list-vertical" style={{ gridRowStart: "1", gridRowEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <Icon className="k-step-indicator-icon" name="lock"></Icon>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-current k-focus" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <Icon className="k-step-indicator-icon" name="user"></Icon>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-last" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <Icon className="k-step-indicator-icon" name="track-changes"></Icon>
                                </span>
                            </a>
                        </li>
                    </ol>
                    <div className="k-widget k-progressbar k-progressbar-vertical k-progressbar-reverse" style={{ gridRowStart: "1", gridRowEnd: "3", top: "17px" }}>
                        <span className="k-progress-status-wrap k-progress-end"></span>
                        <div className="k-state-selected" style={{ width: '100%', height: "50%" }}>
                            <span className="k-progress-status-wrap k-progress-end" style={{ width: '100%', height: "200%" }}></span>
                        </div>
                    </div>
                </nav>
            </section>
            <section>
                <nav className="k-stepper k-widget" style={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }}>
                    <ol className="k-step-list k-step-list-vertical" style={{ gridRowStart: "1", gridRowEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-label">
                                    <span className="k-step-text">Account Info</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-current k-focus" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-label">
                                    <span className="k-step-text">Personal Info</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-last" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-label">
                                    <span className="k-step-text">Payment Details</span>
                                </span>
                            </a>
                        </li>
                    </ol>
                    <div className="k-widget k-progressbar k-progressbar-vertical k-progressbar-reverse" style={{ gridRowStart: "1", gridRowEnd: "3", top: "17px" }}>
                        <span className="k-progress-status-wrap k-progress-end"></span>
                        <div className="k-state-selected" style={{ width: '100%', height: "50%" }}>
                            <span className="k-progress-status-wrap k-progress-end" style={{ width: '100%', height: "200%" }}></span>
                        </div>
                    </div>
                </nav>
            </section>

            <hr />

            <span className="col-4">Content Between Steps</span>

            <section className="col-4">
                <nav className="k-stepper k-widget" style={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }}>
                    <ol className="k-step-list k-step-list-vertical" style={{ gridRowStart: "1", gridRowEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done k-step-success" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">1</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Account Info</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-current k-focus" style={{ height: 'auto' }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">2</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Personal Info</span>
                                </span>
                            </a>
                            <div className="k-step-content" style={{ height: "140px" }}>
                                <div className="content">
                                    This is the first step of your wizard with inline content.
                                </div>
                                <div className="navigation">
                                    <Button>Close</Button>
                                    {" "}<span>Step 2 of 3</span>{" "}
                                    <Button>Next</Button>
                                </div>
                            </div>
                        </li>
                        <li className="k-step k-step-last" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">3</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Payment Details</span>
                                </span>
                            </a>
                        </li>
                    </ol>
                    <div className="k-widget k-progressbar k-progressbar-vertical k-progressbar-reverse" style={{ gridRowStart: "1", gridRowEnd: "3", top: "17px" }}>
                        <span className="k-progress-status-wrap k-progress-end"></span>
                        <div className="k-state-selected" style={{ width: '100%', height: "20%" }}>
                            <span className="k-progress-status-wrap k-progress-end" style={{ width: '100%', height: "200%" }}></span>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    </>
);
