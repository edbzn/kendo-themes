import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid">

            <div style={{ height: "300px" }} className="k-widget k-grid k-grid-lockedcolumns k-grid-no-scrollbar">
                <div className="k-grid-aria-root">
                    <div className="k-grid-header">
                        <div className="k-grid-header-locked" style={{ width: "300px" }}>
                            <table className="k-table k-table-md">
                                <colgroup>
                                    <col style={{ width: "300px" }} />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header" rowSpan={2} colSpan={1}>
                                            Name
                                        </th>
                                    </tr><tr className="k-table-row">
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="k-grid-header-wrap" style={{ width: "434px" }}>
                            <table className="k-table k-table-md" style={{ width: "900px" }}>
                                <colgroup>
                                    <col style={{ width: "300px" }} /><col style={{ width: "300px" }} /><col style={{ width: "300px" }} />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header" rowSpan={1} colSpan={3}>
                                            Availability
                                        </th>
                                    </tr><tr className="k-table-row">
                                        <th className="k-table-th k-header" rowSpan={1} colSpan={1}>
                                            Units In Stock
                                        </th>
                                        <th className="k-table-th k-header" rowSpan={1} colSpan={1}>
                                            Unit Price
                                        </th>
                                        <th className="k-table-th k-header" rowSpan={1} colSpan={1}>
                                            Discontinued
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-container">
                        <div className="k-grid-content-locked" style={{ width: "300px", height: "272px" }}>
                            <div className="k-grid-table-wrap" style={{ position: "relative" }}>
                                <table className="k-table k-table-md k-grid-table">
                                    <colgroup>
                                        <col style={{ width: "300px" }} />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr className="k-table-row" style={{ height: "37px" }}>
                                            <td className="k-table-td" colSpan={1}>
                                                Chai
                                            </td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt" style={{ height: "37px" }}>
                                            <td className="k-table-td" colSpan={1}>
                                                Chang
                                            </td>
                                        </tr>
                                        <tr className="k-table-row" style={{ height: "37px" }}>
                                            <td className="k-table-td" colSpan={1}>
                                                Aniseed Syrup
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="k-height-container">
                                <div style={{ height: '0px' }}></div>
                            </div>
                        </div><div className="k-grid-content k-virtual-content" style={{ width: "447px" }}>
                            <div className="k-grid-table-wrap" style={{ position: "relative" }}>
                                <table className="k-table k-table-md k-grid-table" style={{ transform: "translateY(0px)", width: "900px" }}>
                                    <colgroup>
                                        <col style={{ width: "300px" }} /><col style={{ width: "300px" }} /><col style={{ width: "300px" }} />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr className="k-table-row" style={{ height: "37px" }}>
                                            <td className="k-table-td" colSpan={1}>
                                                39
                                            </td><td className="k-table-td" colSpan={1}>
                                                18
                                            </td><td className="k-table-td" colSpan={1}>
                                                false
                                            </td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-alt" style={{ height: "37px" }}>
                                            <td className="k-table-td" colSpan={1}>
                                                17
                                            </td><td className="k-table-td" colSpan={1}>
                                                19
                                            </td><td className="k-table-td" colSpan={1}>
                                                false
                                            </td>
                                        </tr>
                                        <tr className="k-table-row" style={{ height: "37px" }}>
                                            <td className="k-table-td" colSpan={1}>
                                                13
                                            </td><td className="k-table-td" colSpan={1}>
                                                10
                                            </td><td className="k-table-td" colSpan={1}>
                                                false
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="k-height-container">
                                <div style={{ height: '0px' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="k-rtl">

                <div className="k-widget k-grid k-grid-no-scrollbar" style={{ height: "200px" }}>
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <table className="k-table k-table-md">
                                <colgroup>
                                    <col style={{ width: "160px" }} />
                                    <col style={{ width: "160px" }} />
                                    <col style={{ width: "160px" }} />
                                    <col style={{ width: "160px" }} />
                                    <col style={{ width: "160px" }} />
                                    <col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th scope="col" rowSpan={3} className="k-header k-with-icon">
                                            <a className="k-grid-header-menu k-grid-column-menu"><Icon name="more-vertical" /></a>
                                            <a className="k-link" href="#">Company</a>
                                        </th>
                                        <th scope="col" colSpan={5} className="k-table-th k-header">Contact Info</th>
                                    </tr>
                                    <tr className="k-table-row">
                                        <th scope="col" rowSpan={2} className="k-header k-with-icon k-first">
                                            <a className="k-grid-header-menu k-grid-column-menu"><Icon name="more-vertical" /></a>
                                            <a className="k-link" href="#">First Name</a>
                                        </th>
                                        <th scope="col" rowSpan={2} className="k-header k-with-icon">
                                            <a className="k-grid-header-menu k-grid-column-menu"><Icon name="more-vertical" /></a>
                                            <a className="k-link" href="#">Last Name</a>
                                        </th>
                                        <th scope="col" colSpan={2} className="k-table-th k-header">Location</th>
                                        <th scope="col" rowSpan={2} className="k-header k-with-icon">
                                            <a className="k-grid-header-menu k-grid-column-menu"><Icon name="more-vertical" /></a>
                                            <a className="k-link" href="#">Phone</a>
                                        </th>
                                    </tr>
                                    <tr className="k-table-row">
                                        <th scope="col" className="k-header k-with-icon k-first">
                                            <a className="k-grid-header-menu k-grid-column-menu"><Icon name="more-vertical" /></a>
                                            <a className="k-link" href="#">Country</a>
                                        </th>
                                        <th scope="col" className="k-header k-with-icon">
                                            <a className="k-grid-header-menu k-grid-column-menu"><Icon name="more-vertical" /></a>
                                            <a className="k-link" href="#">City</a>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                            <div className="k-resize-handle" style={{ top: '0px', left: "417px", height: "89px", width: "9px" }}>
                                <div className="k-resize-handle-inner"></div>
                            </div>
                        </div>
                    </div>
                    <div className="k-grid-content k-auto-scrollable">
                        <table className="k-table k-table-md" style={{ height: 'auto' }}>
                            <colgroup>
                                <col style={{ width: "160px" }} />
                                <col style={{ width: "160px" }} />
                                <col style={{ width: "160px" }} />
                                <col style={{ width: "160px" }} />
                                <col style={{ width: "160px" }} />
                                <col />
                            </colgroup>
                            <tbody className="k-table-tbody"></tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>
    </>
);
