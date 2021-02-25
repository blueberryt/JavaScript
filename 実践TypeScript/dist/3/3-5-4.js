"use strict";
function wait3(duration) {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve(duration + "ms passed"); }, duration);
    });
}
wait3(1000).then(function (res) { });
