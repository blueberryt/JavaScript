"use strict";
var list = ["this", "is", "a", "test"];
list.push("!");
console.log(list);
list = list.map(function (item) { return item.toUpperCase(); });
console.log(list);
var message = list.reduce(function (pref, current) { return pref + " " + current; });
console.log(message);
var list2 = [["this", "is"], ["a", "test"]];
// const flatten  =  list2.flat()
