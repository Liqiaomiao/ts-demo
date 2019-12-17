class Animal {
    constructor(kind) {
        this.kind = kind;
        if (this.kind === '哺乳动物') {
            this.birth = '胎生';
        }
        else {
            this.birth = '卵生';
        }
        this.secret = 'secret';
    }
}
class Human extends Animal {
    constructor() {
        super('哺乳动物');
        console.log(Human.job);
    }
    printProtected() {
        console.log(this.birth);
    }
}
Human.job = 'hahh';
let human = new Human();
console.log(Human.job, human);
human.printProtected();
// 存储器
let passcode = 'secret passcode';
class Employee {
    get fullName() {
        return this.fullName;
    }
    set fullName(newName) {
        if (passcode == 'secret passcode') {
            this._fullName = newName;
        }
        else {
            console.log('error');
        }
    }
}
let employee = new Employee();
employee.fullName = 'andy';
console.log(employee);
// 抽象类
class Department {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log('Department name: ' + this.name);
    }
}
class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }
    printMeeting() {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
    generateReports() {
        console.log('Generating accounting reports...');
    }
}
// let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
let department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
department.generateReports(); // 错误: 方法在声明的抽象类中不存在
// 构造函数
class Greeter {
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}
Greeter.standardGreeting = "Hello, there";
let greeter1;
greeter1 = new Greeter();
console.log(greeter1.greet());
let greeterMaker = Greeter;
console.log('typeof Greeter', typeof Greeter);
greeterMaker.standardGreeting = "Hey there!";
let greeter2 = new greeterMaker();
console.log(greeter2.greet());
