import { Component, OnInit } from '@angular/core';
import { faGasPump } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sales-by-station',
  templateUrl: './sales-by-station.component.html',
  styleUrls: ['./sales-by-station.component.scss']
})
export class SalesByStationComponent implements OnInit {
  faGasPump=faGasPump
  station = [
    {name:'Station Name' , rate:62721},
    {name:'Station Name' , rate:62721},
    {name:'Station Name' , rate:'NM'},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  isNumber(val:any): boolean { return typeof val === 'number'; }

}
