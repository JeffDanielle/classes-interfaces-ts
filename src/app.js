var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    // short-hand initialization
    // readonly property cannot be changed after initialization
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private id: string
        // private name: string;
        // Available on class that extends department class
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
// Inheritance
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        // Super fetch the base constructor from the parent class
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        // getter must return something
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No report found.");
        },
        // setter must accept something
        set: function (value) {
            if (!value) {
                throw new Error("Please pass in a valid value!");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === "Jeff") {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log("Reports: ".concat(this.reports));
    };
    return AccountingDepartment;
}(Department));
var it = new ITDepartment("d1", ["Jeff"]);
it.addEmployee("Jeff");
it.addEmployee("Marlon");
it.describe();
it.printEmployeeInformation();
console.log(it);
var accounting = new AccountingDepartment("d2", []);
accounting.mostRecentReport = "Year End Report";
accounting.addReport("Report 1");
console.log(accounting.mostRecentReport);
accounting.addEmployee("Jeff");
accounting.addEmployee("Pisot");
accounting.printReports();
accounting.printEmployeeInformation();
// const accountingCopy = {name: "DUMMY", describe: accounting.describe};
// accountingCopy.describe();
