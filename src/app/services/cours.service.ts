import { Injectable } from '@angular/core';
import {Cours} from "../models/cours";

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  coursArray: Array<Cours> =
      [
          {
              id: 1,
              titre: 'Introduction à Java',
              description: 'Découvrez le langage Java pour le développement des applications robustes.',
              niveau: 'DEBUTANT',
              formations: [],
              formateurs: []
          },
          {
              id: 2,
              titre: 'Introduction à Spring Boot',
              description: 'Découvrez le framework Spring Boot pour créer des applications entreprises modernes.',
              niveau: 'DEBUTANT',
              formations: [],
              formateurs: []
          },
          {
              id: 3,
              titre: 'Introduction à Angular',
              description: 'Découvrez le framework Angular pour créer des applications Web modernes.',
              niveau: 'DEBUTANT',
              formations: [],
              formateurs: []
          },
          {
              id: 4,
              titre: 'Introduction à React JS',
              description: 'Découvrez le framework React pour créer des applications Web modernes.',
              niveau: 'DEBUTANT',
              formations: [],
              formateurs: []
          }
      ]
  constructor() { }

    getAllCours(){
    return this.coursArray;
    }

    findOneById(id: number){
    return this.coursArray.find(
      cours => cours.id == id
    );
    }

    addCours(nouveauCours: Cours){
    this.coursArray.push(nouveauCours);
    alert("Cours added !!!")
    }

    deleteCours(id: number){
    const index = this.coursArray.findIndex(cours => cours.id == id);
    if(index != -1){
      this.coursArray.splice(index, 1);
    }
    }

}
