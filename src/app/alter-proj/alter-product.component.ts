import { Component, OnInit, ɵangular_packages_core_core_q,} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Competence } from '../model/Language';
import { ProjectClasse } from '../model/projectClasse';
import { WebService } from '../service-web.service';

@Component({
  selector: 'app-alter-product',
  templateUrl: './alter-product.component.html',
  styleUrls: ['./alter-product.component.css']
})
export class AlterProductComponent implements OnInit {
  

  id : number
  p = new ProjectClasse
  Prod = new FormGroup({
  name : new FormControl(''),
  technology : new FormControl(''),
  description : new FormControl(''),
  imgPath : new FormControl('')})
  Softs:Competence[];
  Langs:Competence[]; 
  selectedLang :number ;
  selectedSoft :number ;
  selectednumbL:number;
  selectednumbS:number;
  onSubmit(){
    console.log(this.selectedLang)
    this.p.soft=[this.Softs[this.selectedSoft]]
    this.p.lang=[this.Langs[this.selectedLang]]
    console.log(this.p)
    this.service.alterProject(this.p).subscribe(data=>{}); 
     this.r.navigateByUrl('/admin');

    }

  constructor(private service:WebService, private ar:ActivatedRoute , private r:Router ) { }

  ngOnInit() {
    this.id =this.ar.snapshot.params.id
    this.service.getByIdProject(this.id).subscribe(data=>{this.p=data
      this.service.getLanguages().subscribe(data=>{ this.Langs=data
        this.Langs.forEach((element,index) => {
          if (element.id == this.p.lang[0].id) {
            this.selectednumbL=index
          }
        })
        });
        this.service.getSoft().subscribe(data=>{ this.Softs=data
          this.Softs.forEach((element,index) => {
            if (element.id == this.p.soft[0].id) {
              this.selectednumbS=index
            }
          });
          console.log(this.Softs)
          console.log(this.selectednumbS)
          console.log(this.Softs[this.selectednumbS])
          }); 
           console.log(this.p)
    });

   
  }

}
