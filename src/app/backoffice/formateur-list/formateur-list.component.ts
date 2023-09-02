import {Component, OnInit} from '@angular/core';
import {FormateurService} from "../../services/formateur.service";

@Component({
  selector: 'app-formateur-list',
  templateUrl: './formateur-list.component.html',
  styleUrls: ['./formateur-list.component.css']
})
export class FormateurListComponent implements OnInit{

  formateursList: any;

  constructor(private formateurService: FormateurService) {
  }
  ngOnInit(): void {
      this.getFormateurs();
      //console.log(this.formateurService.getAllFormateurs().subscribe(data => console.log(data)));
  }

  getFormateurs(){
    return this.formateurService.getAllFormateurs()
      .subscribe(data => this.formateursList = data);
  }

  deleteFormateur(id: number){
    this.formateurService.deleteFormateur(id)
      .subscribe({
        next: (res) => {
          alert("Deleted successfully")
          this.getFormateurs();
        },
        error: console.log,
      })
  }
}
