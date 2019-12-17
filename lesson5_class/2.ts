class A{
    a1:number;
    constructor(a1:number){
        this.a1 = a1
    }
    a2():void{
        console.log('from A')
    }
}
class B extends A {
    b1:string;
    constructor(a1:number,b1:string){
        super(a1)
        this.b1 = b1
    }
    b2():void{}
}