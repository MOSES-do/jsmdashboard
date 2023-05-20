import React, { useState, useEffect } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

/* eslint-disable */

const Orders = () => {

    const [data, setData] = useState();

    useEffect(() => {
        ordersGrid.map((item) => (
            setData(item)
        ))
    }, [])
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
            <Header category='Page' title='Orders' />

            <GridComponent dataSource={ordersData} id="gridcomp" allowPaging>
                <ColumnsDirective>
                    <ColumnDirective {...data} />

                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
            </GridComponent>
        </div>
    )
}

export default Orders;