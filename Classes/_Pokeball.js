"use strict";
exports.__esModule = true;
exports.Pokeball = void 0;
var Pokeball = /** @class */ (function () {
    function Pokeball(proprietaire) {
        this.proprietaire = proprietaire;
    }
    Pokeball.prototype.getContenu = function () {
        return this.contient;
    };
    Pokeball.prototype.affecterPokemon = function (pokemon) {
        this.contient = pokemon;
    };
    Object.defineProperty(Pokeball.prototype, "contient", {
        get: function () {
            return this._contient;
        },
        set: function (value) {
            this._contient = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pokeball.prototype, "proprietaire", {
        get: function () {
            return this._proprietaire;
        },
        set: function (value) {
            this._proprietaire = value;
        },
        enumerable: false,
        configurable: true
    });
    return Pokeball;
}());
exports.Pokeball = Pokeball;
