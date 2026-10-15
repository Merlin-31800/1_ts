// ============================================================
// 07. 泛型 (Generics) + 泛型约束 + 联合/交叉类型
// ============================================================

// 基础泛型函数
function identity<T>(arg: T): T {
  return arg;
}

const s = identity<string>("hello"); // 显式指定
const n = identity(42); // 类型推导为 number

// 泛型接口
interface ApiResponse<T> {
  code: number;
  data: T;
  message: string;
}

const userRes: ApiResponse<{ name: string }> = {
  code: 200,
  data: { name: "Alice" },
  message: "ok",
};

// 泛型约束：T 必须有 length 属性
function logLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}
logLength("hello"); // 5
logLength([1, 2, 3]); // 3
// logLength(123); // Error: number 没有 length

// 联合类型
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // 类型收窄为 string
  } else {
    console.log(id.toFixed(2)); // 类型收窄为 number
  }
}

// 交叉类型
type Named = { name: string };
type Aged = { age: number };
type Person = Named & Aged;

const person: Person = { name: "Bob", age: 30 };

// 可辨识联合（discriminated union）
type Result =
  | { type: "success"; data: string }
  | { type: "error"; message: string };

function handleResult(r: Result) {
  switch (r.type) {
    case "success":
      return r.data; // 只能访问 data
    case "error":
      return r.message; // 只能访问 message
  }
}

// keyof + 泛型约束：类型安全的属性访问
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Alice", age: 30 };
getProperty(user, "name"); // "Alice"
// getProperty(user, "email"); // Error: "email" 不在 keyof user 中

console.log("07 泛型:", identity(42), userRes.data.name, logLength("hi"), person.name, handleResult({ type: "success", data: "ok" }));

export {};
