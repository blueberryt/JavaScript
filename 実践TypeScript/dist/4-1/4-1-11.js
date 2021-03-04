"use strict";
function getFormattedValue3(value, unit) {
    if (unit === void 0) { unit = null; }
    var _value = value.toFixed(1);
    if (unit === null)
        return "" + _value;
    return _value + " " + unit.toUpperCase();
}
