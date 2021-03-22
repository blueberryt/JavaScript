declare type User432 = {
    gender: string;
};
declare type UserA432 = User432 & {
    name: string;
};
declare type UserB432 = User432 & {
    age: number;
    graduate: string;
};
declare function judgeUserType(user: UserA432 | UserB432): void;
