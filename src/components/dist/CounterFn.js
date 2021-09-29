"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Counter.css");
var Counter = function (_a) {
    var _b = _a.initialValue, initialValue = _b === void 0 ? 0 : _b, _c = _a.step, step = _c === void 0 ? 1 : _c;
    var _d = react_1.useState(initialValue), value = _d[0], setValue = _d[1];
    var increment = function () { return setValue(function (value) { return value + step; }); };
    var decrement = function () { return setValue(function (value) { return value - step; }); };
    return (react_1["default"].createElement("div", { className: "Counter" },
        react_1["default"].createElement("span", { className: "Counter__value" }, value),
        react_1["default"].createElement("div", { className: "Counter__controls" },
            react_1["default"].createElement("button", { type: "button", onClick: increment },
                "\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043D\u0430 ",
                step),
            react_1["default"].createElement("button", { type: "button", onClick: decrement },
                "\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u043D\u0430 ",
                step))));
};
exports["default"] = Counter;
