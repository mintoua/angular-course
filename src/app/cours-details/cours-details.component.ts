import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cours-details',
  templateUrl: './cours-details.component.html',
  styleUrls: ['./cours-details.component.css']
})
export class CoursDetailsComponent implements OnInit{
  @Input() cours: any;

  titre="Cours";
  constructor() {
  }

  ngOnInit() {
  }
}
