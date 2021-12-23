import { Component, OnInit,} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Competence } from '../model/Language';
import { CompetenceClasse } from '../model/LanguageClasse';
import { WebService } from '../service-web.service';

@Component({
  selector: 'app-alter-soft',
  templateUrl: './alter-soft.component.html',
  styleUrls: ['./alter-soft.component.css']
})
export class AlterSoftComponent implements OnInit {
  
  id : number
  p = new CompetenceClasse
  Prod = new FormGroup({
  nom : new FormControl(''),
  
  })
 


  onSubmit(){
    console.log(this.p.id)
     this.service.alterSoft(this.p).subscribe(data=>{}); 
     this.r.navigateByUrl('/admin');

    }

  constructor(private service:WebService, private ar:ActivatedRoute , private r:Router ) { }

  ngOnInit() {
    this.id =this.ar.snapshot.params.id
    this.service.getByIdSoft(this.id).subscribe(data=>{this.p=data});
    console.log(this.p.nom)
  }

}
