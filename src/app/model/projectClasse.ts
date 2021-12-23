import { Project } from "./project";


export class ProjectClasse implements Project{

    constructor() {   
    }
    id: number;
    name: string;
    technology: string;
    description: string;
    imgagePath: string;

}