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
var Creature = /** @class */ (function () {
    function Creature(numberOfHands, numberOfFeet) {
        this.numberOfHands = numberOfHands;
        this.numberOfFeet = numberOfFeet;
    }
    return Creature;
}());
var creature = new Creature(0, 4);
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(bark) {
        var _this = _super.call(this, 0, 4) || this;
        _this.bark = bark;
        return _this;
    }
    Dog.prototype.barking = function () {
        return this.bark + "! " + this.bark + "!";
    };
    Dog.prototype.shakeTail = function () {
        console.log(this.barking());
    };
    return Dog;
}(Creature));
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human(name) {
        var _this = _super.call(this, 2, 2) || this;
        _this.name = name;
        return _this;
    }
    Human.prototype.greet = function () {
        return "Hello! I'm " + this.name;
    };
    Human.prototype.shakeHands = function () {
        console.log(this.greet());
    };
    return Human;
}(Creature));
var dog = new Dog("bow-wow");
dog.shakeTail();
var human = new Human("Risa");
human.shakeHands();
