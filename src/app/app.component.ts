import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {PostComponent} from "./post/post.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  brand = "Logone blog";

  parentMessage:string ="Parent Message";

  infoFilsPostComponent: any;

  message:any;

  @ViewChild(PostComponent) postComponent: any;

/*  @ViewChild(PostComponent) childComp: any;*/

  constructor() {
    console.log("affiche composant fils: " + this.postComponent)
  }

  ngAfterViewInit() {
    console.log(this.postComponent)
    this.infoFilsPostComponent = this.postComponent.titre; //Message du fils: PostComponent
    console.log(this.infoFilsPostComponent);
    /*    this.message = this.childComp.messagePost;*/
  }

  received($event: any){
    console.log($event);
  }

}
