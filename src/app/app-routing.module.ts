import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'add', component: CreateCharacterComponent },
  { path: 'list', component: AppComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
