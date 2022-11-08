import * as React from 'react';
import { ActionButtons } from '../action-buttons';
import { Button } from '../button';
import { classNames } from '../utils';

export interface WindowProps {
    children?: React.ReactNode;
    className?: string;
    title?: string;
    content?: string;
    actions?: string[];
    minimized?: boolean;
    actionButtons?: boolean;
    actionButtonsAlign?: "start" | "end" | "center" | "stretched"
}

export class Window extends React.Component<WindowProps> {

    render() {
        const {
            className,
            children,
            title,
            actions,
            minimized,
            actionButtons,
            actionButtonsAlign,
        } = this.props;


        return (
            <div
                className={classNames(
                    "k-window",
                    {
                        "k-window-minimized": minimized
                    },
                    className
                )}>

                {(title !== undefined || actions) &&
                    <div className="k-window-titlebar">
                        {title !== undefined && <span className="k-window-title">{title}</span>}
                        {actions && <>
                            <div className="k-window-actions">
                                {actions.map(actionName =>
                                    <Button key={actionName} icon={actionName} fillMode="flat" className="k-window-action"></Button>
                                )}
                            </div>
                        </>}
                    </div>
                }
                <div className={classNames(
                    "k-window-content",
                    {
                        "k-hidden": minimized
                    }
                )}>
                    {children}
                </div>
                {actionButtons &&
                    <ActionButtons alignment={actionButtonsAlign} className="k-window-buttons">
                        <Button>Cancel</Button>
                        <Button themeColor="primary">Update</Button>
                    </ActionButtons>
                }
            </div>
        );
    }
}
