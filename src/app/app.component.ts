import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Liste des cours";
  cours = {
    titre: 'Introduction à Angular',
    description: 'Découvrez le framework Angular pour créer des applications Web modernes.',
    difficulte: 'Débutant',
    credit: 3,
    formateur: 'Mta'
  };
}
