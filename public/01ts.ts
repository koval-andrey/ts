

/*
let age: number = 5;
const name: string = 'John';

let value: any = 5; //плохая практика

let user: object = {} // плохая практика

const id: string | number | undefined | boolean = 5;
    console.log(age, name, value, user, id ,);


const temps: number[] = [20, 30, 25.5, 40];
const numberRooms: Array<number> = [5, 6, 9, 10, 11];
const temps1: (number | string)[] = [1, '1a', 2, '2a'];
const temps2: readonly number[] = [1, 2, 3, 5, 9];
const t = temps2.filter((t) => t > 3)
const temps3 = [...temps2]

//temps2.push(7) нельзя - readonly

const colors: [number, number, number] = [255, 0, 225] //жестко указан тип и количество в массиве


console.log(temps, numberRooms, temps1, temps2, colors, t, temps3);


type ID = number;

const userId: ID = 555;

type Color = [number, number, number];
const colors1: Color = [255, 0, 225];

type ReqStatus = 'request' | 'success' | 'error';

const requestStatus: ReqStatus = 'success' //выдаёт ошибку, т.к. может хранить лишь request, success либо error

type CellSize = 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 ;// для жесткой привязкой к величинам

const sell: CellSize = 16;

console.log(userId, colors1, requestStatus, sell);



interface Config {
    readonly selector: string;
    perPage: number;
    startIndex?: number;
    draggable: boolean
};// интерфейсы для объектов, тайпы - для всего остального;

const config: Config = {
    selector: "#plugin-1",
    perPage: 2,
    startIndex: 0,
    draggable: false,
};

interface Employees { [key: string]: number };// если не известно количество элиментов но известен тип ключа и тип свойства

const employees: Employees = { mango: 5, poly: 10, ajax: 20, ana: 15 };

const entries = Object.entries(employees);
let bestEmployeeName = '';
let bestEmployeeProIndex = 0;

for (const [name, value] of entries) {
    if (bestEmployeeProIndex <= value) { bestEmployeeName = name };
}

interface Share {
    color: string;
}

interface Square extends Share { sideHight: number; };// наследование интерфейсов

let square: Square = { color: 'black', sideHight: 40 };

console.log(config, employees, bestEmployeeName, square);


//перечисление:
/*enum PizzaSize:  {
    Small = "s",
    Medium = "m",
    Large = "l"
}

console.log(PizzaSize.Small)*/

//функции:
/*
const addExpression = function (x: number, y: number): number {
    return x + y
}

addExpression(7, 9)

const addArrow = (x: number, y: number) => x + y;
addArrow(5, 3);

const fn = (a: number, b: number, c: number, ...restParam: number[]) => { };
fn(1, 2, 5, 7, 45, 90);
//либо: 
type Fn = (a: number, b: number, c: number, ...restParam: number[]) => number;

const fnA: Fn = (a, b, c, restParam) => { return 55 };

fnA(1, 2, 5, 7, 45, 90);

//или 
interface IFn {
 (a: number, b: number, c: number, ...restParam: number[]): number   
}
const fnB: IFn = (a, b, c, restParam) => { return 55 };

fnB(1, 2, 5, 7, 45, 90);

type LogFn = (m: string) => void; //усли функция ничего не возвращает

const log: LogFn = (message) => {
    console.log(message)
};

log("Hello!");


enum PizzaSize {
    Small = "s",
    Medium = "m",
    Large = "l",
    XXL ="xxl",
};

interface IPizza {
    size: PizzaSize.Small | PizzaSize.Medium | PizzaSize.Large | PizzaSize.XXL;
    toppings: string[];
    logSize(): void; //по старому было б: logSize:()=>void
    getSize(): string;
    addTopping(topping: string): void;
}

const pizza = {
    size: PizzaSize.Small,
    toppings: ["sause", "mishroom", "cheese", "chiken"],
    logSize() {
        console.log(this.size);
    },
    getSize() {
        return this.size;
    },
    addTopping(topping: string) {
        this.toppings.push(topping)
    },
};

console.log(pizza);


//классы:
interface Params {
    size: string;
    toppings: string[];
}

interface IPizzaClass {
    size: string;
    toppings: string[];
    addTopping(topping: string): void;
    
}

class PizzaClass implements IPizzaClass {
    public size: string;
    public toppings: string[];
    constructor({ size, toppings = [] }: Params) {
        this.size = size;
        this.toppings = toppings
    }

    private validateTopping(topping: string): boolean {
        console.log(topping)
        return true;
    }
    public addTopping(topping: string) {
        console.log(this.validateTopping(topping));
        this.toppings.push(topping);
    }
}

const pizzaDomino = new PizzaClass({ size: "medium", toppings: ["cheese", "tomato", "corn"] })

console.log(pizza);
console.log(pizza.toppings);


//generics:

const reverse = <T>(array: T[])=> {
    return [...array].reverse();
}

console.log(reverse([1, 3, 5, 7]));
console.log(reverse(['Mango', 'Zara', 'Mexx', 'Levi`s']));
console.log(reverse([{ a: 2 }, { b: 6 }, { c: 12 }, { d: 24 }]));


const isEqual = <T, Y>(a: T, b: Y) => {
    return Object.is(a, b);
};
console.log(isEqual(3, 3));
console.log(isEqual(3, '3'));

const makeArray = <T, Y>(a: T, b: Y) => {
    return [a, b]
};
console.log(makeArray(2, true));
console.log(makeArray("mango", "anna"));
console.log(makeArray(false, true));


const logLength = <T extends { length: number }>(arg: T) => {
    console.log(arg.length)
}
console.log(logLength([2, 5, 9, 11, 524]));
console.log(logLength(["sdfsgdrgdfgerge"]));
//console.log(logLength(21))

//либо 
interface ILength {
    length: number
}
const logLength1 = <T extends ILength>(arg: T) => {
    console.log(arg.length)
}
console.log(logLength1([2, 5, 9, 11, 524]));
console.log(logLength1(["sdfsgdrgdfgerge"]));


interface IPerson {
    fistName: string;
    lastName: string;
}

const addFullName = <T extends IPerson >(person: T) => {
    return {
        ...person, fullName: `${person.fistName} ${person.lastName}`
    };
};

console.log(addFullName({
    fistName: "Andrey",
    lastName: "Koval"
}));

type TAnimationState = "playing" | "paused";
type THttpState = "request" | "success" | "error";

const makeState = <S>(initialState: S) => {
    let state = initialState;
    const getState = () => {
        return state;
    }
    const setState = (newState: S) => {
        state = newState;
        
    }
    return {getState, setState}
}

const animationState = makeState<TAnimationState>("playing");
animationState.setState("paused");

const httpState = makeState<THttpState>("success");
httpState.setState("request")


export { }

*/
