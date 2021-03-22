"use strict";
var users = [
    { name: "taro", gender: "they" },
    { name: "hanako", graduate: "Tokyo" }
];
var filteredUsers = users.filter(function (user) { return "graduate" in user; });
function filterUser(user) {
    return "graduate" in user;
}
