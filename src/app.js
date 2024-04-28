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
