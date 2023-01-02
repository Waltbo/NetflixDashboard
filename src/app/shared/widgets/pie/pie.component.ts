import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import {DataService} from "../data.service";


@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements AfterViewInit{
  constructor(private dataService: DataService) {}

  Highcharts = Highcharts;



  ngOnInit() {
    console.log(this.data)
  }

  data: any;
  chartOptions : any
  ngAfterViewInit():  void {
    this.fetchData()


  }
  fetchData(){
    this.dataService.getPieData().subscribe(data=>{
      this.data = data
      console.log(data)
      this.chartOptions = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Top 10 Most Produced Directors'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Share',
        colorByPoint: true,
        data: this.data
    }]


    }
    })
    setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    )
  }, 300)
    HC_exporting(this.Highcharts)
    console.log(this.data)

  }
}
