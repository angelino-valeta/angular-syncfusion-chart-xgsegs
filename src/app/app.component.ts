import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <ejs-chart id="chart-container" [primaryXAxis]="primaryXAxis">
      <e-series-collection>
        <e-series
          [dataSource]="chartData"
          type="Column"
          xName="month"
          yName="sales"
          name="Sales"
        ></e-series>
      </e-series-collection>
    </ejs-chart>
  `
})
export class AppComponent implements OnInit {
  public primaryXAxis: Object;
  public chartData: Object[];
  ngOnInit(): void {
    // Data for chart series
    this.chartData = [
      { month: "Jan", sales: 35 },
      { month: "Feb", sales: 28 },
      { month: "Mar", sales: 34 },
      { month: "Apr", sales: 32 },
      { month: "May", sales: 40 },
      { month: "Jun", sales: 32 },
      { month: "Jul", sales: 35 },
      { month: "Aug", sales: 55 },
      { month: "Sep", sales: 38 },
      { month: "Oct", sales: 30 },
      { month: "Nov", sales: 25 },
      { month: "Dec", sales: 32 }
    ];
    this.primaryXAxis = {
      valueType: "Category"
    };
  }
}
// import { Component } from "@angular/core";
// import { HttpClient } from "@angular/common/http";

// interface Datapoints {
//   entryDate: string;
//   dollars: number;
// }

// @Component({
//   selector: "app-root",
//   templateUrl: "./app.component.html",
//   styleUrls: ["./app.component.scss"]
// })
// export class AppComponent {
//   budget: Datapoints[];
//   actual: Datapoints[];

//   constructor(private http: HttpClient) {
//     this.actual = [
//       {
//         entryDate: "2020-06-21",
//         dollars: 158848.58
//       },
//       {
//         entryDate: "2020-07-05",
//         dollars: 178060.52000000002
//       },
//       {
//         entryDate: "2020-07-19",
//         dollars: 229936.66000000003
//       },
//       {
//         entryDate: "2020-08-02",
//         dollars: 203350.31000000003
//       },
//       {
//         entryDate: "2020-08-16",
//         dollars: 65645.54999999999
//       },
//       {
//         entryDate: "2020-08-30",
//         dollars: 49141.48999999999
//       },
//       {
//         entryDate: "2020-09-13",
//         dollars: 54936.42
//       },
//       {
//         entryDate: "2020-09-27",
//         dollars: 27380.96
//       },
//       {
//         entryDate: "2020-10-11",
//         dollars: 26684.89
//       },
//       {
//         entryDate: "2020-12-06",
//         dollars: 11405.37
//       },
//       {
//         entryDate: "2020-12-20",
//         dollars: 72314.97
//       },
//       {
//         entryDate: "2021-01-03",
//         dollars: 39985.42
//       },
//       {
//         entryDate: "2021-01-17",
//         dollars: 25861.010000000002
//       },
//       {
//         entryDate: "2021-02-14",
//         dollars: 31024.68
//       },
//       {
//         entryDate: "2020-10-25",
//         dollars: 1237.02
//       },
//       {
//         entryDate: "2020-11-08",
//         dollars: 7897.68
//       },
//       {
//         entryDate: "2020-11-22",
//         dollars: 25198.88
//       },
//       {
//         entryDate: "2021-01-31",
//         dollars: 23225.629999999997
//       },
//       {
//         entryDate: "2021-02-28",
//         dollars: 24528.24
//       }
//     ];
//   }

//   ngOnInit(): void {
//     this.budget = [
//       {
//         entryDate: "2020-06-21",
//         dollars: 148728.4
//       },
//       {
//         entryDate: "2020-07-05",
//         dollars: 140157.59
//       },
//       {
//         entryDate: "2020-07-19",
//         dollars: 122209.36
//       },
//       {
//         entryDate: "2020-08-02",
//         dollars: 107790.26000000001
//       },
//       {
//         entryDate: "2020-08-16",
//         dollars: 103857.78
//       },
//       {
//         entryDate: "2020-08-30",
//         dollars: 100832.81999999999
//       },
//       {
//         entryDate: "2020-09-13",
//         dollars: 99421.14
//       },
//       {
//         entryDate: "2020-09-27",
//         dollars: 94278.69
//       },
//       {
//         entryDate: "2020-10-11",
//         dollars: 90951.19
//       },
//       {
//         entryDate: "2020-10-25",
//         dollars: 33415.21
//       },
//       {
//         entryDate: "2020-11-08",
//         dollars: 33415.21
//       },
//       {
//         entryDate: "2020-11-22",
//         dollars: 33415.21
//       },
//       {
//         entryDate: "2020-12-06",
//         dollars: 33415.21
//       },
//       {
//         entryDate: "2020-12-20",
//         dollars: 33415.21
//       }
//     ];
//   }
// }
