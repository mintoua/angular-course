import {Component, OnInit} from '@angular/core';
import {Cours} from "../../models/cours";
import {CoursService} from "../../services/cours.service";

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrls: ['./cours-list.component.css']
})
export class CoursListComponent implements OnInit {
  coursList: any;

  //injection de dépendance avec le constructor
  constructor(private coursService: CoursService) {}

  ngOnInit() {
    this.coursList =  this.getCours();
  }

  getCours(){
   // return this.coursService.getAllCours();
    return this.coursService.getAllCours()
      .subscribe({
        next: value => this.coursList = value,
        error: err => {
          console.log(err);
          this.coursList = [];
        }
      })
  }

  deleteCours(id: number){
    this.coursService.deleteCours(id)
      .subscribe({
        next: (res) => {
          alert("Deleted successfully")
          this.getCours();
        },
        error: console.log,
      })
  }
}
