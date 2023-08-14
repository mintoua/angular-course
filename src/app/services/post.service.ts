import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postList: Array<any> = [
    {id:1, postTitle: "Post 1"},
    {id:2, postTitle: "Post 2"}
  ]
  constructor() { }

  getAllPosts(): Array<any>{

    return this.postList;
  }
}
