import * as React from 'react';
import { Button } from '../button';
import { Icon } from '../icon';
import { classNames } from '../utils';
import { UploadFileInfo } from './upload-file-info';

export interface UploadFileProps {
    className?: string;
    status?: 'error' | 'progress' | 'success';
    progress?: number;
    name?: string;
    icon?: string;
    size?: string;
    state?: 'uploaded' | 'uploading';
    validationMsg?: string;
}

export class UploadFile extends React.Component<UploadFileProps> {

    render() {
        const {
            className,
            status,
            progress,
            name,
            icon,
            size,
            state,
            validationMsg,
        } = this.props;

        return (
            <li
                className={classNames(
                    className,
                    'k-file',
                    {
                        [`k-file-${status}`]: status,
                    },
                )}
            >
                <div className="k-file-single">
                    <div className={classNames(
                        'k-progressbar',
                        'k-progressbar-horizontal',
                        {
                            'k-hidden': status !== 'progress',
                        },
                    )}>
                        <span className="k-progress-status-wrap k-progress-end"></span>
                        <div className="k-selected" style={{ width: progress + "%" }}>
                            <span className="k-progress-status-wrap k-progress-end"></span>
                        </div>
                    </div>
                    <span className="k-file-icon-wrapper">
                        <Icon className="k-file-icon" name={icon}></Icon>
                        {state && <span className="k-file-state">{state}</span>}
                    </span>
                    <UploadFileInfo name={name} size={size} validationMsg={validationMsg}></UploadFileInfo>
                    <div className="k-upload-actions">
                        { status === 'progress'
                            ?
                            <>
                                <span className="k-upload-pct">{progress}%</span>
                                <Button icon="pause-sm" fillMode="flat" className="k-upload-action"></Button>
                                <Button icon="cancel" fillMode="flat" className="k-upload-action"></Button>
                            </>
                            : <Button icon="close" fillMode="flat" className="k-upload-action"></Button>
                        }
                    </div>
                </div>
            </li>
        );
    }
}
