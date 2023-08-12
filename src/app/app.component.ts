import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Liste des cours";

  coursArray: Array<any> = [
    {
      titre: 'Introduction à Angular',
      description: 'Découvrez le framework Angular pour créer des applications Web modernes.',
      difficulte: 'Débutant',
      credit: 3,
      formateur: 'Mta'
    },
    {
      titre: 'Introduction à Spring Boot',
      description: 'Découvrez le framework',
      difficulte: 'Débutant',
      credit: 3,
      formateur: 'Mta'
    },
    {
      titre: 'Introduction à React JS',
      description: 'Découvrez le framework React.',
      difficulte: 'Débutant',
      credit: 3,
      formateur: 'Mta'
    },
  ]

  addNewItem(){
    this.coursArray.push(    {
      titre: 'Introduction à VueJS',
      description: 'Découvrez le framework VueJS.',
      difficulte: 'Débutant',
      credit: 3,
      formateur: 'Mta'
    })
  }

  deleteItem($event:any){
    let index = this.coursArray.indexOf($event);
    this.coursArray.splice(index, 1);
  }
}
