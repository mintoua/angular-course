import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Session} from "../models/session";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  readonly API_URL = "http://localhost:3000/session";
  //api_Url = 'http://localhost:8089/api/v1/forum';

  constructor(private http: HttpClient) { }

  //Ecrire nos CRUD
  // verifier import {Observable} from "rxjs";

  //Read
  readAllSessions(): Observable<any>{
    return this.http.get(this.API_URL);
   //return this.http.get(`${this.API_URL}/getAll`)
  }

  //Create
  createSession(data: any){
    return this.http.post(this.API_URL,data)
    //return this.http.get(`${this.API_URL}/add`,data)
  }

  //Update
  updateSession(data: any){
    return this.http.put(this.API_URL,data);
  }

  //Delete
  deleteSession(id: number){
    return this.http.delete(`${this.API_URL}/${id}`)
  }

}
