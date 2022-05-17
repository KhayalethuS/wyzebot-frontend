import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class Character {
  id?: string;
  name!: string;
  image!: string;
  powers!: Array<string>;
}

@Injectable({
  providedIn: 'root',
})

export class CrudService {


  constructor(private httpClient: HttpClient) {}
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getCharacters(): Observable<Character> {
    return this.httpClient
      .get<Character>(environment.http + '/list-characters')
      .pipe(retry(1), catchError(this.processError));
  }

  addCharacter(data: any): Observable<Character> {
    return this.httpClient
      .post<Character>(
        environment.http + '/characters',
        JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.processError));
  }

  updateCharacter(id: any, data: any): Observable<Character> {
    return this.httpClient
      .put<Character>(
        environment.http + '/characters',
        JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.processError));
  }

  processError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(() => {
      message;
    });
  }
}
