"use strict";
var obj = {
    foo: false,
    bar: 1,
    baz: "2"
};
obj["foo"] = true;
// obj["foo"] = 0 互換性がない型の場合はエラーになる
