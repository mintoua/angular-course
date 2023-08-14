import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

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
  constructor() { }


  getAllCours(){
    return this.coursArray
  }
}
