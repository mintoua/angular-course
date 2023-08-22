import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
/*  postTitle: string | undefined;
  postDetails: string | undefined;
  imageUrl: string | undefined;
  postUrl: string | undefined;
  addBackground: boolean | undefined;*/

  monFormulaire: any;

  constructor() {
    this.monFormulaire = new FormGroup(
      {
        email: new FormControl('',[
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9]+(?:\\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\\.[a-zA-Z0-9]+)*$")
        ]),
        username: new FormControl('',[
          Validators.required,
          Validators.minLength(5)
        ]),
        message: new FormControl('',[
          Validators.required,
        ])
      }
    )
  }

  get Username(){
    return this.monFormulaire.get('username');
  }

  get Email(){
    return this.monFormulaire.get('email');
  }

  get Message(){
    return this.monFormulaire.get('message');
  }
}
