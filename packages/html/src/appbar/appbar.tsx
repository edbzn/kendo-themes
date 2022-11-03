import React from 'react';
import { classNames } from '../utils';

export interface AppbarProps {
    children?: React.ReactNode;
    className?: string;
    themeColor?: null | 'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light' | 'inverse';
    positionMode?: 'static' | 'sticky' | 'fixed';
    position?: 'top' | 'bottom',
    rtl?: boolean
}

export class Appbar extends React.Component<AppbarProps> {
    render() {
        const {
            children,
            className,
            themeColor,
            positionMode,
            position,
            rtl
        } = this.props;

        return (
            <div className={classNames(className, 'k-appbar',
                {
                    [`k-appbar-${themeColor}`]: Boolean(themeColor),
                    [`k-appbar-${positionMode}`]: positionMode,
                    [`k-appbar-${position}`]: position,
                    ['k-rtl']: rtl
                })}
            dir={rtl ? 'rtl' : undefined}
            >
                {children}
            </div>
        );
    }
}
