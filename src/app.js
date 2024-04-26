var user1;
user1 = {
    name: "Jeff",
    age: 24,
    greet: function (phrase) {
        console.log("".concat(phrase, " ").concat(this.name));
    },
};
user1.greet("Hi, my name is");
