class Department {
    // private id: string
    // private name: string;
    private employees: string[] = [];
    // short-hand initialization
    constructor(private id: string, public name: string) {
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

const accounting = new Department("d1", "Accounting");

accounting.addEmployee("Jeff");
accounting.addEmployee("Marlon");

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = {name: "DUMMY", describe: accounting.describe};

// accountingCopy.describe();
