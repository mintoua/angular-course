import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  stepForm: any
  onClick(status: any){
    this.stepForm = status;
  }
}
