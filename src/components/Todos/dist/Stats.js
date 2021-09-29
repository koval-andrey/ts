"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Stats.css");
;
var Stats = function (_a) {
    var total = _a.total, completed = _a.completed;
    return (react_1["default"].createElement("div", { className: "Stats" },
        react_1["default"].createElement("p", { className: "Stats__item" },
            react_1["default"].createElement("span", { className: "Stats__value" }, total),
            react_1["default"].createElement("span", { className: "Stats__label" }, "TOTAL")),
        react_1["default"].createElement("p", { className: "Stats__item" },
            react_1["default"].createElement("span", { className: "Stats__value" }, completed),
            react_1["default"].createElement("span", { className: "Stats__label" }, "COMPLETED"))));
};
exports["default"] = Stats;
