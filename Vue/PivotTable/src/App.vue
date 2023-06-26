<template>
  <div>
    <div class="control-section" style="overflow: auto">
      <div class="content-wrapper">
        <ejs-pivotview
          id="pivotview"
          ref="pivotview"
          :dataSourceSettings="dataSourceSettings"
          :showFieldList="showFieldList"
        ></ejs-pivotview>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import {
  FieldList,
  PivotViewPlugin,
} from "@syncfusion/ej2-vue-pivotview";

Vue.use(PivotViewPlugin);

export default {
  data() {
    return {
      dataSourceSettings: {
        url: 'https://localhost:44378/Pivot',
        enableSorting: true,
        columns: [{ name: 'openinghours_practice', caption: 'Openinghours Practice' }, { name: 'closinghours_practice', caption: 'Closinghours Practice' }],
        values: [{ name: 'revenue', caption: 'Revenue' }],
        rows: [{ name: 'servicetype', caption: 'Service Type' }, { name: 'servicecategory', caption: 'Service Category' }],
      },
      showFieldList: true
    };
  },
  methods: {
  },
  provide: {
    pivotview: [FieldList]
  }
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-pivotview/styles/material.css";
</style>
