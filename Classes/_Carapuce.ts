import { Pokemon } from "../Interfaces/_Pokemon";
import { TypeEau } from "./_TypeEau";

export class Carapuce extends TypeEau implements Pokemon {

    _captif: boolean;
    _horsJeu: boolean;
    _nom!: string;
    _pv: number;
    _pvMax: number;
    _type: string;
   

    constructor(pvMax: number, degats: number) {
        super(degats);
        this._pvMax = pvMax;
        this._nom = 'Carapuce';
        this._captif = false;
        this._horsJeu = false;
        this._pv = pvMax;
        this._type = 'Eau';
    }

    calculerDegat(cible: Pokemon): number {

        if (cible._type==='Feu'){
            return this.calculerDegatsContreFeu(cible)
        }
        else if (cible._type==='Eau'){
            return this.calculerDegatsContreEau(cible)
        }
        else if (cible._type==='Plante'){
            return this.calculerDegatsContrePlante(cible)
        }
    }

    /**
     * 
     * @param cible 
     * Permet d'attaquer un Pokemon en le placant en cible
     */
     attaquer(cible: Pokemon): void {
        cible.subirAttaque(this.calculerDegat(cible));
        console.log('Votre Pokémon viens de faire une attaque !');
    }
    /**
     * 
     * @param degats 
     * Permet 
     */
    subirAttaque(degats:number): void {
        this._pv = this._pv-degats
        console.log('Votre pokémon viens de subir une attaque ces pv sont de ' + this._pv);
    }
    
    /**
     * 
     * Permet de soigner un pokemon
     */
    soigner(): void {

        this._pv = this._pvMax;
        console.log('Vous venez de soigner votre pokemon, il a désormais ' + this._pv + ' pv !');

    }

    /**
     * 
     * @param nom 
     * Permet de renomer son pokemon
     */
    renommer(nom: string): void {
        this._nom = nom;
        console.log('Votre pokemon s\'apelle désormais ' + this._nom);
    }

    

}