import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProComponent } from './components/pro/pro.component';
import { AssoComponent } from './components/asso/asso.component';
import { TechnoComponent } from './components/techno/techno.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormationsComponent } from './components/formations/formations.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  { path: "formation", component: FormationsComponent},
  { path: "pro", component: ProComponent},
  { path: "asso", component: AssoComponent},
  { path: "techno", component: TechnoComponent},
  { path: "contact", component: ContactComponent},
  { path: "", component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProComponent,
    AssoComponent,
    TechnoComponent,
    ContactComponent,
    FormationsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
