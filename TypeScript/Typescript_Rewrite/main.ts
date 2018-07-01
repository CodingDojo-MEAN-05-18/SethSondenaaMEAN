const myNum: number = 5;
const myString: string = "Hello Universe";
const myArr: number[] = [1,2,3,4];
let myObj: object = { name:'Bill'};
let anythingVariable: any = "Hey";
anythingVariable = 25;
const arrayOne: boolean[] = [true, false, true, true]; 
const arrayTwo: any[] = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };

// object constructor
class MyNode {
    constructor(public pubVal: number, private privVal: number) {}
    doSomething(): void {
        console.log('${this.pubVal} is the public value and ${this.pribVal} is the private value.')
    }
}

let myNodeInstance = new MyNode(1, 2);
console.log(myNodeInstance.pubVal);

function printHello(val: string): string {
    return('Hello ${val}');
}

console.log(printHello("World"));

function errHandle(message: string): never {
	throw new Error(message);
}

errHandle('error occurred');