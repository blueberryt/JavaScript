"use strict";
function increment() {
    return { type: "INCREMENT" };
}
function decrement() {
    return { type: "DECREMENT" };
}
var x20 = increment();
var y20 = decrement(); // 型は DECREMENT になる
