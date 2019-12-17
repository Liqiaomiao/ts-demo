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
{ // 字面量类型 :允许你指定字符串必须的固定值
    function foo(x: number) {
        if (x !== 1) {
          console.log('x!=1')
        }
        if(x!==2){
            console.log('x!=2')
        }
    
    }
    foo(2)

}