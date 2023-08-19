import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CoursService} from "../services/cours.service";

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrls: ['./cours-list.component.css']
})
export class CoursListComponent implements OnInit{
  coursArray: Array<any> = [];


  //injection de la dépendance
  constructor(private coursService: CoursService)
  {

  }

  ngOnInit() {
    this.coursArray = this.coursService.getAllCours()
  }

}
