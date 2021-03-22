declare class Creature433 {
    breathe(): void;
}
declare class Animal433 extends Creature433 {
    shakeTail(): void;
}
declare class Human433 extends Creature433 {
    greet(): void;
}
declare function action(creature: Animal433 | Human433 | Creature433): void;
