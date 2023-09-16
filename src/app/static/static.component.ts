import { Component, OnInit } from '@angular/core';
import { faUser , faStop , faEllipsisV ,faGasPump } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss']
})
export class StaticComponent implements OnInit {
  faGasPump = faGasPump
  faEllipsisV = faEllipsisV
  list=[
    {TotalSale:'62721', TotalValue:'550' , compressionState:'compresstion' , TotalTransactionCount:'5161' , MaxTransactionHour:'20', MaxTransactionDateTime:'8-1-2021 | 10:16 PM'},
    {TotalSale:'62721', TotalValue:'550' , compressionState:'compresstion' , TotalTransactionCount:'5161' , MaxTransactionHour:'20', MaxTransactionDateTime:'8-1-2021 | 10:16 PM'},
    {TotalSale:'62721', TotalValue:'550' , compressionState:'compresstion' , TotalTransactionCount:'5161' , MaxTransactionHour:'20', MaxTransactionDateTime:'8-1-2021 | 10:16 PM'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
