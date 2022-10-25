import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="col-2">jQuery grid</span>

            <section className="col-2">
                <div className="k-grid k-grid-md k-grid-no-scrollbar">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md">
                                <colgroup>
                                    <col style={{ width: "100px" }} />
                                    <col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">100px</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">no width</span>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content">
                        <table className="k-table k-table-md k-grid-table">
                            <colgroup>
                                <col style={{ width: "100px" }} />
                                <col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row">
                                    <td className="k-table-td">1</td>
                                    <td className="k-table-td">Row</td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt">
                                    <td className="k-table-td">2</td>
                                    <td className="k-table-td">Alt row</td>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">3</td>
                                    <td className="k-table-td">
                                        This text continues to the end of the grid to test overflow behavior of row contents, as well as line height and vertical alignment.
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt">
                                    <td className="k-table-td">4</td>
                                    <td className="k-table-td"><span className="k-placeholder-line"></span></td>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">5</td>
                                    <td className="k-table-td"><span className="k-placeholder-line"></span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="k-widget k-pager k-grid-pager">
                        <a className="k-link k-pager-nav k-pager-first k-disabled"><Icon name="arrow-end-left" /></a>
                        <a className="k-link k-pager-nav k-disabled"><Icon name="arrow-w" /></a>
                        <div className="k-pager-numbers-wrap">
                            <select className="k-picker k-dropdown-list k-dropdown">
                                <option>1</option>
                            </select>
                            <ul className="k-pager-numbers">
                                <li><span className="k-link k-selected">1</span></li>
                                <li><a className="k-link">2</a></li>
                                <li><a className="k-link">3</a></li>
                            </ul>
                        </div>
                        <a className="k-link k-pager-nav"><Icon name="arrow-e" /></a>
                        <a className="k-link k-pager-nav k-pager-last"><Icon name="arrow-end-right" /></a>
                        <span className="k-pager-info k-label">1 - 6 of 9 items</span>
                    </div>
                </div>
            </section>

            <span className="col-2">jQuery -- fixed height, hierarchy, filter menu, sort icon</span>
            <section className="col-2">
                <div className="k-grid k-grid-md k-grid-no-scrollbar" style={{ height: "250px" }}>
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md">
                                <colgroup>
                                    <col className="k-hierarchy-col" /><col /><col /><col /><col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header k-hierarchy-cell">
                                        </th>
                                        <th className="k-table-th k-header k-filterable">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Default</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon name="filter" /></a>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header k-filterable k-hover">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Hover</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon name="filter" /></a>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header k-filterable k-focus">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Focus</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon name="filter" /></a>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header k-filterable k-active">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Active</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu k-active"><Icon name="filter" /></a>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header k-filterable k-sorted">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Sorted</span>
                                                    <span className="k-sort-icon"><Icon name="sort-asc-small" /></span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon name="filter" /></a>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content">
                        <table className="k-table k-table-md k-grid-table">
                            <colgroup>
                                <col className="k-hierarchy-col" /><col /><col /><col /><col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row k-master-row k-expanded">
                                    <td className="k-table-td k-hierarchy-cell">
                                        <Icon name="collapse" />
                                    </td>
                                    <td className="k-table-td">1</td>
                                    <td className="k-table-td">Text</td>
                                    <td className="k-table-td">Text</td>
                                    <td className="k-table-td">Text</td>
                                    <td className="k-table-td">Text</td>
                                </tr>
                                <tr className="k-table-row k-detail-row">
                                    <td className="k-table-td k-hierarchy-cell"></td>
                                    <td className="k-table-td k-detail-cell" colSpan={5}>
                                        {/* hierarchy child content */}
                                        <div style={{ background: "#ccc", padding: "10px" }}>
                                            Nested content
                                        </div>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt k-master-row">
                                    <td className="k-table-td k-hierarchy-cell">
                                        <Icon name="expand" />
                                    </td>
                                    <td className="k-table-td">2</td>
                                    <td className="k-table-td">Text</td>
                                    <td className="k-table-td">Text</td>
                                    <td className="k-table-td">Text</td>
                                    <td className="k-table-td">Text</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <span>Drag column</span>
            <section className="col-2">
                <div id="grid" data-role="grid" className="k-grid k-grid-md k-grid-display-block">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <table className="k-table k-table-md">
                                <colgroup>
                                    <col className="k-drag-col" />
                                    <col />
                                    <col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-drag-cell k-header"></th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Company Name</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Country</span>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content k-auto-scrollable">
                        <table className="k-table k-table-md k-grid-table" role="grid">
                            <colgroup>
                                <col className="k-drag-col" />
                                <col />
                                <col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row k-master-row">
                                    <td className="k-drag-cell"><Icon name="reorder" /></td>
                                    <td className="k-table-td">Alfreds Futterkiste</td>
                                    <td className="k-table-td">Germany</td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt k-master-row">
                                    <td className="k-drag-cell"><Icon name="reorder" /></td>
                                    <td className="k-table-td">Ana Trujillo Emparedados y helados</td>
                                    <td className="k-table-td">Mexico</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>
        </div>
    </>
);
