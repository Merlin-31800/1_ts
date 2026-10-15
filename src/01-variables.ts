// ============================================================
// 01. 变量 (Variable)
// ============================================================

// let: 可变变量，块级作用域
const count = 0;
count = 1;

// const: 不可重新赋值，但对象/数组内部可改
const config = { endpoint: "/api" };
config.endpoint = "/v4"; // OK，属性可改
 // Error: Cannot assign to 'config' 
config.endpoint = "/v6"

// var: 函数作用域，有变量提升，避免使用
function demoVar() {
  if (true) {
    var x = 1;
  }
  console.log(x); // 1，var 没有块级作用域 
}

// 暂时性死区 (TDZ)
function demoTDZ() {
  // console.log(a); // Error: Cannot access 'a' before initialization
  let a = 1;
}

console.log("01 变量:", count, config.endpoint);

export {};
count = "hello"