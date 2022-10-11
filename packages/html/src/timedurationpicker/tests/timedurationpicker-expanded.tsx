import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { TimeSelector } from '../../time-selector';
import { Button } from '../../button';
import { ActionButtons } from '../../action-buttons';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        max-width: 660px;
    }
    .k-animation-container {
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>

        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>TimeDurationPicker</span>
            <span>TimeDurationPicker RTL</span>

            <div>
                <span className="k-timepicker k-timedurationpicker k-input k-input-md k-rounded-md k-input-solid">
                    <input type="text" className="k-input-inner" value="00 days : 00 hours : 00 mins" placeholder="..." />
                    <button type="button" className="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base">
                        <span className="k-button-icon k-icon k-i-clock"></span>
                    </button>
                </span>
            </div>
            <div dir="rtl">
                <span className="k-timepicker k-timedurationpicker k-input k-input-md k-rounded-md k-input-solid">
                    <input type="text" className="k-input-inner" value="00 days : 00 hours : 00 mins" placeholder="..." />
                    <button type="button" className="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base">
                        <span className="k-button-icon k-icon k-i-clock"></span>
                    </button>
                </span>
            </div>


            <div className="k-animation-container">
                <div className="k-popup k-reset">
                    <TimeSelector header="timeduration" columns={[ "dd", "HH", "mm" ]} focusedColumn="HH"></TimeSelector>
                    <ActionButtons alignment="stretched" className="k-timeduration-footer">
                        <Button className="k-time-cancel">Cancel</Button>
                        <Button themeColor="primary" className="k-time-accept">Set</Button>
                    </ActionButtons>
                </div>
            </div>
            <div className="k-animation-container">
                <div className="k-popup k-reset k-rtl">
                    <TimeSelector header="timeduration" columns={[ "dd", "HH", "mm" ]} focusedColumn="HH"></TimeSelector>
                    <ActionButtons alignment="stretched" className="k-timeduration-footer">
                        <Button className="k-time-cancel">Cancel</Button>
                        <Button themeColor="primary" className="k-time-accept">Set</Button>
                    </ActionButtons>
                </div>
            </div>

        </div>

    </>
);
