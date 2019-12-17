let a:null = null
let s = Symbol('hi')
console.log(a,s)
interface Human {
    readonly name: string;
    age: number;
    say(word: string): void;
}
let frank : Human ={
    name: 'frank',
    age: 18,
    say(word:string){
        console.log(`${this.name}:${word}`)
    }
}
interface SquareConfig {
    color?: number;
    width?: number;
    [propName: string]:number;
}
function createSquare(config:SquareConfig):void{}
// createSquare({width:100,color:'red',height:100}) 多余参数会报错
let config = { 
    
    color: 666
}
let mySquare = createSquare(config) // 通过对象传进来的会比较符合语义

interface describeFun {
    (a:number, b:number):number;
}
let add:describeFun = (a:number,b:number):number =>{
    return a
}
add(1,2)
interface funAdd {
    (a:number,b:number):number
}
let x:funAdd = (a:number,b:number):number=>{
    return a+b
}


interface fun {
    (a:number,b:number):number;
    minus(a:number,b:number):number
}
let addFun:fun = (
    ():fun=>{
        let x:any = (a:number,b:number):number=>{
            return a+b
        }
        x.minus = (a:number,b:number):number=>{
            return a-b
        }
        return x
    }
)()
addFun(1,2)
let addfun= ():fun=>{
    let x:any = (a:number,b:number):number=>{
        return a+b
    }
    x.minus = (a:number,b:number):number=>{
        return a-b
    }
    return x
}

console.log(addfun()(1,3))
interface 有机物{
    c:boolean;
    h:boolean; 
}
interface Animal extends 有机物{
    move():void
}
interface Human2 extends Animal{
    manname:string;
    age:number
}
let frank2:Human2 = {
    manname:'an',
    age:20,
    move:():void=>{},
    c:true,
    h:true
}