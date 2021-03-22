"use strict";
function isUserA(user) {
    return user.name !== undefined;
}
function isUserB(user) {
    return user.age !== undefined;
}
function getUserType437(user) {
    var u0 = user;
    if (isUserA(user)) {
        var u1 = user;
        return "A";
    }
    if (isUserB(user)) {
        var u2 = user;
        return "B";
    }
    return "unknown";
}
var x436 = getUserType437({ name: "Taro" });
