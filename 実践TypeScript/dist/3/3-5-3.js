"use strict";
function wait2(duration) {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve(duration + "ms passed"); }, duration);
    });
}
wait2(1000).then(function (res) { });
