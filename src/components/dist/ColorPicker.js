"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./ColorPicker.css");
var ColorPicker = function (_a) {
    var options = _a.options, _b = _a.initialOptionPos, initialOptionPos = _b === void 0 ? 1 : _b;
    var _c = react_1.useState(initialOptionPos - 1), activeOptionIdx = _c[0], setActiveOptionIdx = _c[1];
    var setActiveIdx = function (index) { return setActiveOptionIdx(index); };
    var makeOptionClassName = function (index) {
        var optionClasses = ['ColorPicker__option'];
        if (index === activeOptionIdx) {
            optionClasses.push('ColorPicker__option--active');
        }
        return optionClasses.join(' ');
    };
    var label = options[activeOptionIdx].label;
    return (react_1["default"].createElement("div", { className: "ColorPicker" },
        react_1["default"].createElement("h2", { className: "ColorPicker__title" }, "Color Picker"),
        react_1["default"].createElement("p", null,
            "\u0412\u044B\u0431\u0440\u0430\u043D \u0446\u0432\u0435\u0442: ",
            label),
        react_1["default"].createElement("div", null, options.map(function (_a, index) {
            var label = _a.label, color = _a.color;
            return (react_1["default"].createElement("button", { key: label, className: makeOptionClassName(index), style: { backgroundColor: color }, onClick: function () { return setActiveIdx(index); } }));
        }))));
};
exports["default"] = ColorPicker;
