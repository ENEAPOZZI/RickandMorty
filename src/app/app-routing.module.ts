import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCharacterComponent } from './pages/single-character/single-character.component';
import { PreferitiComponent } from './pages/preferiti/preferiti.component';

const routes: Routes = [
   {
    path:'',
    component: HomeComponent
  },
  {
    path:'preferiti',
    component: PreferitiComponent
  },
  {
    path:'single/:id',
    component: SingleCharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
