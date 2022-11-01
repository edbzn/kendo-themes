import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';

export interface LoaderContainerProps {
    children?: React.ReactNode;
    className?: string;
    size?: null | 'small' | 'medium' | 'large';
    themeColor?: null | 'base' | 'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light' | 'inverse';
    animation?: 'pulsing-2' | 'spinner-3' | 'spinner-4';
    position?: 'top' | 'end' | 'start';
    overlay?: 'dark' | 'light';
    panel?: boolean
}

export class LoaderContainer extends React.Component<LoaderContainerProps> {

    render() {
        const {
            children,
            className,
            size,
            themeColor,
            position,
            overlay,
            panel
        } = this.props;

        return (
            <div className={classNames(className, 'k-loader-container',
                {
                    [`k-loader-container-${kendoThemeMaps.sizeMap[size!] || size}`]: size,
                    [`k-loader-${position}`]: position,
                })}
            >
                <div className={`k-loader-container-overlay k-overlay-${overlay}`}></div>
                <div className={`k-loader-container-inner ${panel ? "k-loader-container-panel" : ""}`}>
                    {children}
                    <div className={`k-loader-container-label !k-text-${themeColor}`}>
                        Loading...
                    </div>
                </div>
            </div>
        );
    }
}
