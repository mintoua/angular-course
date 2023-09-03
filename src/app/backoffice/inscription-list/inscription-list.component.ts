import {Component, OnInit} from '@angular/core';
import {InscriptionService} from "../../services/inscription.service";

@Component({
  selector: 'app-inscription-list',
  templateUrl: './inscription-list.component.html',
  styleUrls: ['./inscription-list.component.css']
})
export class InscriptionListComponent implements OnInit{

  inscriptionList: any;

  constructor(private inscriptionService: InscriptionService) {
  }

  ngOnInit(): void {
    this.getAllInscription();
  }

  getAllInscription(){
    this.inscriptionService.readAllInscription()
      .subscribe({
        next: data => {
          this.inscriptionList = data;
        },
        error: err => {
          console.log(err);
        }
      })
  }

}
