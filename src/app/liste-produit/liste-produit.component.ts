import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Produit } from '../model/produit';
import { ProduitC } from '../model/produitC';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {

  p = new ProduitC
  Prod = new FormGroup({
  name : new FormControl(''),
  price : new FormControl(''),
  quantity : new FormControl(''),
  })
  nomButt :string = "masquer";
  productsF :Produit[];
  products:Produit[]; 
  
  constructor(private service:ProduitsService) { }

  set y(s:string){
    this.productsF=this.filter(s);
  }

  filter(s:string){
    return this.products.filter(x=>x.nom.indexOf(s)!=-1)
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
  deleteById(id:number){
    this.service.delProductById(id).subscribe(data=>{
      this.service.getProducts().subscribe(data=>{ this.products=data
      this.productsF=this.products}); }); 
  }


  onSubmit(){
   this.p.nom = this.Prod.get('name').value
   this.p.prix = this.Prod.get('price').value
   this.p.quantite = this.Prod.get('quantity').value
    this.service.addProduct(this.p).subscribe(data=>{
      this.service.getProducts().subscribe(data=>{ this.products=data
      this.productsF=this.products});}); 
   }
  

  ngOnInit()
   {
    this.service.getProducts().subscribe(data=>{ this.products=data
      this.productsF=this.products}); 
   }

}
