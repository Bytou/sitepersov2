import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { FormationComponent } from './components/subsection/formation/formation.component';
import { HomeComponent } from './components/home/home.component';
import { ProComponent } from './components/subsection/pro/pro.component';
import { AssoComponent } from './components/subsection/asso/asso.component';
import { TechnoComponent } from './components/subsection/techno/techno.component';
import { ContactComponent } from './components/subsection/contact/contact.component';

const routes: Routes = [
  { path: "formation", component: FormationComponent},
  { path: "pro", component: ProComponent},
  { path: "asso", component: AssoComponent},
  { path: "techno", component: TechnoComponent},
  { path: "contact", component: ContactComponent},
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
