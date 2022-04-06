"use strict";
exports.__esModule = true;
exports.Dresseur = void 0;
var _Pokeball_1 = require("./_Pokeball");
var Dresseur = /** @class */ (function () {
    function Dresseur(nom) {
        this._Pokeball = [];
        this._nom = nom;
    }
    /**
     *
     * Permet d'ajouter une pokeball au dresseur si il n'a pas atteint
     * le maximum de pokéballs (6)
     *
     */
    Dresseur.prototype.ajouterPokeballs = function () {
        if (this._Pokeball.length < 6) {
            this._Pokeball.push(new _Pokeball_1.Pokeball(this));
            console.log('Tu viens d\'ajouter une pokeball !');
        }
        else {
            throw new Error('Un dresseur ne peut avoir que 6 Pokeballs, vous avez atteint le maximum.');
        }
    };
    /**
     *
     * @param Pokemon
     * Permet au dresseur de capturer un pokemon si il possède une pokeball vide
     */
    Dresseur.prototype.capturer = function (Pokemon) {
        this._Pokeball.map(function (pokeball) {
            var i = false;
            if (!pokeball.contient) {
                if (!i) {
                    if (!Pokemon._captif) {
                        pokeball.affecterPokemon(Pokemon);
                        Pokemon._captif = true;
                        i = true;
                    }
                }
            }
        });
    };
    /**
     *
     * Permet de recuperer et d'afficher les pokémons que le dresseur possède
     *
     */
    Dresseur.prototype.getPokemons = function () {
        try {
            this._Pokeball.map(function (pokeball) { console.log("Tu poss\u00E8de [".concat(pokeball.contient._nom, "] comme pokemon")); });
        }
        catch (_a) {
            console.log('La pokeball est vide');
        }
    };
    Object.defineProperty(Dresseur.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (value) {
            this._nom = value;
        },
        enumerable: false,
        configurable: true
    });
    return Dresseur;
}());
exports.Dresseur = Dresseur;
