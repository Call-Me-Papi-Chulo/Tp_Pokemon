import { Pokeball } from "./_Pokeball";
import { Pokemon } from "../Interfaces/_Pokemon";

export class Dresseur {

    private _nom: string;
    private _Pokeball: Pokeball[] = [];

    constructor(nom: string){
        this._nom = nom;
    }

    /**
     * 
     * Permet d'ajouter une pokeball au dresseur si il n'a pas atteint 
     * le maximum de pokéballs (6)
     * 
     */
    public ajouterPokeballs(){
        if (this._Pokeball.length < 6){
            this._Pokeball.push(new Pokeball(this));
            console.log('Tu viens d\'ajouter une pokeball !');
        } else {
            throw new Error('Un dresseur ne peut avoir que 6 Pokeballs, vous avez atteint le maximum.');
        }
        
    }


    /**
     * 
     * @param Pokemon 
     * Permet au dresseur de capturer un pokemon si il possède une pokeball vide
     */
    public capturer(Pokemon: Pokemon): void{
        this._Pokeball.map(pokeball => {
            let i = false;
            if (!pokeball.contient){
                if (!i) {
                    if (!Pokemon._captif) {
                        pokeball.affecterPokemon(Pokemon);
                        Pokemon._captif = true;
                        i = true;
                    }
                }
            }
        });
    }

    /**
     * 
     * Permet de recuperer et d'afficher les pokémons que le dresseur possède
     * 
     */
    public getPokemons(): void{
        try{
            this._Pokeball.map(pokeball => {console.log( `Tu possède [${pokeball.contient._nom}] comme pokemon`);});
        }catch {
            console.log('La pokeball est vide');
        }
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }


}