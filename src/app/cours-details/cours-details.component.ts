import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cours-details',
  templateUrl: './cours-details.component.html',
  styleUrls: ['./cours-details.component.css']
})
export class CoursDetailsComponent implements OnInit{
  @Input() coursArray: any;

  @Output() deleteEvent = new EventEmitter<boolean>();
  titre="Cours";

  constructor() {
  }

  ngOnInit() {
  }

  sendDelete(cours: any){
    this.deleteEvent.emit(cours);
  }
}
