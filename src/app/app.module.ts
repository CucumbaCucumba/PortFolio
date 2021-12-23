import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetenceComponent } from './competence/competence.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule}  from'@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CompetenceComponent,
    AcceuilComponent,
    ContactComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
