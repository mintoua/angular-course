import { Injectable } from '@angular/core';
import {Cours} from "./cours";

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  coursArray: Array<Cours> = [
    new Cours(
      'Introduction à VueJS',
      'Découvrez le framework VueJS.',
      'Débutant',
      2,
      'Mta'),
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
