"use strict";
var Ports;
(function (Ports) {
    Ports["USER_SERVICE"] = "8080";
    Ports["REGISTER_SERVICE"] = "8081";
    Ports["MEDIA_SERVICE"] = "8888";
})(Ports || (Ports = {}));
// ことなるブロックで宣言されても enum を追加できる
(function (Ports) {
    Ports["ANOTHER_SERVICE"] = "12345";
})(Ports || (Ports = {}));
