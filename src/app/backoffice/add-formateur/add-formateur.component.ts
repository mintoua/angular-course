import {Component, OnInit} from '@angular/core';
import {FormateurService} from "../../services/formateur.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.css']
})
export class AddFormateurComponent implements OnInit{

  addFormateurForm:  any;


  constructor(private formateurService: FormateurService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }
  ngOnInit() {
    this.addFormateurForm = new FormGroup({
      nom: new FormControl('',[Validators.required]),
      prenom: new FormControl(''),
      adresse: new FormControl(''),
      telephone: new FormControl(''),
      email: new FormControl('')
    });

/*    this.addFormateurForm = this.formBuilder.group({
      nom: ['',[Validators.required]],
      prenom: new FormControl(''),
      adresse: new FormControl(''),
      telephone: new FormControl(''),
      email: new FormControl('')
    })*/
  }

  get Nom(){
    return this.addFormateurForm.get('nom');
  }
  get Prenom(){
    return this.addFormateurForm.get('prenom');
  }
  get Adresse(){
    return this.addFormateurForm.get('adresse');
  }
  get Telephone(){
    return this.addFormateurForm.get('telephone');
  }
  get Email(){
    return this.addFormateurForm.get('email');
  }

  addFormateur(){
    if(this.addFormateurForm.valid){
      this.formateurService.addFormateur(this.addFormateurForm.value)
        .subscribe({
          next: (value: any) => {
            //normalement afficher un flashy notif
            alert('added successfully');
            this.router.navigate(['/formateurs'])
          },
          error: (err: any) => {
            console.error(err)
          }
        })
    }
  }
}
