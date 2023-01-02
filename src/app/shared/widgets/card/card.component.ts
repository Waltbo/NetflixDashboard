import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  Highcharts = Highcharts;
  chartOptions = {}

  ngOnInit() {
    this.chartOptions = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares in March, 2022'
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
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 74.77,
            sliced: true,
            selected: true
        },  {
            name: 'Edge',
            y: 12.82
        },  {
            name: 'Firefox',
            y: 4.63
        }, {
            name: 'Safari',
            y: 2.44
        }, {
            name: 'Internet Explorer',
            y: 2.02
        }, {
            name: 'Other',
            y: 3.28
        }]
    }]


    }
    setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    )
  }, 300)
    HC_exporting(this.Highcharts)
  }

}
