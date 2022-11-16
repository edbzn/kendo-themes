import React from 'react';
import ReactDOM from 'react-dom/client';
import { ListView } from '../listview';
import { ListViewItem } from '../listview-item';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-listview-header,
    .k-listview-footer,
    .k-listview-item {
        padding: 10px;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <span>Flex layout - row</span>
                <ListView
                    borders="vertical">
                    <ListViewItem><div>Listview Item 1</div></ListViewItem>
                    <ListViewItem><div>Listview Item 2</div></ListViewItem>
                    <ListViewItem><div>Listview Item 3</div></ListViewItem>
                    <ListViewItem><div>Listview Item 4</div></ListViewItem>
                </ListView>
            </section>

            <section>
                <span>Flex layout - row reverse</span>
                <ListView
                    flexDirection="row-reverse"
                    borders="vertical">
                    <ListViewItem><div>Listview Item 1</div></ListViewItem>
                    <ListViewItem><div>Listview Item 2</div></ListViewItem>
                    <ListViewItem><div>Listview Item 3</div></ListViewItem>
                    <ListViewItem><div>Listview Item 4</div></ListViewItem>
                </ListView>
            </section>

            <section>
                <span>Flex layout - column</span>
                <ListView
                    flexDirection="column"
                    borders="horizontal">
                    <ListViewItem><div>Listview Item 1</div></ListViewItem>
                    <ListViewItem><div>Listview Item 2</div></ListViewItem>
                    <ListViewItem><div>Listview Item 3</div></ListViewItem>
                    <ListViewItem><div>Listview Item 4</div></ListViewItem>
                </ListView>
            </section>

            <section>
                <span>Flex layout - column reverse</span>
                <ListView
                    flexDirection="column-reverse"
                    borders="horizontal">
                    <ListViewItem><div>Listview Item 1</div></ListViewItem>
                    <ListViewItem><div>Listview Item 2</div></ListViewItem>
                    <ListViewItem><div>Listview Item 3</div></ListViewItem>
                    <ListViewItem><div>Listview Item 4</div></ListViewItem>
                </ListView>
            </section>

            <section>
                <span>Grid layout</span>
                <ListView
                    layout="grid"
                    gridColumns={2}
                    borders="all">
                    <ListViewItem><div>Listview Item 1</div></ListViewItem>
                    <ListViewItem><div>Listview Item 2</div></ListViewItem>
                    <ListViewItem><div>Listview Item 3</div></ListViewItem>
                    <ListViewItem><div>Listview Item 4</div></ListViewItem>
                </ListView>
            </section>

        </div>
    </>
);
