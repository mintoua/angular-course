import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() brandDeParent:string | undefined;

  constructor() {
    console.log("brand from paraent: " + this.brandDeParent);
  }

  ngOnInit() {

  }


}
