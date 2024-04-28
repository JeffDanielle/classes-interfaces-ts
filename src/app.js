var add;
add = function (n1, n2) {
    return n1 + n2;
};
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log("".concat(phrase, " ").concat(this.name));
    };
    return Person;
}());
var user1;
user1 = new Person("Jeff");
user1.greet("Hi, my name is");
// Interface enforces structure of an object which secures a certain class to have a certain structure
