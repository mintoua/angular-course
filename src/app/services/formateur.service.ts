import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpErrorResponse} from "@angular/common/http";
import {Formateur} from "../models/formateur";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  readonly API_URL = "http://localhost:3000/formateur"

  constructor(private httpClient: HttpClient) { }

  getAllFormateurs(){
    return this.httpClient.get<Formateur[]>(this.API_URL)
      .pipe(
        catchError(this.handleError)
      );
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
