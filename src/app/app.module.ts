import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Imported syncfusion button module from buttons package
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
// import { GridModule, EditService, ToolbarService, SortService } from '@syncfusion/ej2-angular-grids';
// import { ChartComponent } from '@syncfusion/ej2-angular-charts';
// import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

import {
  CategoryService,
  LegendService,
  TooltipService,
} from '@syncfusion/ej2-angular-charts';
import {
  DataLabelService,
  LineSeriesService,
} from '@syncfusion/ej2-angular-charts';
import {
  EditService,
  FilterService,
  GridModule,
  GroupService,
  PageService,
  SortService,
  ToolbarService,
} from '@syncfusion/ej2-angular-grids';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    ChartModule,
    GridModule,
    // DatePickerModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    EditService,
    PageService,
    SortService,
    FilterService,
    GroupService,
    CategoryService,
    LegendService,
    TooltipService,
    DataLabelService,
    LineSeriesService,
    ToolbarService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
