declare type User438 = {
    name: string;
};
declare type UserA438 = User438 & {
    gender: "male" | "female" | "they";
};
declare type UserB438 = User438 & {
    graduate: string;
};
declare const users: (UserA438 | UserB438)[];
declare const filteredUsers: (UserA438 | UserB438)[];
declare function filterUser(user: UserA438 | UserB438): user is UserB438;
