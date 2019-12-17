let a = null;
let s = Symbol('hi');
console.log(a, s);
let frank = {
    name: 'frank',
    age: 18,
    say(word) {
        console.log(`${this.name}:${word}`);
    }
};
function createSquare(config) { }
// createSquare({width:100,color:'red',height:100}) 多余参数会报错
let config = {
    color: 666
};
let mySquare = createSquare(config); // 通过对象传进来的会比较符合语义
let add = (a, b) => {
    return a;
};
add(1, 2);
let x = (a, b) => {
    return a + b;
};
let addFun = (() => {
    let x = (a, b) => {
        return a + b;
    };
    x.minus = (a, b) => {
        return a - b;
    };
    return x;
})();
addFun(1, 2);
let addfun = () => {
    let x = (a, b) => {
        return a + b;
    };
    x.minus = (a, b) => {
        return a - b;
    };
    return x;
};
console.log(addfun()(1, 3));
let frank2 = {
    manname: 'an',
    age: 20,
    move: () => { },
    c: true,
    h: true
};
