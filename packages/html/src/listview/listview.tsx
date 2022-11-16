import * as React from 'react';
import { classNames } from '../utils';

export interface ListViewProps {
    className?: string;
    children?: any;
    itemsCount?: number;
    hasItemsNumbers?: boolean;
    focusItem?: Array<number>;
    selectedItem?: Array<number>;
    header?: boolean;
    footer?: boolean;
    pageable?: boolean;
    pagerPosition?: 'top' | 'bottom';
    bordered?: boolean;
    borders?: 'all' | 'horizontal' | 'vertical';
    layout?: 'flex' | 'grid';
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    gridColumns?: number;
    disabled?: boolean;
    loading?: boolean;
    item?;
}
export class ListView extends React.Component<ListViewProps> {

    static defaultProps = {
        pagerPosition: 'bottom',
        layout: 'flex',
        flexDirection: 'row'
    };

    render() {
        const {
            className,
            children,
            header,
            footer,
            pageable,
            pagerPosition,
            bordered,
            borders,
            layout,
            flexDirection,
            flexWrap,
            gridColumns,
            disabled,
            loading
        } = this.props;

        const pager = <div className={`k-listview-pager k-pager k-pager-md k-listview-pager-${ pagerPosition }`}>
            Pager{/* TODO - add pager component */}
        </div>;

        const loader = <>
            <div className="k-loading-mask k-opaque" style={{ height: '100%', width: '100%' }}>
                <span className="k-loading-text">Loading...</span>
                <div className="k-loading-image"></div>
                <div className="k-loading-color"></div>
            </div>
        </>;

        return (
            <div className={classNames(
                className,
                "k-listview",
                {
                    'k-listview-bordered': bordered,
                    [`k-listview-borders-${borders}`]: borders,
                    'k-disabled': disabled
                }
            )}>
                {pageable && pagerPosition === "top" && pager}
                {header && <div className="k-listview-header">Header</div>}
                <div className={classNames(
                    "k-listview-content",
                    {
                        [`k-d-${layout}`]: layout,
                        [`k-flex-${flexDirection}`]: flexDirection,
                        [`k-flex-${flexWrap}`]: flexWrap,
                        [`k-grid-cols-${gridColumns}`]: gridColumns,
                    }
                )}>
                    { loading && loader }
                    { children }
                </div>
                {footer && <div className="k-listview-footer">Footer</div>}
                {pageable && pagerPosition === "bottom" && pager}
            </div>
        );
    }
}
