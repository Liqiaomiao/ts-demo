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
{ // 多态的 this类型：表示某个包含类或者接口的 子类型，能很容易表现连贯接口间的继承
    class BasicCalculator{
        public constructor(protected value: number=0){}
        public currentValue(){
            console.log(this)
            return this.value
        }
        public add(operand: number){
            this.value+=operand
            console.log(this.value)
            return this
        }
    }
    let v = new BasicCalculator(2).add(3)
    console.log(v)
}