"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Salameche = void 0;
var _TypeFeu_1 = require("./_TypeFeu");
var Salameche = /** @class */ (function (_super) {
    __extends(Salameche, _super);
    function Salameche(pvMax, degats) {
        var _this = _super.call(this, degats) || this;
        _this._pvMax = pvMax;
        _this._nom = 'Salameche';
        _this._captif = false;
        _this._horsJeu = false;
        _this._pv = pvMax;
        _this._type = 'Feu';
        return _this;
    }
    Salameche.prototype.calculerDegat = function (cible) {
        if (cible._type === 'Feu') {
            return this.calculerDegatsContreFeu(cible);
        }
        else if (cible._type === 'Eau') {
            return this.calculerDegatsContreEau(cible);
        }
        else if (cible._type === 'Plante') {
            return this.calculerDegatsContrePlante(cible);
        }
    };
    /**
     *
     * @param cible
     * Permet d'attaquer un Pokemon en le placant en cible
     */
    Salameche.prototype.attaquer = function (cible) {
        cible.subirAttaque(this.calculerDegat(cible));
        console.log('Votre Pokémon viens de faire une attaque !');
    };
    /**
     *
     * @param degats
     * Permet
     */
    Salameche.prototype.subirAttaque = function (degats) {
        this._pv = this._pv - degats;
        console.log('Votre pokémon viens de subir une attaque ces pv sont de ' + this._pv);
    };
    /**
     *
     * Permet de soigner un pokemon
     */
    Salameche.prototype.soigner = function () {
        this._pv = this._pvMax;
        console.log('Vous venez de soigner votre pokemon, il a désormais ' + this._pv + ' pv !');
    };
    /**
     *
     * @param nom
     * Permet de renomer son pokemon
     */
    Salameche.prototype.renommer = function (nom) {
        this._nom = nom;
        console.log('Votre pokemon s\'apelle désormais ' + this._nom);
    };
    return Salameche;
}(_TypeFeu_1.TypeFeu));
exports.Salameche = Salameche;
