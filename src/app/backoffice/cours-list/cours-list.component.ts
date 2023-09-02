import {Component, OnInit} from '@angular/core';
import {Cours} from "../../models/cours";
import {CoursService} from "../../services/cours.service";

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrls: ['./cours-list.component.css']
})
export class CoursListComponent implements OnInit {
  coursList: Array<Cours> = [];

  //injection de dépendance avec le constructor
  constructor(private coursService: CoursService) {}

  ngOnInit() {
    this.coursList =  this.getCours();
  }

  getCours(){
    return this.coursService.getAllCours();
  }

  deleteCours(id: number) {
    this.coursService.deleteCours(id);
  }
}
