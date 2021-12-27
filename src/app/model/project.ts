import { Competence } from "./Language";

export interface Project{
    id : number;
    name : string;
    description:string;
    imgagePath:string;
    lang : Competence[];
    soft : Competence[];
}