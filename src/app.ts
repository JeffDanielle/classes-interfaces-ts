// Interface describe structure of an object
interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: "Jeff",
    age: 24,
    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    },
};

user1.greet("Hi, my name is");
