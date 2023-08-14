import {Component, OnInit} from '@angular/core';
import {CoursService} from "./services/cours.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Liste des cours";

  coursArray: Array<any> | undefined;


  //injection de la dépendance
  constructor(private coursService: CoursService)
  {

  }

  ngOnInit() {
    this.coursArray = this.coursService.getAllCours()
  }

  addItem(){
/*    this.coursArray.push(
      {
      titre: 'Introduction à VueJS',
      description: 'Découvrez le framework VueJS.',
      difficulte: 'Débutant',
      credit: 3,
      formateur: 'Mta'
    }
    )*/
  }

  deleteFromCoursArray($event:any){
/*    let index = this.coursArray.indexOf($event);
    this.coursArray.splice(index, 1);*/
  }
}
