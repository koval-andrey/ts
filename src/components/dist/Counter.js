"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
require("./Counter.css");
var Counter = /** @class */ (function (_super) {
    __extends(Counter, _super);
    function Counter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: _this.props.initialValue
        };
        _this.increment = function () { return _this.setState(function (_a) {
            var value = _a.value;
            return ({ value: value + 1 });
        }); };
        _this.decrement = function () { return _this.setState(function (_a) {
            var value = _a.value;
            return ({ value: value - 1 });
        }); };
        return _this;
    }
    Counter.prototype.render = function () {
        var value = this.state.value;
        var step = this.props.step;
        return (react_1["default"].createElement("div", { className: "Counter" },
            react_1["default"].createElement("span", { className: "Counter__value" }, value),
            react_1["default"].createElement("div", { className: "Counter__controls" },
                react_1["default"].createElement("button", { type: "button", onClick: this.increment },
                    "\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043D\u0430 ",
                    step),
                react_1["default"].createElement("button", { type: "button", onClick: this.decrement },
                    "\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u043D\u0430 ",
                    step))));
    };
    Counter.defaultProps = {
        initialValue: 0,
        step: 1
    };
    return Counter;
}(react_1.Component));
exports["default"] = Counter;
