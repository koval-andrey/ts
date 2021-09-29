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
require("./TodoEditor.css");
var TodoEditor = /** @class */ (function (_super) {
    __extends(TodoEditor, _super);
    function TodoEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            message: ''
        };
        _this.handleChange = function (e) {
            _this.setState({ message: e.currentTarget.value });
        };
        _this.handleSubmit = function (e) {
            e.preventDefault();
            _this.props.onSubmit(_this.state.message);
            _this.setState({ message: '' });
        };
        return _this;
    }
    TodoEditor.prototype.render = function () {
        return (react_1["default"].createElement("form", { className: "TodoEditor", onSubmit: this.handleSubmit },
            react_1["default"].createElement("textarea", { className: "TodoEditor__textarea", value: this.state.message, onChange: this.handleChange }),
            react_1["default"].createElement("button", { type: "submit", className: "TodoEditor__button" }, "SAVE")));
    };
    return TodoEditor;
}(react_1.Component));
exports["default"] = TodoEditor;
