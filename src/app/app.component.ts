import { Component, OnInit, OnDestroy } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../environments/environment';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  characters: any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getCharacters();
  }

  ngOnDestroy() {}

  async getCharacters() {
    this.http.get(`${environment.http}/list-characters`)
    .subscribe((data) => {
      this.characters = data;
    });
  }

}
