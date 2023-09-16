import { Component, OnInit } from '@angular/core';
import { faUser , faImage , faBell ,faBars, faCog ,faSignOutAlt ,faTachometerAlt ,faTint, faLayerGroup} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  faUser = faUser;
  faImage = faImage;
  faBell=faBell
  faSignOutAlt=faSignOutAlt
  faCog = faCog
  faBars=faBars
  faTachometerAlt=faTachometerAlt
  faLayerGroup=faLayerGroup
  faTint=faTint
  constructor() { }

  ngOnInit(): void {
  }

}
