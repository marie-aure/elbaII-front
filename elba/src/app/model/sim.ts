import { Conjoint } from "./sim/conjoint";
import { Personnalite } from "./sim/personnalite";
import { Starter } from "./sim/starter";

export class Sim {
    id:number;
    prenom: string;
    nom: string;
    genre: string;
    espece: string;
    orientation: string;
    personnalite:Personnalite | null;
    marie:boolean;
    adulte:boolean;
    decede:boolean;
    souhaitRealise:boolean;
    conjoint: Conjoint | null;
    starter:boolean;
    infoStarter: Starter | null;


    constructor(id:number, prenom: string, nom: string,  genre: string, espece: string, orientation: string,
        personnalite:Personnalite | null, marie:boolean, adulte:boolean, decede:boolean, souhaitRealise:boolean,
        conjoint:Conjoint | null, starter:boolean, infoStarter:Starter | null) {
        this.id = id;
        this.prenom = prenom;
        this.nom = nom;
        this.genre = genre;
        this.espece = espece;
        this.orientation = orientation;
        this.personnalite = personnalite;
        this.marie = marie;
        this.adulte = adulte;
        this.decede = decede;
        this.souhaitRealise = souhaitRealise;
        this.conjoint = conjoint;
        this.starter = starter;
        this.infoStarter = infoStarter;
    }
}
