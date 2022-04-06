import { Pokemon } from "../Interfaces/_Pokemon";
import { Dresseur } from "./_Dresseur";

export class Pokeball {

    _contient!: Pokemon;
    _proprietaire!: Dresseur;

    constructor(proprietaire: Dresseur) {
        this.proprietaire = proprietaire;
    }

    public getContenu() {
        return this.contient;
    }

    public affecterPokemon(pokemon: Pokemon){
        this.contient = pokemon;
    }

    get contient(): Pokemon {
        return this._contient;
    }

    set contient(value: Pokemon) {
        this._contient = value;
    }

    get proprietaire(): Dresseur {
        return this._proprietaire;
    }

    set proprietaire(value: Dresseur) {
        this._proprietaire = value;
    }

}