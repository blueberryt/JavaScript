"use strict";
function getStringValue(value, prefix) {
    // if (prefix === undefined) return value  ※ string  って宣言で成約しているのでエラる
    return prefix + " " + value;
}
