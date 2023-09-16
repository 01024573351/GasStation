import { Component, OnInit } from '@angular/core';
import { faSortUp ,faSortDown} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataViewComponent implements OnInit {
  faSortUp = faSortUp
  faSortDown = faSortDown
  data = [
    {number:71028 , discrimination : 'EGP', kind:'Total Value' , arrow:'2%' , arrow2:'down'},
    {number:20000 , discrimination : 'm3', kind:'Total Sales' , arrow:'50 m3' , arrow2:'up'},
    {number:2000 , discrimination : 'm3', kind:'Avg Sales' , arrow:'50 m3' , arrow2:'down'},
    {number:1567, discrimination : '', kind:'Total Transaction' , arrow:'20' , arrow2:'up'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
