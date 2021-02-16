declare class Creature {
    numberOfHands: number;
    numberOfFeet: number;
    constructor(numberOfHands: number, numberOfFeet: number);
}
declare const creature: Creature;
declare class Dog extends Creature {
    bark: string;
    constructor(bark: string);
    barking(): string;
    shakeTail(): void;
}
declare class Human extends Creature {
    name: string;
    constructor(name: string);
    greet(): string;
    shakeHands(): void;
}
declare const dog: Dog;
declare const human: Human;
