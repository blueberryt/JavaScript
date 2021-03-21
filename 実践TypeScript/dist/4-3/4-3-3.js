"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Creature433 = /** @class */ (function () {
    function Creature433() {
    }
    Creature433.prototype.breaathe = function () { };
    return Creature433;
}());
var Animal433 = /** @class */ (function (_super) {
    __extends(Animal433, _super);
    function Animal433() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Animal433.prototype.shakeTail = function () { };
    return Animal433;
}(Creature433));
var Human433 = /** @class */ (function (_super) {
    __extends(Human433, _super);
    function Human433() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Human433.prototype.greet = function () { };
    return Human433;
}(Creature433));
function action433(creature) {
    var c0 = creature;
    c0.breaathe();
    if (creature instanceof Animal433) {
        var c1 = creature;
        return c1.shakeTail();
    }
    var c2 = creature;
    if (creature instanceof Human433) {
        var c3 = creature;
        return c3.greet();
    }
    var c4 = creature;
    return c4.breaathe();
}
