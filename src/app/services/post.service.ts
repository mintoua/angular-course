import { Injectable } from '@angular/core';
import {Post} from "../models/post";

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class PostService {

  postList: Array<Post> = [
    {id:1, titre: "Post 1", contenu: "contenu", comments: "message"},
    {id:1, titre: "Post 1", contenu: "contenu", comments: "message"},
  ]
  constructor() { }

  getAllPosts(): Array<any>{
    return this.postList;
  }

}
