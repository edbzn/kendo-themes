import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';

export interface ToolbarProps {
    children?: React.ReactNode;
    className?: string;
    dir?: string;
    size?: null | 'small' | 'medium' | 'large';
    resizable?: boolean;
    focus?: boolean;
    style?: any;
}

export class Toolbar extends React.Component<ToolbarProps> {

    static defaultProps = {
        size: 'medium',
        resizable: true
    };

    render() {
        const {
            children,
            className,
            dir,
            size,
            resizable,
            focus,
            ...htmlAttributes
        } = this.props;

        return (
            <div
                {...htmlAttributes}
                className={classNames(
                    className,
                    'k-toolbar',
                    {
                        [`k-toolbar-${kendoThemeMaps.sizeMap[size!] || size}`]: size,
                        'k-toolbar-resizable': resizable,
                        'k-focus': focus
                    }
                )}
            >
                {children}
            </div>
        );
    }
}
