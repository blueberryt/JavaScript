"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function waitThenString(duration) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`${duration}ms passed`), duration);
    });
}
function waitThenNumber(duration) {
    return new Promise(resolve => {
        setTimeout(() => resolve(duration), duration);
    });
}
function waitAll() {
    return Promise.all([
        waitThenString(10),
        waitThenNumber(100),
        waitThenString(1000)
    ]);
}
function waitRace() {
    return Promise.race([
        waitThenString(10),
        waitThenNumber(100),
        waitThenString(1000)
    ]);
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const [a, b, c] = yield waitAll();
        const result = yield waitRace();
    });
}
