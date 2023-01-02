import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import {DataService} from "../data.service";


@Component({
  selector: 'app-widget-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit{


  Highcharts = Highcharts;
  constructor(private dataService: DataService) {}
  ngOnInit(){
    this.fetchData()
  //allows you to export chart to other formats
  HC_exporting(Highcharts);
  // automatic resize
  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    )
  }, 300)
  }

  data: any;
  chartOptions : any
  fetchData(){
    this.dataService.getChartData().subscribe(data =>{
      this.data = data
        this.chartOptions = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Highest Categories'
    },
    subtitle: {
        text: 'Most Listed Categories on Netflix'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Amount'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Listing amount: <b>{point.y:.1f}</b>'
    },
    series: [{
        name: 'Shows',
        data: this.data,
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]

}
      }
    )

  }
}

