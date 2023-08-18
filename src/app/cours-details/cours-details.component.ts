import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cours-details',
  templateUrl: './cours-details.component.html',
  styleUrls: ['./cours-details.component.css']
})
export class CoursDetailsComponent implements OnInit{
  @Input() listCours: any;

  cours: any = {
    titre: 'Introduction à VueJS',
    description: 'Découvrez le framework VueJS.',
    difficulte: 'Débutant',
    credit: 3,
    formateur: 'Mta'
  };

  @Output() deleteEvent = new EventEmitter<any>();
  titre="Cours";

  constructor() {
  }

  ngOnInit() {
  }

  envoyerSupp(cours: any){
    this.deleteEvent.emit(cours);
  }
}
