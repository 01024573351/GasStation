import { Component, ElementRef, OnInit } from '@angular/core';
import { faUser , faStop , faPlay ,faGasPump } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faUser=faUser
  faPlay=faPlay
  faStop=faStop
  faGasPump=faGasPump
  constructor() { }

  ngOnInit(): void {
  }
  changeType(input:any){
    input.type = "datetime-local"
  }

}
