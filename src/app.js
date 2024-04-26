var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    // Special parameter which refers to the property of the department class
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department("Accounting");
accounting.addEmployee("Jeff");
accounting.addEmployee("Marlon");
accounting.describe();
accounting.printEmployeeInformation();
// const accountingCopy = {name: "DUMMY", describe: accounting.describe};
// accountingCopy.describe();
