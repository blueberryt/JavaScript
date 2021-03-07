declare type User = {
    age?: number;
    name?: string;
};
declare const notUser: {
    gender: string;
    graduate: string;
};
declare const maybeUser: {
    age: number;
    name: string;
    gender: string;
};
declare function registerUser(user: User): void;
