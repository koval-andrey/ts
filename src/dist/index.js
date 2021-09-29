"use strict";
exports.__esModule = true;
var React = require("react");
var react_dom_1 = require("react-dom");
var react_router_dom_1 = require("react-router-dom");
var App_1 = require("./components/App");
react_dom_1.render(React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement(App_1["default"], null)), document.querySelector('#root'));
