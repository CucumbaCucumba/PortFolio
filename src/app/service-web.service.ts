import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Competence as Languages } from './model/Language';
import { CompetenceClasse } from './model/LanguageClasse';
import { Project } from './model/project';


@Injectable({
  providedIn: 'root'
})



export class WebService {
host="http://localhost:8080/api/"  
  constructor(private http:HttpClient) { }

//GET

  public getLanguages():Observable<Languages[]>{
      return this.http.get<Languages[]>(this.host+"Langs");
  }

  public getSoft():Observable<Languages[]>{
    return this.http.get<Languages[]>(this.host+"Softs");
}

  public getProjects():Observable<Project[]>{
    return this.http.get<Project[]>(this.host+"Projects")
  }

  //DELETE

  public delProject(id:number):Observable<void>
  {
   return this.http.delete<void>(this.host+"Project/"+id);
  }

  public delLang(id:number):Observable<void>
  {
   return this.http.delete<void>(this.host+"lang/"+id);
  }

  public delSoft(id:number):Observable<void>
  {
   return this.http.delete<void>(this.host+"Soft/"+id);
  }

  //POST

  //PUT

}
