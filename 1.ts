console.log('hello world')
enum Gender{
    Male,
    Female
}
interface Person {
    gender: Gender
}
function mery(a:Person, b: Person): [Person,Person]{
    if(a.gender !== b.gender){
        return [a,b]
    }else{
        throw Error('性别相同不能结婚')
    }
}
let a = { gender: Gender.Male}
let b = { gender: Gender.Female}
console.log(Gender.Male)
console.log(mery(a,b))

function descSort(a: number[]): number[]{
    for(let i = 0;i<a.length-1;i++){
        let minIndex = i;
        for(let j = i+1; j<a.length;j++){
            if(a[minIndex] > a[j] ){
                minIndex = j
            }
        }
        let temp = a[minIndex]
        a[minIndex] = a[i]
        a[i] = temp
    }
    return a 
}
let arr = descSort([100,1,4,3])
console.log(arr)

function add(a:number, b:number):number
function add(a:string, b:string):string
function add(a:any, b:any){
    return a+b
}
console.log(add(1,2))
console.log(add('hello','world'))