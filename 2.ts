#!/usr/bin/env ts-node
let arg1:number = parseInt(process.argv[2])
let arg2:number = parseInt(process.argv[3])
if(Number.isNaN(arg1) || Number.isNaN(arg2)){
    console.log('只接受整数')
    process.exit(1)
}
console.log(arg1+arg2)
process.exit(0)