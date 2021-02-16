declare class Creature263 {
    numberOfHands: number;
    numberOfFeet: number;
    constructor(numberOfHands: number, numberOfFeet: number);
}
declare class Human263 extends Creature263 {
    protected name: string;
    constructor(name: string);
    protected greet(): string;
    shakeHands(): void;
}
declare class Taro extends Human263 {
    constructor();
    greeting(): void;
}
declare const taro: Taro;
