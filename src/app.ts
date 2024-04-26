class Department {
    name: string;
    private employees: string[] = [];
    constructor(n: string) {
        this.name = n;
    }

    // Special parameter which refers to the property of the department class
    describe(this: Department) {
        console.log("Department: " + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department("Accounting");

accounting.addEmployee("Jeff");
accounting.addEmployee("Marlon");

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = {name: "DUMMY", describe: accounting.describe};

// accountingCopy.describe();
