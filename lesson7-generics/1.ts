function identity <T>(arg:T):T{
    return arg
}
let output = identity<string>('mystring'); // 传入所有的参数，包含类型参数
let output2= identity('mystring') // 类型推论，编译器会根据传入的参数自动的帮我们确定T的类型
