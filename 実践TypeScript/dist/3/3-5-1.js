"use strict";
function wait(duration) {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve(duration + "ms passed"); }, duration);
    });
}
wait(1000).then(function (res) { });
