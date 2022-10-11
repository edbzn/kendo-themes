import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';
import { TimeSelectorHeader } from '../time-selector';
import { TimeSelectorColumn } from '../time-selector';


export type timeType = 'dd' | 'HH' | 'mm' | 'ss' | 'SSS' | 'tt';

export interface TimeSelectorProps {
    className?: string;
    value?: string;
    size?: null | 'small' | 'medium' | 'large';
    header?: null | 'currenttime' | 'timeduration';
    columns: Array<timeType>;
    focusedColumn?: null | timeType;
    disabled?: null | boolean;
}

export class TimeSelector extends React.Component<TimeSelectorProps> {

    static defaultProps = {
        size: 'medium'
    };

    render() {

        const {
            className,
            size,
            header,
            columns,
            focusedColumn
        } = this.props;

        const columnsDom = columns.map(function(columnType, index) {
            let focus = false;
            let separator = true;

            if (columnType === focusedColumn) {
                focus = true;
            }
            if (index === 0 || columnType === "tt") {
                separator = false;
            }

            return (
                <>
                    <TimeSelectorColumn type={columnType} focus={focus} separator={separator}></TimeSelectorColumn>
                </>
            );
        });

        return (
            <div
                className={classNames(
                    className,
                    'k-timeselector',
                    {
                        [`k-timeselector-${kendoThemeMaps.sizeMap[size!] || size}`]: size,
                    }

                )}>
                <TimeSelectorHeader header={header} columns={columns}></TimeSelectorHeader>
                <div className="k-time-list-container">
                    <span className="k-time-highlight"></span>
                    {columnsDom}
                </div>
            </div>
        );
    }
}
