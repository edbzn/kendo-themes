import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
#test-area {
    background-color: #f3f5f7;
}
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <h4>Bottom Navigation RTL Horizontal</h4>
                <nav className="k-bottom-nav k-bottom-nav-primary k-bottom-nav-flat k-bottom-nav-border k-bottom-nav-item-flow-horizontal k-rtl" dir="rtl">
                    <span className="k-bottom-nav-item">
                        <Icon className="k-bottom-nav-item-icon" name="email" />
                        <span className="k-bottom-nav-item-text">Normal</span>
                    </span>
                    <span className="k-bottom-nav-item k-focus">
                        <Icon className="k-bottom-nav-item-icon" name="email" />
                        <span className="k-bottom-nav-item-text">Focused</span>
                    </span>
                    <span className="k-bottom-nav-item k-selected">
                        <Icon className="k-bottom-nav-item-icon" name="email" />
                        <span className="k-bottom-nav-item-text">Selected</span>
                    </span>
                    <span className="k-bottom-nav-item k-disabled">
                        <Icon className="k-bottom-nav-item-icon" name="email" />
                        <span className="k-bottom-nav-item-text">Disabled</span>
                    </span>
                </nav>
            </section>

            <section>
                <h4>Bottom Navigation RTL Vertical</h4>
                <nav className="k-bottom-nav k-bottom-nav-primary k-bottom-nav-flat k-bottom-nav-border k-bottom-nav-item-flow-vertical k-rtl" dir="rtl">
                    <span className="k-bottom-nav-item">
                        <Icon className="k-bottom-nav-item-icon" name="email" />
                        <span className="k-bottom-nav-item-text">Normal</span>
                    </span>
                    <span className="k-bottom-nav-item k-focus">
                        <Icon className="k-bottom-nav-item-icon" name="email" />
                        <span className="k-bottom-nav-item-text">Focused</span>
                    </span>
                    <span className="k-bottom-nav-item k-selected">
                        <Icon className="k-bottom-nav-item-icon" name="email" />
                        <span className="k-bottom-nav-item-text">Selected</span>
                    </span>
                    <span className="k-bottom-nav-item k-disabled">
                        <Icon className="k-bottom-nav-item-icon" name="email" />
                        <span className="k-bottom-nav-item-text">Disabled</span>
                    </span>
                </nav>
            </section>
        </div>
    </>
);
