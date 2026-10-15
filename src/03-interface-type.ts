// ============================================================
// 03. interface 与 type
// ============================================================

// interface: 定义对象结构
interface User {
  id: number;
  name: string;
  email?: string; // 可选属性
  readonly createdAt: string; // 只读属性
}

const user: User = {
  id: 1,
  name: "Alice",
  createdAt: "2024-01-01",
};

// interface 可以被 class 实现
interface Animal {
  speak(): void;
}

class Dog implements Animal {
  speak() {
    console.log("woof");
  }
}

// interface 支持声明合并
interface Box {
  width: number;
}
interface Box {
  height: number;
}
const box: Box = { width: 10, height: 20 }; // OK，合并后有两个属性

// type: 类型别名，更灵活
type ID = string | number;
type Role = "admin" | "user";

// type 可以定义元组、联合、交叉
type Point = [number, number];
type Person = { name: string } & { age: number };

// type 不能声明合并
// type A = { x: number };
// type A = { y: number }; // Error: Duplicate identifier

console.log("03 interface/type:", user.name, box.width, box.height);

export {};
