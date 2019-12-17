function printThis(){
    'use strict'
    console.log(this) // 不加 use strict 会自动将this 包装成一个对象
}
printThis.call('frank')

let obj = {
    fn1(){
        console.log(this)
    },
    obj2:{
        fn(){
            'use strict'
            console.log(this)
        }
    }
}
obj.fn1()
// 类型兼容性
interface Human {
    name: string;
    age: number
}
// let x:Human = {'name':'angy',age:18,gender:'male'} // 直接写会报错
let obj2 = {'name':'angy',age:18,gender:'male'}
let x:Human = obj2

{
    // 强制类型转换
    let e: Event = new Event('hi')
    let x = (<MouseEvent>e).x;
}

{
    enum EventType { Mouse, Keyboard }

    interface Event { timestamp: number; }
    interface MouseEvent extends Event { x: number; y: number }
    interface KeyEvent extends Event { keyCode: number }

    function listenEvent(eventType: EventType, handler: (n: Event) => void) {
        /* ... */
    }

    // Unsound, but useful and common
    listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y));

    // Undesirable alternatives in presence of soundness
    listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x + ',' + (<MouseEvent>e).y));
    listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x + ',' + e.y)));

    // Still disallowed (clear error). Type safety enforced for wholly incompatible types
   // listenEvent(EventType.Mouse, (e: number) => console.log(e));
}
{
    // 重载
 function add(n1: number, n2: number);
 function add(n1: string, n2: string);
 function add(n1, n2) {
     return n1 + n2;
 }
 function add2<T>(n1: T, n2: T): T {
     return n1
 }
 add(1, 2); // 3
 add('frank', 'jack'); // 'frankjack'
 add2(new Date(), new Date())

}