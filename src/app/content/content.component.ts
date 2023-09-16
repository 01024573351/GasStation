import { Component, OnInit } from '@angular/core';

import { faStream ,faSignal} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  open:boolean = false
  faStream = faStream
  faSignal=faSignal
  data = [
    {number:71028 , discrimination : 'EGP', kind:'Total Value' , arrow:'2%' },
    {number:20000 , discrimination : 'm3', kind:'Total Sales' , arrow:'50 m3' },
    {number:2000 , discrimination : 'm3', kind:'Avg Sales' , arrow:'50 m3' },
    {number:1567, discrimination : '', kind:'Total Transaction Count' , Arrow:'20' }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  graph(){
    this.open = false
  }
  list(){
    this.open = true
  }

}
