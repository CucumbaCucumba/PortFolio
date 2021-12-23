import { Component, OnInit,} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  imgPath : new FormControl(''),
  
  })
 


  onSubmit(){
    console.log(this.p.id)
     this.service.alterProject(this.p).subscribe(data=>{}); 
     this.r.navigateByUrl('/admin');

    }

  constructor(private service:WebService, private ar:ActivatedRoute , private r:Router ) { }

  ngOnInit() {
    this.id =this.ar.snapshot.params.id
    this.service.getByIdProject(this.id).subscribe(data=>{this.p=data});
    console.log(this.p.name)
  }

}
