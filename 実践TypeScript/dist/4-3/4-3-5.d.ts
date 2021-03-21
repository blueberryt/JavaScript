declare type UserA435 = {
    gender: "male";
    name: string;
};
declare type UserB435 = {
    gender: "female";
    age: number;
};
declare type UserC435 = {
    gender: "non-binary";
    graduate: string;
};
declare function judgeUserType435(user: UserA435 | UserB435 | UserC435): "user type is UserA435" | "user type is UserB435" | "user type is UserC435" | "user type is never";
