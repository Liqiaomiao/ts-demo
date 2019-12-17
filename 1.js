console.log('hello world');
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
function mery(a, b) {
    if (a.gender !== b.gender) {
        return [a, b];
    }
    else {
        throw Error('性别相同不能结婚');
    }
}
let a = { gender: Gender.Male };
let b = { gender: Gender.Female };
console.log(Gender.Male);
console.log(mery(a, b));
function descSort(a) {
    for (let i = 0; i < a.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < a.length; j++) {
            if (a[minIndex] > a[j]) {
                minIndex = j;
            }
        }
        let temp = a[minIndex];
        a[minIndex] = a[i];
        a[i] = temp;
    }
    return a;
}
let arr = descSort([100, 1, 4, 3]);
console.log(arr);
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
console.log(add('hello', 'world'));
