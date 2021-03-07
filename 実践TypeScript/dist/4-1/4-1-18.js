"use strict";
var state = {
    id: 1,
    name: "taro"
};
var frozenState = Object.freeze(state);
// frozenState.name = "Hanako" エラる
// frozenState.id = 2 エラる
