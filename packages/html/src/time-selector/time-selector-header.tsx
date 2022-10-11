import * as React from 'react';
import { Button } from '../button';
import { timeType } from '../time-selector';

export interface TimeSelectorHederProps {
    header?: null | 'currenttime' | 'timeduration';
    columns: Array<timeType>;
}

export class TimeSelectorHeader extends React.Component<TimeSelectorHederProps> {

    render() {

        const {
            header,
            columns
        } = this.props;

        //const hasTimePeriod = columns.includes('tp');
        let isTimePeriod: boolean;
        let hasSeparator: boolean;
        let separator: string;
        let text: string;

        const currentTime = columns.map(function(columnType, index) {
            isTimePeriod = columnType === "tt";
            hasSeparator = index < columns.length - 2 && !isTimePeriod;
            separator = hasSeparator ? ":" : "";

            switch (columnType) {
                case "SSS":
                    text = "000";
                    break;
                case "tt":
                    text = " AM";
                    break;
                default:
                    text = "00";
                    break;
            }
            return text + separator;
        });

        return (
            <>
                {header === "currenttime" && (
                    <>
                        <div className="k-time-header">
                            <span className="k-title">{currentTime}</span>
                            <Button fillMode="flat" className="k-time-now">Now</Button>
                        </div>
                    </>
                )}
                {header === "timeduration" && (
                    <>
                        <div className="k-time-header k-time-fast-selection">
                            <Button>1 d</Button>
                            <Button>1 h</Button>
                            <Button>15 m</Button>
                        </div>
                    </>
                )}
            </>
        );


    }

}
