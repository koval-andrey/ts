// дженерик -интерфейс:

import { type } from "os";

interface User<U> { id: U}

const john: User<number> = { id: 24 };
const mary: User<string> = { id: "fgfhgh" };

console.log(john, mary);

interface Tab<T> {
   id: string,
    position: number,
    active: boolean,
    content: T, 
}

const tab1: Tab<string> = {
    id: "id-1",
    position: 2,
    active: false,
    content: "tab data",
}

const tab2: Tab<string[]> = {
    id: "id-2",
    position: 7,
    active: true,
    content: ["content-1", "content-2"],
}

console.log(tab1, tab2)



type TAnimationState = "playing" | "paused";
type THttpsState = "reqest" | "success" | "error"

const makeState = <S>(initialState: S) => {
    let state = initialState;
    const getState = () => {
        return state;
    };

    const setState = (newState: S) => {
        state = newState;
    };

    return {
        getState,
        setState,
    };
};

const animationState = makeState<TAnimationState>("playing");
animationState.setState("playing");
//animationState.setState("error"); ошибка


const httpsState = makeState<THttpsState>("success");
httpsState.setState("error");

//дженерик- классы:

class State <S> {
    private state;
    constructor(initialState: S) {
        this.state = initialState;
    }
    getState() {
        return this.state;
    }
    setState(newState: S) {
        return this.state = newState;
    }
}
const animationState1 = new State<TAnimationState>("playing");
animationState1.setState("playing");
//animationState1.setState("error") ошибка


export { }