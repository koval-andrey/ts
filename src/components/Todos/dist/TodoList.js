"use strict";
exports.__esModule = true;
var react_1 = require("react");
var classnames_1 = require("classnames");
require("./TodoList.css");
var TodoList = function (_a) {
    var todos = _a.todos, onDeleteTodo = _a.onDeleteTodo, onToggleCompleted = _a.onToggleCompleted;
    return (react_1["default"].createElement("ul", { className: "TodoList" }, todos.map(function (_a) {
        var id = _a.id, text = _a.text, completed = _a.completed;
        return (react_1["default"].createElement("li", { key: id, className: classnames_1["default"]('TodoList__item', {
                'TodoList__item--completed': completed
            }) },
            react_1["default"].createElement("input", { type: "checkbox", className: "TodoList__checkbox", checked: completed, onChange: function () { return onToggleCompleted(id); } }),
            react_1["default"].createElement("p", { className: "TodoList__text" }, text),
            react_1["default"].createElement("button", { type: "button", className: "TodoList__btn", onClick: function () { return onDeleteTodo(id); } }, "DELETE")));
    })));
};
exports["default"] = TodoList;
