interface Named {
    // In an interface we can define readonly properties
    readonly name: string;
}

// Interface describe structure of an object
// Ability to also inherit from another interface
interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    // Must satisfy the setup of interface to be able to use it
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

let user1: Greetable;

user1 = new Person("Jeff");

user1.greet("Hi, my name is");

// Interface enforces structure of an object which secures a certain class to have a certain structure
