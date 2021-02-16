"use strict";
var a4 = [0, 1]; // 型は const a4: (0 | 1)[] になる
a4.push(1);
// a4.push(2)  Error
a4.push(0);
