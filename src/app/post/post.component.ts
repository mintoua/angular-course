import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  etapeForm: any //etape 1, etape 2
  buttonAppuyer(etape: any)
  {
    this.etapeForm = etape;
  }
}
