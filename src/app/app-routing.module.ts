import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CompetenceComponent } from './competence/competence.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:"accueil",component:AcceuilComponent},
  {path:"competence",component:CompetenceComponent},
  {path:"contact",component:ContactComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"**",component:ProjectsComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
