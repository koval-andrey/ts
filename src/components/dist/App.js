"use strict";
exports.__esModule = true;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Counter_1 = require("./Counter");
var CounterFn_1 = require("./CounterFn");
var ColorPicker_1 = require("./ColorPicker");
var Form_1 = require("./Form");
var TodosView_1 = require("./Todos/TodosView");
var colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
];
var App = function () { return (React.createElement(React.Fragment, null,
    React.createElement("h1", null, "React with TypeScript "),
    React.createElement("ul", null,
        React.createElement("li", null,
            React.createElement(react_router_dom_1.Link, { to: "/counter-cls" }, "\u0421\u0447\u0451\u0442\u0447\u0438\u043A-\u043A\u043B\u0430\u0441\u0441")),
        React.createElement("li", null,
            React.createElement(react_router_dom_1.Link, { to: "/counter-fn" }, "\u0421\u0447\u0451\u0442\u0447\u0438\u043A-\u0444\u0443\u043D\u043A\u0446\u0438\u044F")),
        React.createElement("li", null,
            React.createElement(react_router_dom_1.Link, { to: "/colorpicker" }, "\u041A\u043E\u043B\u043E\u0440\u043F\u0438\u043A\u0435\u0440")),
        React.createElement("li", null,
            React.createElement(react_router_dom_1.Link, { to: "/form" }, "\u0424\u043E\u0440\u043C\u0430")),
        React.createElement("li", null,
            React.createElement(react_router_dom_1.Link, { to: "/sync-todos" }, "\u0417\u0430\u043C\u0435\u0442\u043A\u0438"))),
    React.createElement(react_router_dom_1.Switch, null,
        React.createElement(react_router_dom_1.Route, { path: "/counter-cls" },
            React.createElement(Counter_1["default"], null)),
        React.createElement(react_router_dom_1.Route, { path: "/counter-fn" },
            React.createElement(CounterFn_1["default"], null)),
        React.createElement(react_router_dom_1.Route, { path: "/colorpicker" },
            React.createElement(ColorPicker_1["default"], { options: colorPickerOptions })),
        React.createElement(react_router_dom_1.Route, { path: "/form" },
            React.createElement(Form_1["default"], { onSubmit: function (cred) { return console.log(cred); } })),
        React.createElement(react_router_dom_1.Route, { path: "/sync-todos" },
            React.createElement(TodosView_1["default"], null))))); };
exports["default"] = App;
