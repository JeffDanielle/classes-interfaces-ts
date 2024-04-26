var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    // Special parameter which refers to the property of the department class
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    return Department;
}());
var accounting = new Department("Accounting");
accounting.describe();
var accountingCopy = { name: "DUMMY", describe: accounting.describe };
accountingCopy.describe();
