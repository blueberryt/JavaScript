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
var Creature263 = /** @class */ (function () {
    function Creature263(numberOfHands, numberOfFeet) {
        this.numberOfHands = numberOfHands;
        this.numberOfFeet = numberOfFeet;
    }
    return Creature263;
}());
var Human263 = /** @class */ (function (_super) {
    __extends(Human263, _super);
    function Human263(name) {
        var _this = _super.call(this, 2, 2) || this;
        _this.name = name;
        return _this;
    }
    Human263.prototype.greet = function () {
        return "Hello! I'm " + this.name;
    };
    Human263.prototype.shakeHands = function () {
        console.log(this.greet());
    };
    return Human263;
}(Creature263));
var Taro = /** @class */ (function (_super) {
    __extends(Taro, _super);
    function Taro() {
        return _super.call(this, "Taro") || this;
    }
    Taro.prototype.greeting = function () {
        console.log(this.greet());
    };
    return Taro;
}(Human263));
var taro = new Taro();
taro.greeting();
// taro.greet()
taro.shakeHands();
