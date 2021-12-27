import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Project } from '../model/project';
import { ProjectClasse } from '../model/projectClasse';
import { Competence } from '../model/Language';
import { CompetenceClasse } from '../model/LanguageClasse';
import { WebService } from '../service-web.service';


@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {

  p = new ProjectClasse;
  selectedLang :string
  selectedSoft :string
  Prod = new FormGroup({
  name : new FormControl(''),
  desc : new FormControl(''),
  imgpath : new FormControl(''),
  })

  l = new CompetenceClasse;
  Prod2 = new FormGroup({
  name : new FormControl(''),
  })

  s = new CompetenceClasse;
  Prod3 = new FormGroup({
  name : new FormControl(''),
  })
  nomButt :string = "masquer";
  LangF :Competence[];
  Langs:Competence[]; 

  SoftF :Competence[];
  Softs:Competence[]; 

  productsF :Project[];
  products:Project[]; 
  
  constructor(private service:WebService) { }



  filter(s:string){
    return this.products.filter(x=>x.name.indexOf(s)!=-1)
  }
  getColor(q:number){
    if(q==0)
      return "red"
      else
      return "black"
    }
  

  toggleIMG()
  {
    if(this.nomButt=="masquer")
      this.nomButt = "afficher"
    else
      this.nomButt = "masquer"  
  }
  deleteprojById(id:number){
    this.service.delProject(id).subscribe(data=>{
      this.service.getProjects().subscribe(data=>{ this.products=data
      this.productsF=this.products}); }); 
  }
  deletelangById(id:number){
    this.service.delLang(id).subscribe(data=>{
      this.service.getLanguages().subscribe(data=>{ this.Langs=data
      this.LangF=this.Langs}); }); 
  }

  deletesoftById(id:number){
    this.service.delSoft(id).subscribe(data=>{
      this.service.getSoft().subscribe(data=>{ this.Softs=data
      this.SoftF=this.Softs}); }); 
  }


  onSubmitProj(){
    console.log(this.selectedLang)
    console.log(this.LangF[parseInt(this.selectedLang)])
   this.p.name = this.Prod.get("name").value
   this.p.description = this.Prod.get("desc").value
   this.p.imgagePath = this.Prod.get("imgpath").value 
   this.p.lang =[this.LangF[parseInt(this.selectedLang)]]
   this.p.soft =[this.SoftF[parseInt(this.selectedSoft)]]
      this.service.addProject(this.p).subscribe(data=>{
        this.service.getProjects().subscribe(data=>{ this.products=data
        this.productsF=this.products});});
   }

   onSubmitLang(){
    this.l.nom = this.Prod2.get("name").value

     this.service.addLang(this.l).subscribe(data=>{
       this.service.getLanguages().subscribe(data=>{ this.Langs=data
       this.LangF=this.Langs});}); 
    }

    onSubmitSoft(){
      this.s.nom = this.Prod3.get("name").value
  
       this.service.addSoft(this.s).subscribe(data=>{
         this.service.getSoft().subscribe(data=>{ this.Softs=data
         this.SoftF=this.Softs});}); 
      }

  

  ngOnInit()
   {
    this.service.getProjects().subscribe(data=>{ this.products=data
      this.productsF=this.products}); 
    this.service.getLanguages().subscribe(data=>{ this.Langs=data
      this.LangF=this.Langs});
      this.service.getSoft().subscribe(data=>{ this.Softs=data
        this.SoftF=this.Softs}); 
   }

}
