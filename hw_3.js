// Task_1, Task_2, Task_7**
const Employee = function(employee){
    this.id = employee['id'];
    this.name = employee['name'];
    this.surname = employee['surname'];
    this.salary = employee['salary'];
    this.workExperience = employee['workExperience'];
    this.isPrivileges = employee['isPrivileges'];
    this.gender = employee['gender'];
}

Employee.prototype.getFullName = function(){
    return `${this.surname} ${this.name}`;
}

Object.defineProperties(Employee.prototype, {
    fullInfo: {
         get: function(){
            let tempStr = '';
            for(let key in this){
                if(this.hasOwnProperty(key)) tempStr += `${key} - ${this[key]}, `;
            }
            return tempStr.slice(0, -2);
         }
        ,set: function(arr){
            for (let key in arr) this[key] = arr[key];
        }
    }
});

const employeeObj = new Employee(emplyeeArr[0]);

class EmployeeClass{
    constructor(employee){
        this.id = employee['id'];
        this.name = employee['name'];
        this.surname = employee['surname'];
        this.salary = employee['salary'];
        this.workExperience = employee['workExperience'];
        this.isPrivileges = employee['isPrivileges'];
        this.gender = employee['gender'];
    }

    getFullName(){
        return `${this.surname} ${this.name}`;
    }

    get fullInfo(){
        let tempStr = '';
        for(let key in this){
            tempStr += `${key} - ${this[key]}, `;
        }
        return tempStr.slice(0, -2);
    }

    set fullInfo(arr){

        for (let key in arr){
            this[key] = arr[key];
        }
    }
}

const employeeClassObj = new EmployeeClass(emplyeeArr[1]);

// Task_3
let createEmployesFromArr = (arr) => {
    let tempArr = [];
    for(let value of arr){
        const newEplObj = new Employee(value);
        tempArr[tempArr.length] = newEplObj;
    }
    return tempArr;
};

const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);

// Task_4
const getFullNamesFromArr = (arr) => {
    let tempArr = [];
    for(let key in arr){
        tempArr[tempArr.length] = arr[key].getFullName();
    }
    return tempArr;
}

getFullNamesFromArr(emplyeeConstructArr);

// Task_5
const getMiddleSalary = (arr) => {
    let totalSalary = 0;
    for(let value of arr){
        totalSalary += value.salary;
    }
    return totalSalary / arr.length;
}

getMiddleSalary(emplyeeConstructArr);

// Task_6*
const getRandomEmployee = (arr) => {
    return arr[Math.floor(Math.random() * (arr.length))];
}

getRandomEmployee(emplyeeConstructArr);
