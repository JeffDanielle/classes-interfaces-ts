class Department {
    // private id: string
    // private name: string;
    private employees: string[] = [];
    // short-hand initialization
    // readonly property cannot be changed after initialization
    constructor(private readonly id: string, public name: string) {
        // this.name = name;
        // this.id = id;
    }

    // Special parameter which refers to the property of the department class
    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

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
}

class AccountingDepartment extends Department {
    constructor(id: string, public reports: string[]) {
        super(id, "Accounting");
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(`Reports: ${this.reports}`);
    }
}

const it = new ITDepartment("d1", ["Jeff"]);

it.addEmployee("Jeff");
it.addEmployee("Marlon");

it.describe();
it.printEmployeeInformation();
console.log(it);

const accounting = new AccountingDepartment("d2", []);

accounting.addReport("Report 1");
accounting.addReport("Report 2");
accounting.printReports();

// const accountingCopy = {name: "DUMMY", describe: accounting.describe};

// accountingCopy.describe();
