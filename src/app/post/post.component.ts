import {Component, OnInit} from '@angular/core';
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  etapeForm: any //etape 1, etape 2
  buttonAppuyer(etape: any)
  {
    this.etapeForm = etape;
  }

  //dependency injection
  constructor(private postService: PostService)
  {
  }

  ngOnInit() {

  }

}
