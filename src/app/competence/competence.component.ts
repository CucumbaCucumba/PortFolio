import { Component, OnInit } from '@angular/core';
import { Competence } from '../model/Language';
import { CompetenceClasse } from '../model/LanguageClasse';
import { WebService } from '../service-web.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit {

  competence :Competence[];
  Languages :string = "";
  Soft :string ="";

  constructor(private service:WebService) { }

  ngOnInit() {
    this.service.getLanguages().subscribe(data=>{ this.competence=data
    this.competence.forEach(e => { this.Languages = this.Languages+e.nom+" - ";
      
    });
   console.log(this.Languages)
      }); 
    this.service.getSoft().subscribe(data=>{ this.competence=data
      this.competence.forEach(e => { this.Soft = this.Soft+e.nom+" - ";
        
      });
     console.log(this.Languages)
        }); 
  }

}
