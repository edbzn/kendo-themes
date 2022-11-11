import * as React from 'react';
import { classNames } from '../utils';

export interface EditorToolbarProps {
    children?: React.ReactNode;
    className?: string;
    resizable?: boolean;
}

export class EditorToolbar extends React.Component<EditorToolbarProps> {

    render() {
        const {
            children,
            className,
            resizable,
        } = this.props;


        return (
            <div
                className={classNames(
                    'k-editor-toolbar',
                    'k-toolbar',
                    {
                        'k-toolbar-resizable': resizable
                    },
                    className
                )}>
                {children}
            </div>
        );
    }
}
