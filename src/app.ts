abstract class Department {
    static fiscalYear = 2022;
    // private id: string
    // private name: string;
    // Available on class that extends department class
    protected employees: string[] = [];
    // short-hand initialization
    // readonly property cannot be changed after initialization
    constructor(protected readonly id: string, public name: string) {
        // this.name = name;
        // this.id = id;
    }

    // Static method allows us to call it without creating an instance
    static createEmployee(name: string) {
        return {name};
    }

    // Special parameter which refers to the property of the department class
    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

// Inheritance
class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        // Super fetch the base constructor from the parent class
        super(id, "IT");
    }

    describe() {
        console.log(`IT Department - ID: ${this.id}`);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    // getter must return something
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }

    // setter must accept something
    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error("Please pass in a valid value!");
        }
        this.addReport(value);
    }

    constructor(id: string, public reports: string[]) {
        super(id, "Accounting");
        this.lastReport = reports[0];
    }

    describe() {
        console.log(`Accounting Department - ID: ${this.id}`);
    }

    addEmployee(name: string): void {
        if (name === "Jeff") {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const employee1 = Department.createEmployee("Marlon");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Jeff"]);

it.addEmployee("Jeff");
it.addEmployee("Marlon");

it.describe();
it.printEmployeeInformation();
console.log(it);

const accounting = new AccountingDepartment("d2", []);

accounting.mostRecentReport = "Year End Report";
accounting.addReport("Report 1");
accounting.mostRecentReport;

accounting.addEmployee("Jeff");
accounting.addEmployee("Pisot");
// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();

// const accountingCopy = {name: "DUMMY", describe: accounting.describe};

// accountingCopy.describe();
