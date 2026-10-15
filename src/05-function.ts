// ============================================================
// 05. function
// ============================================================

// 函数声明
function add(a: number, b: number): number {
  return a + b;
}

// 函数表达式
const multiply = (a: number, b: number): number => a * b;

// 可选参数与默认参数
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}`;
}

// 剩余参数
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

// 函数类型
type MathOp = (a: number, b: number) => number;
const subtract: MathOp = (a, b) => a - b;

// 函数重载
function padding(all: number): string;
function padding(topBottom: number, leftRight: number): string;
function padding(a: number, b?: number): string {
  return b ? `${a}px ${b}px` : `${a}px`;
}

// this 的区别
class Counter {
  count = 0;
  // 箭头函数绑定 this
  increment = () => {
    this.count++;
  };
  // 普通函数的 this 取决于调用方式
  incrementNormal() {
    this.count++;
  }
}

console.log("05 function:", add(1, 2), multiply(3, 4), greet("Alice"), sum(1, 2, 3), padding(10, 20));

export {};
