import { Pokemon } from "../Interfaces/_Pokemon";
import { Type } from "../Interfaces/_Type";

export abstract class TypePlante implements Type {
    
    _degats: number;

    constructor(degats: number){
        this._degats = degats;
    }
    
    calculerDegatsContreEau(cible: Pokemon): number {
        let degats =this._degats*2;
        return degats;
    }

    calculerDegatsContreFeu(cible: Pokemon): number {
        let degats=this._degats*0.5;
        return degats;
    }

    calculerDegatsContrePlante(cible: Pokemon): number {
        let degats=this._degats*0.5;
        return degats;
    }

    

}