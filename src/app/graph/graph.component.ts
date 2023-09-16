import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  data:object[] | undefined;
  xAxis:boolean =true;
  yAxis:boolean =true;

  constructor() {
    this.data  =[
      {name:'Station Name 1' ,value:250},
      {name:'Station Name 2' ,value:250},
      {name:'Station Name 3' ,value:140},
      {name:'Station Name 4' ,value:230},
      {name:'Station Name 5' ,value:140},
    ]

  }

  ngOnInit(): void {
  }

  chartOptions = {
    dataPointWidth: 15,
    axisY: {
     includeZero: true,
    },
	  data: [{
      type: "column",
      color:'#FF7F5C',
      dataPoints: [
        { label: "Station Name 1",  y: 250  },
        { label: "Station Name 2",  y: 250  },
        { label: "Station Name 3",  y: 140  },
        { label: "Station Name 4",  y: 230  },
        { label: "Station Name 4",  y: 140  },
        ]
	  }]
    };

}
