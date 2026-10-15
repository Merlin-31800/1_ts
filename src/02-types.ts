// ============================================================
// 02. 类型 (Type)
// ============================================================

// 基本类型
let str: string = "hello";
let num: number = 42;
let bool: boolean = true;
let nul: null = null;
let und: undefined = undefined;

// any: 关闭类型检查，不推荐
let anything: any = 1;
anything = "string";
anything = { a: 1 };
//anything.nonexistentMethod() //这个方法不存在也不会编译时报错，运行时才报错

// unknown: 安全的 any，使用前必须做类型收窄
let maybe: unknown = "hello";
if ( typeof maybe == "string") {
  console.log(maybe.toUpperCase());
}



// void: 函数无返回值
function log(msg: string): void {
  console.log(msg);
}

// never: 永远不会返回的函数（抛异常或死循环）
function throwError(msg: string): never {
  throw new Error(msg);
}
const result = throwError("test");
console.log(result);


// 数组与元组
let arr: number[] = [25];
//let arr: Array<number> = [1,2,3];
let tuple: [string, number] = [ "age",25];


console.log("02 类型:", str, num, bool, arr, tuple);

export {};
