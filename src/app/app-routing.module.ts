import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { FormationComponent } from './components/formation/formation.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "formation", component: FormationComponent},
  { path: "", component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
