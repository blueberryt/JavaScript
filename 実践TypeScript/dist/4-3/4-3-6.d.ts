declare type User436 = {
    gender: string;
    [k: string]: any;
};
declare type UserA436 = User436 & {
    name: string;
};
declare type UserB436 = User436 & {
    age: number;
};
declare function isUserA(user: UserA436 | UserB436): user is UserA436;
declare function isUserB(user: UserA436 | UserB436): user is UserB436;
declare function getUserType437(user: any): "A" | "B" | "unknown";
declare const x436: string;
