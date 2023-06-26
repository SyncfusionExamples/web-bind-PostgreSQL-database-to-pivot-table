import { Component, ViewChild } from '@angular/core';
import { IDataOptions, PivotView} from '@syncfusion/ej2-angular-pivotview';

@Component({
  selector: 'app-root',
  template: `<div class="col-md-8">
  <ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings showFieldList="true"></ejs-pivotview></div>
  `
})

export class AppComponent {
    public dataSourceSettings: IDataOptions;
    @ViewChild('pivotview', {static: false})
    public pivotGridObj: PivotView;
    ngOnInit(): void {
        this.dataSourceSettings = {
          url: 'https://localhost:44378/Pivot',
          enableSorting: true,
          columns: [{ name: 'openinghours_practice', caption: 'Openinghours Practice' }, { name: 'closinghours_practice', caption: 'Closinghours Practice' }],
          values: [{ name: 'revenue', caption: 'Revenue' }],
          rows: [{ name: 'servicetype', caption: 'Service Type' }, { name: 'servicecategory', caption: 'Service Category' }],
        }     
    }
}