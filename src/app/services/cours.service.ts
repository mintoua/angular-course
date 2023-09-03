import { Injectable } from '@angular/core';
import {Cours} from "../models/cours";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, throwError} from "rxjs";
import {Formateur} from "../models/formateur";

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  readonly API_URL = "http://localhost:3000/cours"

  constructor(private httpClient: HttpClient) { }
    getAllCours(){
    //return this.coursArray;
      return this.httpClient.get<Cours[]>(this.API_URL)
        .pipe(
          catchError(this.handleError)
        );
    }

/*    findOneById(id: number){
    return this.coursArray.find(
      cours => cours.id == id
    );
    }*/

    addCours(nouveauCours: Cours){
    //this.coursArray.push(nouveauCours);
      return this.httpClient.post(this.API_URL,nouveauCours);
    }

    deleteCours(id: number){
/*    const index = this.coursArray.findIndex(cours => cours.id == id);
    if(index != -1){
      this.coursArray.splice(index, 1);
    }*/
      return this.httpClient.delete(`${this.API_URL}/${id}`)
    }

  updateCours(id: number, data: any){
    return this.httpClient.put(`${this.API_URL}/${id}`, data);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
