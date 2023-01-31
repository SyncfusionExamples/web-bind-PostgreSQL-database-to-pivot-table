var pivotObj = new ej.pivotview.PivotView({
  dataSourceSettings: {
    url: 'https://localhost:7238/Pivot',
    enableSorting: true,
    columns: [{ name: 'openinghours_practice', caption: 'Openinghours Practice' }, { name: 'closinghours_practice', caption: 'Closinghours Practice' }],
    values: [{ name: 'revenue', caption: 'Revenue' }],
    rows: [{ name: 'servicetype', caption: 'Service Type' }, { name: 'servicecategory', caption: 'Service Category' }],
  },
  showFieldList: true,
  width: '100%',
  height: 350,
});
pivotObj.appendTo('#PivotView');