import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {PostComponent} from "./post/post.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  brand = "Logone blog";

  parentMessage:string ="Parent Message";

  message:any;
  @ViewChild(PostComponent) childComp: any;

  constructor() {
    console.log(this.childComp);
  }

  ngAfterViewInit() {
    console.log(this.childComp)
    this.message = this.childComp.childMessage;
  }


}
