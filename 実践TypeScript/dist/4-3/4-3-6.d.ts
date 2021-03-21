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
declare function isUserA436(user: UserA436 | UserB436): user is UserA436;
declare function isUserB436(user: UserA436 | UserB436): user is UserB436;
