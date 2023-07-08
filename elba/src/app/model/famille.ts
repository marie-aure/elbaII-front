import { Classe } from "./classe";
import { Sim } from "./sim";

export class Famille {

    id: number;
    nom: string;
    generation: number;
    classe: Classe; 
    chef : Sim;
    argentIG:number;
    sims:Sim[];

    constructor(id: number, nom: string, generation: number, classe: Classe, chef : Sim,argentIG:number, sims:Sim[]) {
        this.id = id;
        this.nom = nom;
        this.generation = generation;
        this.classe = classe;
        this.chef = chef;
        this.argentIG = argentIG;
        this.sims = sims;
    }

}
