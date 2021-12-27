import { Competence } from "./Language";
import { Project } from "./project";


export class ProjectClasse implements Project{

    constructor() {   
    }
    lang: Competence[];
    soft: Competence[];
    id: number;
    name: string;
    description: string;
    imgagePath: string;

}