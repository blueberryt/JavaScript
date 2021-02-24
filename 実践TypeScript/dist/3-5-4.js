"use strict";
function wait3(duration) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`${duration}ms passed`), duration);
    });
}
wait3(1000).then(res => { });
