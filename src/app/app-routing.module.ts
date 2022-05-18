import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersViewComponent } from './components/characters-view/characters-view.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  {path : '', component : CharactersViewComponent},
  { path: 'edit/:id', component: EditComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
