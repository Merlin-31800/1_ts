# TypeScript 练习题

> 本套题目涵盖 15 个核心概念，分为 5 种题型。
> 建议顺序：选择题 → 判断题 → 填空题 → 代码分析题 → 编程题。
> 答案见 `ANSWERS.md`，请先独立完成再核对。

---

## 一、选择题（每题 2 分，共 30 分）

### 1. 变量

**Q1.** 以下哪种声明方式在严格模式下会报错？
```ts
// A
let x = 1;
x = 2;

// B
const y = 1;
y = 2;

// C
var z = 1;
var z = 2;

// D
let a: number = 1;
```

**Q2.** 关于 `let` 和 `var`，下列说法正确的是？
- A. `let` 没有块级作用域
- B. `var` 声明的变量不存在变量提升
- C. `let` 存在暂时性死区 (TDZ)
- D. 两者完全等价

### 2. 类型

**Q3.** 以下哪个类型表示「永远不会返回」？
- A. `void`
- B. `undefined`
- C. `never`
- D. `null`

**Q4.** `unknown` 和 `any` 的主要区别是？
- A. 没有区别
- B. `unknown` 不能赋值给任何其他类型而不做类型检查
- C. `any` 更安全
- D. `unknown` 只能是字符串

### 3. interface 与 type

**Q5.** 以下哪个只能用 `interface` 实现，不能用 `type`？
- A. 定义对象结构
- B. 声明合并 (declaration merging)
- C. 定义联合类型
- D. 定义元组

**Q6.** 以下代码的结果是？
```ts
interface User { name: string }
interface User { age: number }
const u: User = { name: "a", age: 1 };
```
- A. 编译报错：接口重复声明
- B. 编译通过，User 有 name 和 age 两个属性
- C. 运行时报错
- D. User 只有 age 属性

### 4. enum

**Q7.** 关于 TypeScript 的 `enum`，下列说法错误的是？
- A. 数字枚举有反向映射
- B. `const enum` 在编译后会被内联，不产生运行时代码
- C. 字符串枚举有反向映射
- D. 枚举可以用于定义命名常量集合

**Q8.** 以下枚举 `Color.Red` 的值是？
```ts
enum Color { Red, Green = 5, Blue }
```
- A. 0
- B. 1
- C. 5
- D. undefined

### 5. function

**Q9.** 箭头函数和普通函数在 `this` 上的区别是？
- A. 没有区别
- B. 箭头函数没有自己的 `this`，继承外层作用域的 `this`
- C. 普通函数没有 `this`
- D. 箭头函数的 `this` 总是指向 window

**Q10.** 以下函数的返回值类型推导结果是？
```ts
function add(a: number, b: number) {
  return a + b;
}
```
- A. `any`
- B. `number`
- C. `string`
- D. 需要显式注解，否则报错

### 6. Promise & async/await

**Q11.** `async` 函数的返回值类型永远是？
- A. `any`
- B. 取决于 return 的值
- C. `Promise<T>`（T 是 return 值的类型）
- D. `void`

**Q12.** 以下代码的输出顺序是？
```ts
console.log("1");
Promise.resolve().then(() => console.log("2"));
console.log("3");
```
- A. 1, 2, 3
- B. 1, 3, 2
- C. 2, 1, 3
- D. 3, 2, 1

### 7. 泛型

**Q13.** 以下泛型函数的作用是？
```ts
function identity<T>(arg: T): T {
  return arg;
}
```
- A. 返回任意类型，类型不安全
- B. 输入什么类型，返回什么类型，类型安全
- C. 只能返回 number
- D. 编译报错

**Q14.** 泛型约束 `<T extends { length: number }>` 的含义是？
- A. T 必须是数组
- B. T 必须有 `length` 属性且类型为 number
- C. T 必须继承自 number
- D. T 可以是任意类型

### 8. 联合 / 交叉类型

**Q15.** `string & number` 的结果类型是？
- A. `string`
- B. `number`
- C. `never`
- D. `any`

---

## 二、判断题（每题 1 分，共 15 分）

1. `const` 声明的对象，其内部属性不可修改。（ ）
2. `null` 和 `undefined` 在 `strictNullChecks` 开启时可以赋值给 `string`。（ ）
3. `interface` 可以定义联合类型。（ ）
4. `type` 支持声明合并。（ ）
5. 数字枚举 `enum E { A }` 中，`E[0]` 的值是 `"A"`。（ ）
6. 箭头函数可以作为构造函数使用 `new`。（ ）
7. `await` 会阻塞整个 JavaScript 主线程。（ ）
8. `Promise.all` 中任何一个 Promise reject，整个 Promise.all 立即 reject。（ ）
9. 泛型函数在调用时必须显式指定类型参数。（ ）
10. 联合类型 `A | B` 的变量可以访问 A 和 B 的所有属性。（ ）
11. 交叉类型 `A & B` 的变量必须同时具有 A 和 B 的所有属性。（ ）
12. `typeof` 在类型上下文中可以获取一个值的类型。（ ）
13. `keyof any` 的结果是 `string | number | symbol`。（ ）
14. 类型推导只发生在变量声明时，函数参数不会推导。（ ）
15. `unknown` 类型的值可以直接调用任意方法。（ ）

---

## 三、填空题（每题 2 分，共 20 分）

请在 `____` 处填入正确内容，使代码通过编译。

**F1.** 声明一个只读的字符串常量：
```ts
____ name: ____ = "agent";
```

**F2.** 定义一个接口，包含可选属性 `email`：
```ts
____ User {
  id: number;
  name: string;
  email?: ____;
}
```

**F3.** 用 `type` 定义一个联合类型，表示用户角色：
```ts
____ Role = "admin" ____ "user" ____ "guest";
```

**F4.** 定义一个泛型函数，返回数组的第一个元素：
```ts
function first<T>(arr: ____): ____ {
  return arr[0];
}
```

**F5.** 使用 `keyof` 获取 `User` 的所有键：
```ts
interface User { id: number; name: string }
type UserKeys = ____;
// UserKeys 的类型是 "id" | "name"
```

**F6.** 使用 `typeof` 复用已有对象的类型：
```ts
const config = { endpoint: "/api", timeout: 5000 };
type Config = ____;
```

**F7.** 定义一个交叉类型：
```ts
type Named = { name: string };
type Aged = { age: number };
type Person = ____;
```

**F8.** 泛型约束，要求 T 必须有 `id` 属性：
```ts
function getId<T ____ { id: ____ }>(obj: T): T["id"] {
  return obj.id;
}
```

**F9.** async 函数等待 Promise：
```ts
async function fetchData(): ____<string> {
  const res = ____ fetch("/api");
  return res.text();
}
```

**F10.** 可辨识联合（discriminated union）：
```ts
type Result =
  | { type: "success"; data: string }
  | { type: "error"; message: string };

function handle(r: Result) {
  if (r.type === "success") {
    console.log(r.____);  // 只能访问 data
  } else {
    console.log(r.____);  // 只能访问 message
  }
}
```

---

## 四、代码分析题（每题 5 分，共 20 分）

阅读代码，回答问题或指出错误。

**A1.** 以下代码有什么问题？如何修复？
```ts
interface Animal { speak(): void }
class Dog implements Animal {
  bark() { console.log("woof"); }
}
```

**A2.** 以下代码输出什么？为什么？
```ts
let x: any = "hello";
let y: unknown = "world";

x.toUpperCase();   // ?
y.toUpperCase();   // ?
```

**A3.** 分析以下泛型约束的作用：
```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = { name: "Alice", age: 30 };
getProperty(user, "name");  // ?
getProperty(user, "email"); // ?
```

**A4.** 以下 Promise 代码的输出顺序和原因：
```ts
async function main() {
  console.log("start");
  const p1 = Promise.resolve().then(() => console.log("p1"));
  const p2 = Promise.resolve().then(() => console.log("p2"));
  await p1;
  await p2;
  console.log("end");
}
main();
```

---

## 五、编程题（每题 15 分，共 45 分）

**P1. 类型安全的工具调用封装（综合：泛型 + 联合类型 + Promise + interface）**

场景：你正在开发一个 agent，需要封装一个 `callTool` 函数。
要求：
- 定义 `Tool` 接口，包含 `name: string` 和 `execute: (input: any) => Promise<any>`
- `callTool<T>` 是泛型函数，接收 tool 和 input，返回 `Promise<T>`
- 如果 tool 不存在或执行失败，返回 rejected Promise

```ts
// 你的代码：

```

**P2. 类型安全的属性访问器（综合：keyof + typeof + 泛型约束）**

实现 `pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>`，
从对象中挑选指定属性，返回新对象，且类型安全。

```ts
// 你的代码：
const user = { name: "Alice", age: 30, email: "a@b.com" };
const picked = pick(user, ["name", "age"]);
// picked 的类型应该是 { name: string; age: number }
```

**P3. LLM 响应状态机（综合：可辨识联合 + 类型收窄 + async/await）**

LLM 的响应有三种状态：思考中、成功、失败。
要求：
- 用可辨识联合定义 `LLMState`（`status` 作为判别字段）
- 写一个 `renderState(state: LLMState): string` 函数，根据状态返回不同描述
- 写一个 `async function runLLM(): Promise<LLMState>` 模拟调用

```ts
// 你的代码：

```

---

## 评分标准

| 题型 | 满分 | 合格线 | 掌握线 |
|------|------|--------|--------|
| 选择题 | 30 | 18 | 24 |
| 判断题 | 15 | 9 | 12 |
| 填空题 | 20 | 12 | 16 |
| 代码分析 | 20 | 10 | 15 |
| 编程题 | 45 | 27 | 36 |
| **总计** | **130** | **76 (L2 理解)** | **103 (L3 应用)** |

- **< 76 分**：未达标，需重新学习基础概念
- **76 ~ 102 分**：达到 L2 理解，能看懂代码
- **≥ 103 分**：达到 L3 应用，能独立写代码
- **编程题全部正确 + 能讲解**：达到 L4 辨析，真正掌握
