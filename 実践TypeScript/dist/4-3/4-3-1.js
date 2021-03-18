"use strict";
function reset(value) {
    var v0 = value;
    if (typeof value === "number") {
        var v1 = value;
        return 0;
    }
    var v2 = value;
    if (typeof value === "string") {
        var v3 = value;
        return "";
    }
    var v4 = value;
    return false;
}
console.log(reset(1));
console.log(reset("1"));
console.log(reset(true));
