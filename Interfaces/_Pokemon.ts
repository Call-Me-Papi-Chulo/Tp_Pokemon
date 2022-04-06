import { StringifyOptions } from "querystring";
import internal from "stream";

export interface Pokemon {

    _nom: string;
    _pv: number;
    _pvMax: number;
    _type: string;
    _captif: boolean;
    _horsJeu: boolean;

    attaquer(cible: Pokemon);
    subirAttaque(degats: number);
    soigner();
    renommer(nom: string);

}