export class Personnalite {

    souhait: string;
    traitMental: string;
    traitPhysique: string;
    traitSocial: string;
    traitStyleVie: string;
    traitBonus: string;

    constructor(souhait: string, traitMental: string, traitPhysique: string, traitSocial: string, traitStyleVie: string, traitBonus: string){
        this.souhait = souhait;
        this.traitMental = traitMental;
        this.traitPhysique = traitPhysique;
        this.traitSocial = traitSocial;
        this.traitStyleVie = traitStyleVie;
        this.traitBonus = traitBonus;
    }

}
