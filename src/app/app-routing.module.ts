import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CompetenceComponent } from './competence/competence.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { AlterProductComponent } from './alter-proj/alter-product.component';
import { AlterLangComponent } from './alter-lang/alter-lang.component';
import { AlterSoftComponent } from './alter-soft/alter-soft.component';

const routes: Routes = [
  {path:"accueil",component:AcceuilComponent},
  {path:"competence",component:CompetenceComponent},
  {path:"contact",component:ContactComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"admin",component:ListeProduitComponent},
  {path:"admin/alterProject/:id",component:AlterProductComponent},
  {path:"admin/alterLang/:id",component:AlterLangComponent},
  {path:"admin/alterSoft/:id",component:AlterSoftComponent},
  {path:"**",component:ProjectsComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
