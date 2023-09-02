import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Formateur} from "../models/formateur";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  readonly API_URL = "http://localhost:3000/formateur"

  constructor(private httpClient: HttpClient) { }

  getAllFormateurs(){
    return this.httpClient.get<Formateur[]>(this.API_URL);
  }

  addFormateur(data: any): Observable<any>{
    return this.httpClient.post(this.API_URL,data);
  }

  deleteFormateur(id: number){
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }

  updateFormateur(id: number, data: any){
    return this.httpClient.put(`${this.API_URL}/${id}`, data);
  }
}
