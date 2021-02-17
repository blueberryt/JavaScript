"use strict";
let list = ["this", "is", "a", "test"];
list.push("!");
console.log(list);
list = list.map(item => item.toUpperCase());
console.log(list);
let message = list.reduce((pref, current) => `${pref} ${current}`);
console.log(message);
