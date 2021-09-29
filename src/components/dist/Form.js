"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Form(_a) {
    var onSubmit = _a.onSubmit;
    var _b = react_1.useState(''), email = _b[0], setEmail = _b[1];
    var _c = react_1.useState(''), password = _c[0], setPassword = _c[1];
    var onChange = function (evt) {
        var _a = evt.currentTarget, name = _a.name, value = _a.value;
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                console.warn("\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0435 \u0438\u043C\u044F \u043F\u043E\u043B\u044F - " + name);
        }
    };
    var handleSubmit = function (evt) {
        evt.preventDefault();
        onSubmit({ email: email, password: password });
    };
    return (react_1["default"].createElement("form", { onSubmit: handleSubmit },
        react_1["default"].createElement("label", null,
            "POST",
            react_1["default"].createElement("input", { type: "mail", name: "email", onChange: onChange, value: email })),
        react_1["default"].createElement("label", null,
            "PASSWORD",
            react_1["default"].createElement("input", { type: "password", name: "password", onChange: onChange, value: password })),
        react_1["default"].createElement("button", { type: "submit" }, "\u0412\u043E\u0439\u0442\u0438")));
}
exports["default"] = Form;
