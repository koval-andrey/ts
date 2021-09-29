"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Filter.css");
;
var Filter = function (_a) {
    var value = _a.value, onChange = _a.onChange;
    return (react_1["default"].createElement("div", { className: "Filter" },
        react_1["default"].createElement("p", { className: "Filter_label" }, " Filter by content"),
        react_1["default"].createElement("input", { className: "Filter_input", type: "text", value: value, onChange: function (evt) { return onChange(evt.target.value); } })));
};
exports["default"] = Filter;
