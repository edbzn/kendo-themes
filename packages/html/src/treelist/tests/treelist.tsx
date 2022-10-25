import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid">
            <section>

                <div id="treelist" className="k-treelist k-grid k-grid-md k-grid-no-scrollbar">
                    <div className="k-grid-header" style={{ paddingRight: '0px' }}>
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md">
                                <colgroup>
                                    <col style={{ width: "250px" }}/>
                                    <col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-header k-filterable">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">First Name</span>
                                                </span>
                                                <a className="k-grid-header-menu k-grid-column-menu" href="#"><Icon name="more-vertical" /></a>
                                            </span>
                                        </th>
                                        <th className="k-header k-filterable">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Last Name</span>
                                                </span>
                                                <a className="k-grid-header-menu k-grid-column-menu" href="#"><Icon name="more-vertical" /></a>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content k-auto-scrollable">
                        <table className="k-table k-table-md">
                            <colgroup>
                                <col style={{ width: "250px" }}/>
                                <col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row">
                                    <td><Icon name="expand"></Icon>Daryl</td>
                                    <td>Sweeney</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>

            <section>
                <div id="treelist" className="k-treelist k-grid k-grid-md">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md">
                                <colgroup>
                                    <col style={{ width: "280px" }} />
                                    <col style={{ width: "160px" }} />
                                    <col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-header k-filterable">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">First Name</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon name="filter" /></a>
                                            </span>
                                        </th>
                                        <th className="k-header k-filterable">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Last Name</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon name="filter" /></a>
                                            </span>
                                        </th>
                                        <th className="k-header k-filterable">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Position</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon name="filter" /></a>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content k-auto-scrollable">
                        <table className="k-table k-table-md">
                            <colgroup>
                                <col style={{ width: "280px" }} />
                                <col style={{ width: "160px" }}/>
                                <col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-treelist-group">
                                    <td><Icon name="collapse"></Icon>Daryl</td>
                                    <td>Sweeney</td>
                                    <td>CEO</td>
                                </tr>
                                <tr className="k-alt k-treelist-group">
                                    <td><Icon name="none"></Icon><Icon name="collapse"></Icon>Guy
                                    </td>
                                    <td>Wooten</td>
                                    <td>Chief Technical Officer</td>
                                </tr>
                                <tr className="k-treelist-group">
                                    <td><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="collapse"></Icon>Buffy</td>
                                    <td>Weber</td>
                                    <td>VP, Engineering</td>
                                </tr>
                                <tr className="k-alt k-treelist-group">
                                    <td><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="collapse"></Icon>Hyacinth
                                    </td>
                                    <td>Hood</td>
                                    <td>Team Lead</td>
                                </tr>
                                <tr className="k-table-row">
                                    <td><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="none"></Icon>Akeem</td>
                                    <td>Carr</td>
                                    <td>Junior Software Developer</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>

    </>
);
