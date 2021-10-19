class Company {
    constructor() {
        this.departments = new Map();
    }

    static Employee = class Employee {
        constructor(username, salary, position) {
            this.username = username;
            this.salary = salary;
            this.position = position;
        }

        get username() {
            return this._username;
        }
        set username(value) {
            this._validateParameter(value);
            this._username = value;
        }

        get salary() {
            return this._salary;
        }
        set salary(value) {
            this._validateParameter(value);
            if (value < 0) {
                throw new Error('Invalid input!');
            }
            return this._salary = value;
        }

        get position() {
            return this._position;
        }
        set position(value) {
            this._validateParameter(value);
            return this._position = value;
        }
        _validateParameter(value) {
            if (value === '' || value === undefined || value === null) {
                throw new Error('Invalid input!');
            }
        }
        compareTo(other) {
            let result = other.salary - this.salary;
            return result == 0 ? this.username.localeCompare(other.username) : result;
        }
        toString() {
            return `${this.username} ${this.salary} ${this.position}`;
        }
    }

    addEmployee(username, salary, position, department) {
        if (department === undefined || department === null || department === '') {
            throw new Error('Invalid input!');
        }

        if (!this.departments.has(department)) {
            this.departments.set(department, []);
        }

        let employee = new Company.Employee(username, salary, position);
        let workers = this.departments.get(department);
        workers.push(employee);
        return `New employee is hired. Name: ${username}. Position: ${position}`
    }
    bestDepartment() {
        let sortedDepartments = [...this.departments]
            .sort(([aName, aWorkers], [bName, bWorkers]) => {
                let aAvarageSalary = this._getAvarageSalary(aName);
                let bAvarageSalary = this._getAvarageSalary(bName);
                return bAvarageSalary - aAvarageSalary;
            });
        let [bestDepartmentName, bestDepartmentWorkers] = sortedDepartments[0];
        bestDepartmentWorkers.sort((a, b) => a.compareTo(b));
        let bestDepartmentString = `Best Department is: ${bestDepartmentName}\nAverage salary: ${this._getAvarageSalary(bestDepartmentName).toFixed(2)}`;
        let workersString = bestDepartmentWorkers.map(x => x.toString()).join('\n');
        return `${bestDepartmentString}\n${workersString}`;
    }
    _getAvarageSalary(departmentName) {
        let workers = this.departments.get(departmentName);
        let avarageSalary = workers.reduce((acc, w) => acc + w.salary, 0) / workers.length;
        return avarageSalary;
    }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());