import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BasicComponent } from './components/modal/basic/basic.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';
import { CharactersViewComponent } from './components/characters-view/characters-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    EditComponent,
    CharactersViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
