// ============================================================
// 08. 类型推导 + typeof + keyof
// ============================================================

// 类型推导：变量
let inferredStr = "hello"; // 推导为 string
let inferredNum = 42; // 推导为 number

// 类型推导：函数返回值
function getLength(s: string) {
  return s.length; // 推导返回值为 number
}

// 上下文类型（contextual typing）
const numbers = [1, 2, 3];
numbers.map((n) => n.toString()); // n 被推导为 number

// typeof: 类型上下文，获取值的类型
const config = {
  endpoint: "/api",
  timeout: 5000,
  retries: 3,
};

type Config = typeof config;
// Config = { endpoint: string; timeout: number; retries: number }

// typeof 也可以用于函数
function createUser(name: string) {
  return { name, createdAt: Date.now() };
}
type User = ReturnType<typeof createUser>;
// User = { name: string; createdAt: number }

// keyof: 获取类型的所有键
interface User2 {
  id: number;
  name: string;
  email: string;
}

type UserKeys = keyof User2;
// UserKeys = "id" | "name" | "email"

// typeof + keyof 组合：从对象值获取键类型
const Colors = {
  Red: "#ff0000",
  Green: "#00ff00",
  Blue: "#0000ff",
} as const;

type ColorName = keyof typeof Colors; // "Red" | "Green" | "Blue"
type ColorValue = (typeof Colors)[keyof typeof Colors]; // "#ff0000" | "#00ff00" | "#0000ff"

// 实战：类型安全的取值函数
function getValue<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const color = getValue(Colors, "Red"); // "#ff0000"，类型安全
// getValue(Colors, "Yellow"); // Error

console.log("08 推导/typeof/keyof:", inferredStr, getLength("abc"), color);

export {};
