import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        max-width: 660px;
    }
`;

root.render(
    <>
        <style>{styles}</style>

        <span>TimeDurationPicker</span>
        <span>TimeDurationPicker RTL</span>

        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <div>
                <span className="k-timepicker k-timedurationpicker k-input k-input-md k-rounded-md k-input-solid">
                    <input type="text" className="k-input-inner" value="TimeDurationPicker..." placeholder="..." />
                    <button type="button" className="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base">
                        <span className="k-button-icon k-icon k-i-clock"></span>
                    </button>
                </span>
            </div>
            <div dir="rtl">
                <span className="k-timepicker k-timedurationpicker k-input k-input-md k-rounded-md k-input-solid">
                    <input type="text" className="k-input-inner" value="TimeDurationPicker..." placeholder="..." />
                    <button type="button" className="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base">
                        <span className="k-button-icon k-icon k-i-clock"></span>
                    </button>
                </span>
            </div>

            {/* Normal */}
            <div>
                <span className="k-timepicker k-timedurationpicker k-input k-input-md k-rounded-md k-input-solid">
                    <input type="text" className="k-input-inner" value="Normal" placeholder="..." />
                    <button type="button" className="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base">
                        <span className="k-button-icon k-icon k-i-clock"></span>
                    </button>
                </span>
            </div>
            <div dir="rtl">
                <span className="k-timepicker k-timedurationpicker k-input k-input-md k-rounded-md k-input-solid">
                    <input type="text" className="k-input-inner" value="Normal" placeholder="..." />
                    <button type="button" className="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base">
                        <span className="k-button-icon k-icon k-i-clock"></span>
                    </button>
                </span>
            </div>

            {/* Hover */}
            <div>
                <span className="k-timepicker k-timedurationpicker k-input k-input-md k-rounded-md k-input-solid k-hover">
                    <input type="text" className="k-input-inner" value="Hover" placeholder="..." />
                    <button type="button" className="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base">
                        <span className="k-button-icon k-icon k-i-clock"></span>
                    </button>
                </span>
            </div>
            <div dir="rtl">
                <span className="k-timepicker k-timedurationpicker k-input k-input-md k-rounded-md k-input-solid k-hover">
                    <input type="text" className="k-input-inner" value="Hover" placeholder="..." />
                    <button type="button" className="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base">
                        <span className="k-button-icon k-icon k-i-clock"></span>
                    </button>
                </span>
            </div>

            {/* Focus */}
            <div>
                <span className="k-timepicker k-timedurationpicker k-input k-input-md k-rounded-md k-input-solid k-focus">
                    <input type="text" className="k-input-inner" value="Focus" placeholder="..." />
                    <button type="button" className="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base">
                        <span className="k-button-icon k-icon k-i-clock"></span>
                    </button>
                </span>
            </div>
            <div dir="rtl">
                <span className="k-timepicker k-timedurationpicker k-input k-input-md k-rounded-md k-input-solid  k-focus">
                    <input type="text" className="k-input-inner" value="Focus" placeholder="..." />
                    <button type="button" className="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base">
                        <span className="k-button-icon k-icon k-i-clock"></span>
                    </button>
                </span>
            </div>

            {/* Disabled */}
            <div>
                <span className="k-timepicker k-timedurationpicker k-input k-input-md k-rounded-md k-input-solid k-disabled">
                    <input type="text" className="k-input-inner" value="Disabled" placeholder="..." />
                    <button type="button" className="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base">
                        <span className="k-button-icon k-icon k-i-clock"></span>
                    </button>
                </span>
            </div>
            <div dir="rtl">
                <span className="k-timepicker k-timedurationpicker k-input k-input-md k-rounded-md k-input-solid k-disabled">
                    <input type="text" className="k-input-inner" value="Disabled" placeholder="..." />
                    <button type="button" className="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base">
                        <span className="k-button-icon k-icon k-i-clock"></span>
                    </button>
                </span>
            </div>

            {/* Invalid */}
            <div>
                <span className="k-timepicker k-timedurationpicker k-input k-input-md k-rounded-md k-input-solid k-invalid">
                    <input type="text" className="k-input-inner" value="Invalid" placeholder="..." />
                    <button type="button" className="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base">
                        <span className="k-button-icon k-icon k-i-clock"></span>
                    </button>
                </span>
            </div>
            <div dir="rtl">
                <span className="k-timepicker k-timedurationpicker k-input k-input-md k-rounded-md k-input-solid k-invalid">
                    <input type="text" className="k-input-inner" value="Invalid" placeholder="..." />
                    <button type="button" className="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base">
                        <span className="k-button-icon k-icon k-i-clock"></span>
                    </button>
                </span>
            </div>

            {/* Invalid Focus */}
            <div>
                <span className="k-timepicker k-timedurationpicker k-input k-input-md k-rounded-md k-input-solid k-invalid k-focus">
                    <input type="text" className="k-input-inner" value="Invalid Focus" placeholder="..." />
                    <button type="button" className="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base">
                        <span className="k-button-icon k-icon k-i-clock"></span>
                    </button>
                </span>
            </div>
            <div dir="rtl">
                <span className="k-timepicker k-timedurationpicker k-input k-input-md k-rounded-md k-input-solid k-invalid k-focus">
                    <input type="text" className="k-input-inner" value="Invalid Focus" placeholder="..." />
                    <button type="button" className="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base">
                        <span className="k-button-icon k-icon k-i-clock"></span>
                    </button>
                </span>
            </div>

            {/* Loading */}
            <div>
                <span className="k-timepicker k-timedurationpicker k-input k-input-md k-rounded-md k-input-solid k-loading">
                    <input type="text" className="k-input-inner" value="Loading..." placeholder="..." />
                    <button type="button" className="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base">
                        <span className="k-button-icon k-icon k-i-clock"></span>
                    </button>
                </span>
            </div>
            <div dir="rtl">
                <span className="k-timepicker k-timedurationpicker k-input k-input-md k-rounded-md k-input-solid k-loading">
                    <input type="text" className="k-input-inner" value="Loading..." placeholder="..." />
                    <button type="button" className="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base">
                        <span className="k-button-icon k-icon k-i-clock"></span>
                    </button>
                </span>
            </div>
        </div>

    </>
);
