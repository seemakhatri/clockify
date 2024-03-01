import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexAnnotations,
  ApexFill,
  ApexStroke,
  ApexGrid,
} from "ng-apexcharts";

import { ApexNonAxisChartSeries, ApexResponsive } from 'ng-apexcharts';
import { EditClientComponent } from 'src/app/Modules/clients/components/edit-client/edit-client.component';



export type ChartOptions = {
  series?: ApexAxisChartSeries | any;
  chart?: ApexChart | any;
  dataLabels? : ApexDataLabels | any;
  plotOptions? : ApexPlotOptions | any;
  yaxis: ApexYAxis  | any;
  xaxis: any; //ApexXAxis;
  annotations? : ApexAnnotations| any;
  fill? : ApexFill | any;
  stroke: ApexStroke | any;
  grid: ApexGrid | any;
};

export type SecondChartOptions = {
  series?: ApexNonAxisChartSeries|any;
  chart?: ApexChart|any;
  labels?: any;
  responsive?: ApexResponsive[]|any;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  minDate = new Date();
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public secondChartOptions: Partial<SecondChartOptions>;

  displayedColumns: string[] = ['name', 'activity', 'progress'];
  dataSource = [
    { name: 'Project A', activity: 'Company X', progress: 'Yes' },
    { name: 'Project B', activity: 'Company Y', progress: 'No' },
    { name: 'Project C', activity: 'Company Z', progress: 'Yes' },
  ];

  
  constructor(private fb: FormBuilder, private dialog: MatDialog, private router: Router){
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
    this.chartOptions = {
      series: [
        {
          name: "Servings",
          data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
        }
      ],
      annotations: {
        points: [
          {
            x: "Bananas",
            seriesIndex: 0,
            label: {
              borderColor: "#775DD0",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "Bananas are good"
            }
          }
        ]
      },
      chart: {
        height: 350,
        type: "bar",
        toolbar: {}, 
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
        }
      },
      dataLabels: {
        enabled: false  
      },
      stroke: {
        width: 2
      },

      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"]
        }
      },
      xaxis: {
        labels: {
          rotate: -45
        },
        categories: [
          "Apples",
          "Oranges",
          "Strawberries",
          "Pineapples",
          "Mangoes",
          "Bananas",
          "Blackberries",
          "Pears",
          "Watermelons",
          "Cherries",
          "Pomegranates",
          "Tangerines",
          "Papayas"
        ],
        tickPlacement: "on"
      },
      yaxis: {
        title: {
          text: "Servings"
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100]
        }
    }
  }


  this.secondChartOptions = {
    series: [44, 55],
    chart: {
      type: 'donut',
    },
    labels: ['Team A', 'Team B'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };
}

onSubmit(event: Event) {
  event.preventDefault();
}

archiveClient(client: any): void {
  console.log('Archive client:', client);
}

openEditModal(): void {
  this.dialog.open(EditClientComponent, {
    width: '35%',
  });
}


}

