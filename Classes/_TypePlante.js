"use strict";
exports.__esModule = true;
exports.TypePlante = void 0;
var TypePlante = /** @class */ (function () {
    function TypePlante(degats) {
        this._degats = degats;
    }
    TypePlante.prototype.calculerDegatsContreEau = function (cible) {
        var degats = this._degats * 2;
        return degats;
    };
    TypePlante.prototype.calculerDegatsContreFeu = function (cible) {
        var degats = this._degats * 0.5;
        return degats;
    };
    TypePlante.prototype.calculerDegatsContrePlante = function (cible) {
        var degats = this._degats * 0.5;
        return degats;
    };
    return TypePlante;
}());
exports.TypePlante = TypePlante;
