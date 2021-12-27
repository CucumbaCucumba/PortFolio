import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { WebService } from '../service-web.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private service:WebService) { }

  projects : Project[]
  tech :  Array<string> = [];
  i:number=1;
  ngOnInit(){

  this.service.getProjects().subscribe(data=>{ this.projects=data;
    console.log(this.projects)
    this.projects.forEach((element) => {
      let i:number = 0;
        element.lang.forEach(x => {
          this.tech[i]=" "
          this.tech[i]=this.tech[i]+x.nom.toString()+" + ";
        });
        element.soft.forEach(y => {
          this.tech[i]=this.tech[i]+y.nom.toString()+" + ";
        });
        console.log(i);
        this.tech[i]=this.tech[i].slice(0,this.tech[i].length-2)
        i++
      });
      console.log(+this.tech)
      
    });        
    }
}
