import React from 'react';
import ReactDOM from 'react-dom/client';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Textarea } from '../../textarea';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        width: 500px;
    }

    .k-window {
        width: 100%;
        height: 400px;
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <section>
                <div className="k-window k-dialog k-editor-dialog">
                    <div className="k-window-titlebar k-dialog-titlebar">
                        <span className="k-window-title k-dialog-title">View HTML</span>
                        <div className="k-window-actions k-dialog-actions">
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-window-content k-dialog-content">
                        <Textarea className="k-editor-textarea"></Textarea>
                    </div>
                    <ActionButtons className="k-window-buttons k-dialog-buttons" alignment="end">
                        <Button>Cancel</Button>
                        <Button themeColor="primary">Update</Button>
                    </ActionButtons>
                </div>
            </section>

        </div>
    </>
);
