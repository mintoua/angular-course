import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  titre:string = "List of post";

  messageDuFils: string = "List des posts";

  index: number = 45;

  @Input() fromParent: string | undefined;

  constructor() {
  }

  ngOnInit() {
  }
}
