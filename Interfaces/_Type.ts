import { Pokemon } from "./_Pokemon";

export interface Type {

    _degats: number;

    calculerDegatsContreFeu(cible: Pokemon): number;

    calculerDegatsContreEau(cible: Pokemon): number;
    
    calculerDegatsContrePlante(cible: Pokemon): number;
}