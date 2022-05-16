import { Component, OnInit, OnDestroy } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../environments/environment';

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
    this.characters = [
      {
          "_id": "62829c0a7f3a95470dd62c79",
          "name": "Mholo",
          "image": "url",
          "powers": [
              "Dance",
              "run",
              "talk"
          ]
      }]
  }

}
