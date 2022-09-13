import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProComponent } from './components/subsection/pro/pro.component';
import { AssoComponent } from './components/subsection/asso/asso.component';
import { TechnoComponent } from './components/subsection/techno/techno.component';
import { ContactComponent } from './components/subsection/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProComponent,
    AssoComponent,
    TechnoComponent,
    ContactComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
