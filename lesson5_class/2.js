class A {
    constructor(a1) {
        this.a1 = a1;
    }
    a2() {
        console.log('from A');
    }
}
class B extends A {
    constructor(a1, b1) {
        super(a1);
        this.b1 = b1;
    }
    b2() { }
}
