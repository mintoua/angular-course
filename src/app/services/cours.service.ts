import { Injectable } from '@angular/core';
import {Cours} from "./cours";

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  coursArray: Array<Cours> = [
    {
      id: 2,
      titre: 'Introduction à Angular',
      description: 'Découvrez le framework Angular pour créer des applications Web modernes.',
      difficulte: 'Débutant',
      credit: 3,
      formateur: 'Mta'
    },
    {
      id: 3,
      titre: 'Introduction à Spring Boot',
      description: 'Découvrez le framework',
      difficulte: 'Débutant',
      credit: 3,
      formateur: 'Mta'
    },
    {
      id: 4,
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
