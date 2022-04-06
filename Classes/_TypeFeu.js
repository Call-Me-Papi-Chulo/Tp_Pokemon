"use strict";
exports.__esModule = true;
exports.TypeFeu = void 0;
var TypeFeu = /** @class */ (function () {
    function TypeFeu(degats) {
        this._degats = degats;
    }
    TypeFeu.prototype.calculerDegatsContreEau = function (cible) {
        var degats = this._degats * 0.5;
        return degats;
    };
    TypeFeu.prototype.calculerDegatsContreFeu = function (cible) {
        var degats = this._degats * 0.5;
        return degats;
    };
    TypeFeu.prototype.calculerDegatsContrePlante = function (cible) {
        var degats = this._degats * 2;
        return degats;
    };
    return TypeFeu;
}());
exports.TypeFeu = TypeFeu;
