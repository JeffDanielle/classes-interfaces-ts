var Department = /** @class */ (function () {
    // short-hand initialization
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private id: string
        // private name: string;
        this.employees = [];
        // this.name = name;
        // this.id = id;
    }
    // Special parameter which refers to the property of the department class
    Department.prototype.describe = function () {
        console.log("Department (".concat(this.id, "): ").concat(this.name));
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
var accounting = new Department("d1", "Accounting");
accounting.addEmployee("Jeff");
accounting.addEmployee("Marlon");
accounting.describe();
accounting.printEmployeeInformation();
// const accountingCopy = {name: "DUMMY", describe: accounting.describe};
// accountingCopy.describe();
