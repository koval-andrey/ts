"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var shortid_1 = require("shortid");
var TodoList_1 = require("./TodoList");
var TodoEditor_1 = require("./TodoEditor");
var Filter_1 = require("./Filter");
var Stats_1 = require("./Stats");
var barStyles = {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: 20
};
var getInitialTodoState = function () {
    var savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
};
var TodosView = function () {
    var _a = react_1.useState(getInitialTodoState), todos = _a[0], setTodos = _a[1];
    var _b = react_1.useState(''), filter = _b[0], setFilter = _b[1];
    react_1.useEffect(function () {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    var addTodo = function (text) {
        var todo = {
            id: shortid_1["default"].generate(),
            text: text,
            completed: false
        };
        setTodos(function (todos) { return __spreadArrays([todo], todos); });
    };
    var deleteTodo = function (todoId) {
        setTodos(function (todos) { return todos.filter(function (todo) { return todo.id !== todoId; }); });
    };
    var toggleCompleted = function (todoId) {
        setTodos(function (todos) {
            return todos.map(function (todo) {
                return todo.id === todoId ? __assign(__assign({}, todo), { completed: !todo.completed }) : todo;
            });
        });
    };
    var changeFilter = function (filter) {
        setFilter(filter);
    };
    var visibleTodos = react_1.useMemo(function () {
        var normalizedFilter = filter.toLowerCase();
        return todos.filter(function (todo) {
            return todo.text.toLowerCase().includes(normalizedFilter);
        });
    }, [filter, todos]);
    var completedTodoCount = react_1.useMemo(function () {
        return todos.reduce(function (total, todo) { return (todo.completed ? total + 1 : total); }, 0);
    }, [todos]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(TodoEditor_1["default"], { onSubmit: addTodo }),
        react_1["default"].createElement("div", { style: barStyles },
            react_1["default"].createElement(Filter_1["default"], { value: filter, onChange: changeFilter }),
            react_1["default"].createElement(Stats_1["default"], { total: todos.length, completed: completedTodoCount })),
        react_1["default"].createElement(TodoList_1["default"], { todos: visibleTodos, onDeleteTodo: deleteTodo, onToggleCompleted: toggleCompleted })));
};
exports["default"] = TodosView;
