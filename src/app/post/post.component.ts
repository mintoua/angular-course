import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  titre:string = "List of post";
  messagePost: string = "Message post";

  postParentMessage: string ="Message from post parent";

  childMessage:string =  "From child component";

  @Input() fromParent: string | undefined;

  constructor() {
  }

  ngOnInit() {
  }
}
