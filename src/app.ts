// Interface describe structure of an object
interface Greetable {
    name: string;

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
