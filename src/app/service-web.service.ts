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

  public getByIdProject(id:number):Observable<Project>
  {
   return this.http.get<Project>(this.host+"Project/"+id);
  }

  public getByIdLang(id:number):Observable<Languages>
  {
   return this.http.get<Languages>(this.host+"Lang/"+id);
  }

  public getByIdSoft(id:number):Observable<Languages>
  {
   return this.http.get<Languages>(this.host+"Soft/"+id);
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

  public addProject(project:Project):Observable<void>
  {
   return this.http.post<void>(this.host+"Project",project);
  }

  public addSoft(l:Languages):Observable<void>
  {
   return this.http.post<void>(this.host+"Soft/",l);
  }

  public addLang(l:Languages):Observable<void>
  {
   return this.http.post<void>(this.host+"Lang",l);
  }
  //PUT

  public alterProject(project:Project):Observable<void>
  {
   return this.http.put<void>(this.host+"Project",project);
  }

  public alterLang(l:Languages):Observable<void>
  {
   return this.http.put<void>(this.host+"Lang",l);
  }

  public alterSoft(s:Languages):Observable<void>
  {
   return this.http.put<void>(this.host+"Soft",s);
  }

}
