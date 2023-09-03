import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  readonly api_Url = 'http://localhost:3000/inscription';
  //readonly api_Url = 'http://localhost:8089/api/v1/stage';

  // injection de dependance du httpClient
  constructor(private http: HttpClient) { }

  //read
  readAllInscription(){
    return this.http.get(this.api_Url);
  }
  //delete
  deleteInscription(id: number){
    //return this.http.delete('http://localhost:3000/inscription/id')
    return this.http.delete(`${this.api_Url}/${id}`)
  }
  //create
  createInscription(data: any){
    return this.http.post(this.api_Url,data);
  }
  //update
  updateInscription(id:number,data: any){
    return this.http.put(`${this.api_Url}/${id}`, data);
  }
}
