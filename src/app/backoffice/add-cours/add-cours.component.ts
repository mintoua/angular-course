import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CoursService} from "../../services/cours.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.css']
})
export class AddCoursComponent implements OnInit{

  addCoursForm: any;

  constructor(private coursService: CoursService, private router: Router) {

  }

  ngOnInit() {
    this.addCoursForm = new FormGroup(
        {
          titre: new FormControl('',[
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(10)
          ]),
          description: new FormControl('',[
            Validators.required,
            Validators.minLength(5)
          ]),
          niveau: new FormControl('',[
            Validators.required
          ]),
        }
    )
  }


  get Titre(){
    return this.addCoursForm.get('titre');
  }

  get Description(){
    return this.addCoursForm.get('description');
  }
  get Niveau(){
    return this.addCoursForm.get('niveau');
  }

  addCours() {
   // this.coursService.addCours(this.addCoursForm.value);
    let formValue = this.addCoursForm.value;
    let cours = {
      id: this.coursService.coursArray.length + 1,
      titre: formValue.titre,
      description: formValue.description,
      niveau: formValue.niveau,
      formations: [],
      formateurs: []
    };
    this.coursService.addCours(cours);
    this.router.navigate(['/cours'])
  }
}
