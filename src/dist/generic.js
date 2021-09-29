"use strict";
// дженерик -интерфейс:
exports.__esModule = true;
var john = { id: 24 };
var mary = { id: "fgfhgh" };
console.log(john, mary);
var tab1 = {
    id: "id-1",
    position: 2,
    active: false,
    content: "tab data"
};
var tab2 = {
    id: "id-2",
    position: 7,
    active: true,
    content: ["content-1", "content-2"]
};
console.log(tab1, tab2);
var makeState = function (initialState) {
    var state = initialState;
    var getState = function () {
        return state;
    };
    var setState = function (newState) {
        state = newState;
    };
    return {
        getState: getState,
        setState: setState
    };
};
var animationState = makeState("playing");
animationState.setState("playing");
//animationState.setState("error"); ошибка
var httpsState = makeState("success");
httpsState.setState("error");
//дженерик- классы:
var State = /** @class */ (function () {
    function State(initialState) {
        this.state = initialState;
    }
    State.prototype.getState = function () {
        return this.state;
    };
    State.prototype.setState = function (newState) {
        return this.state = newState;
    };
    return State;
}());
var animationState1 = new State("playing");
animationState1.setState("playing");
