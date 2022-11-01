import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';

export interface LoaderProps {
    className?: string;
    size?: null | 'small' | 'medium' | 'large';
    themeColor?: null | 'base' | 'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light' | 'inverse';
    animation?: 'pulsing-2' | 'spinner-3' | 'spinner-4';
}

export class Loader extends React.Component<LoaderProps> {

    render() {
        const {
            className,
            size,
            themeColor,
            animation
        } = this.props;

        const animationElement = <span className="k-loader-segment"></span>;

        return (
            <div className={classNames(className, 'k-loader',
                {
                    [`k-loader-${animation}`]: Boolean(animation),
                    [`k-loader-${themeColor}`]: Boolean(themeColor),
                    [`k-loader-${kendoThemeMaps.sizeMap[size!] || size}`]: size
                })}
            >
                <div className="k-loader-canvas">
                    {
                        animation === 'pulsing-2' &&
                        <>
                            {animationElement}
                            {animationElement}
                        </>
                    }
                    {
                        animation === 'spinner-3' &&
                        <>
                            {animationElement}
                            {animationElement}
                            {animationElement}
                        </>
                    }
                    {
                        animation === 'spinner-4' &&
                        <>
                            {animationElement}
                            {animationElement}
                            {animationElement}
                            {animationElement}
                        </>
                    }
                </div>
            </div>
        );
    }
}
