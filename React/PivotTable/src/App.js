import { PivotViewComponent, FieldList, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import './App.css';

function App() {
  let dataSourceSettings = {
    url: 'https://localhost:44378/Pivot',
    enableSorting: true,
    columns: [{ name: 'openinghours_practice', caption: 'Openinghours Practice' }, { name: 'closinghours_practice', caption: 'Closinghours Practice' }],
    values: [{ name: 'revenue', caption: 'Revenue' }],
    rows: [{ name: 'servicetype', caption: 'Service Type' }, { name: 'servicecategory', caption: 'Service Category' }],
  };

  return (<PivotViewComponent id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true}>
    <Inject services={[FieldList]}/></PivotViewComponent>);
};
export default App;
