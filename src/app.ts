// Interface can describe structure of a function
// type AddFn = (a: number, b: number) => number;
interface AddFn {
    // function in an interface
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
};

interface Named {
    // In an interface we can define readonly properties; in addition we can define optional properties
    readonly name?: string;
    outputName?: string;
}

// Interface describe structure of an object
// Ability to also inherit from another interface
interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    // Must satisfy the setup of interface to be able to use it
    name?: string;
    age = 30;

    constructor(n?: string) {
        if (n) {
            this.name = n;
        }
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(`${phrase} ${this.name}`);
        } else {
            console.log("Hi!");
        }
    }
}

let user1: Greetable;

user1 = new Person();

user1.greet("Hi, my name is");

// Interface enforces structure of an object which secures a certain class to have a certain structure
