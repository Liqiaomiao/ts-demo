#!/usr/bin/env ts-node
{
    let arg1 = parseInt(process.argv[2]);
    let arg2 = parseInt(process.argv[3]);
    if (isNaN(Number(arg1)) || isNaN(Number(arg2))) {
        console.log('只接受整数');
        process.exit(1);
    }
    console.log(arg1 + arg2);
    process.exit(0);
}
