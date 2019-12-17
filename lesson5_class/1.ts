class Animal{
    kind:string;
    protected birth:string;
    private secret:string;
    constructor(kind:string){
        this.kind = kind
        if(this.kind ==='哺乳动物'){
            this.birth = '胎生'
        }else{
            this.birth = '卵生'
        }
        this.secret = 'secret'
    }
}
class Human extends Animal{
    static job = 'hahh'
    
    constructor(){
        super('哺乳动物')
        
        console.log(Human.job)
    }
    printProtected():void{
        console.log(this.birth)
    }
}
let human = new Human()
console.log(Human.job,human)
human.printProtected()

// 存储器
let passcode = 'secret passcode';
class Employee {
    _fullName: string;
    get fullName(){
        return this.fullName
    }
    set fullName(newName: string){
        if(passcode == 'secret passcode'){
            this._fullName = newName
        }else{
            console.log('error')
        }
    }
}
let employee = new Employee()
employee.fullName = 'andy'
console.log(employee)

// 抽象类

abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
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
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
console.log('typeof Greeter',typeof Greeter)
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());