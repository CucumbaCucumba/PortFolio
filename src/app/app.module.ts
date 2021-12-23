import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetenceComponent } from './competence/competence.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule}  from'@angular/common/http';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { AlterProductComponent } from './alter-proj/alter-product.component';
import { AlterLangComponent } from './alter-lang/alter-lang.component';
import { AlterSoftComponent } from './alter-soft/alter-soft.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetenceComponent,
    AcceuilComponent,
    ContactComponent,
    ProjectsComponent,
    ListeProduitComponent,
    AlterProductComponent,
    AlterLangComponent,
    AlterSoftComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
