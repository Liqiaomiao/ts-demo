{ // 和运算
    interface A{
        name:string;
        age:number;
    }
    interface B{
        name:string;
        grade:number;
    }
    const c:A & B={ 
        name:'c',
        age: 18,
        grade:1
    }
}
{ // 或运算
    interface A{
        name:string;
        age:number;
    }
    interface B{
        name:string;
        grade:number;
    }
    const c:A | B={ 
        name:'c',
        age: 18
    }
    function add(a:number,b:number):number;
    function add(a:string,b:string):string;
    function add(a:any,b:any){
        return a+b
    }
    add(1,3)
    add('hello','world')
}
{ // 类型的别名
    type Name = string;
    let a:Name = 'andy';

}
{ // 字面量类型 :允许你指定 必须的固定值
    type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'
    class UIElement {
        animate (d:number,dy:number,easing:Easing){
            
        }
    }
    let button = new UIElement();
        button.animate(0, 0, "ease-in");
}
{ // 多态的 this类型：表示某个包含类或者接口的 子类型，能很容易表现连贯接口间的继承(既可以指向父类又可以指向子类)
    class BasicCalculator{
        public constructor(protected value: number=0){}
        public currentValue():number{
            return this.value
        }
        public add(operand: number){
            this.value+=operand
            return this
        }
    }
   
    class ScientificCalculator extends BasicCalculator{
        sin(){
            this.value = Math.sin(this.value)
            return this
        }
    }
    
    let v = new ScientificCalculator(2).add(3).sin().currentValue()
    console.log(v)
}
{ // 索引类型:编译器能够检查使用了动态属性名的代码
    const calender = (options)=>{
    }
    interface CalenderOptions{
        [K: string]:any
    }
    calender({
        time: new Date,
        view: 'yeare',
        showClose: true
    })
}
{ // 索引类型
     function test<T,K extends keyof T>(obj:T,names:K[]): T[K][]{
        return   names.map(item=>obj[item])
    }
    interface Person{
        name:string;
        age:number
    }
    const person:Person={
        name:'andy',
        age: 8
    }
    console.log('索引类型',test(person,['name','age']))

}