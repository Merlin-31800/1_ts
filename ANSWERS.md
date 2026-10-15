# TypeScript 练习题答案与解析

> 请先独立完成 `exercises/README.md` 中的题目，再核对答案。

---

## 一、选择题答案

| 题号 | 答案 | 解析 |
|------|------|------|
| Q1 | B | `const` 声明的变量不能重新赋值，`y = 2` 会编译报错 |
| Q2 | C | `let` 有块级作用域和暂时性死区；`var` 有变量提升，是函数作用域 |
| Q3 | C | `never` 表示函数永远不会正常返回（抛异常或死循环）；`void` 表示无返回值 |
| Q4 | B | `unknown` 是类型安全的 `any`，赋值给其他类型前必须做类型检查 |
| Q5 | B | 只有 `interface` 支持声明合并，`type` 不支持 |
| Q6 | B | interface 声明合并，两个 User 合并为一个，包含 name 和 age |
| Q7 | C | 字符串枚举没有反向映射，只有数字枚举有 |
| Q8 | A | 数字枚举从 0 开始，`Red=0`, `Green=5`（显式赋值）, `Blue=6`（在前一个基础上+1） |
| Q9 | B | 箭头函数没有自己的 `this`，捕获外层作用域的 `this` |
| Q10 | B | TS 能推导函数返回值类型，`a + b` 是 `number` |
| Q11 | C | `async` 函数返回值自动包装为 Promise，即 `Promise<T>` |
| Q12 | B | Promise.then 的回调进入微任务队列，在同步代码执行完后才执行 |
| Q13 | B | 泛型保证输入输出类型一致，类型安全 |
| Q14 | B | `extends { length: number }` 约束 T 必须有 `length: number` 属性 |
| Q15 | C | 没有值同时是 string 和 number，所以 `string & number = never` |

---

## 二、判断题答案

| 题号 | 答案 | 解析 |
|------|------|------|
| 1 | ✗ | `const` 只保证引用不变，对象内部属性可修改 |
| 2 | ✗ | `strictNullChecks` 开启时，`null`/`undefined` 不能赋值给 `string` |
| 3 | ✗ | `interface` 不能定义联合类型，只有 `type` 可以 |
| 4 | ✗ | 只有 `interface` 支持声明合并，`type` 不支持 |
| 5 | ✓ | 数字枚举有反向映射，`E[0]` 返回 `"A"` |
| 6 | ✗ | 箭头函数没有 `prototype`，不能作为构造函数 |
| 7 | ✗ | `await` 只暂停当前 async 函数，不阻塞主线程 |
| 8 | ✓ | `Promise.all` 是 fail-fast 策略，任一 reject 则整体 reject |
| 9 | ✗ | 泛型参数可由 TS 自动推导，不必显式指定 |
| 10 | ✗ | 联合类型只能访问共有属性，除非做类型收窄 |
| 11 | ✓ | 交叉类型要求同时具有所有属性 |
| 12 | ✓ | `type T = typeof obj` 可获取 obj 的类型 |
| 13 | ✓ | `keyof any` 结果是 `string | number | symbol` |
| 14 | ✗ | 函数参数在有默认值或上下文类型时也会推导 |
| 15 | ✗ | `unknown` 不能直接调用方法，必须先类型收窄 |

---

## 三、填空题答案

**F1.**
```ts
const name: string = "agent";
```

**F2.**
```ts
interface User {
  id: number;
  name: string;
  email?: string;
}
```

**F3.**
```ts
type Role = "admin" | "user" | "guest";
```

**F4.**
```ts
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}
```

**F5.**
```ts
type UserKeys = keyof User;
```

**F6.**
```ts
type Config = typeof config;
```

**F7.**
```ts
type Person = Named & Aged;
```

**F8.**
```ts
function getId<T extends { id: any }>(obj: T): T["id"] {
  return obj.id;
}
```
> 注：`id: any` 也可以用 `id: string | number` 等更精确的类型。

**F9.**
```ts
async function fetchData(): Promise<string> {
  const res = await fetch("/api");
  return res.text();
}
```

**F10.**
```ts
if (r.type === "success") {
  console.log(r.data);
} else {
  console.log(r.message);
}
```

---

## 四、代码分析题答案

**A1.**
问题：`Dog` 类声明实现 `Animal` 接口，但没有实现 `speak()` 方法，只有 `bark()`。
编译错误：`Class 'Dog' incorrectly implements interface 'Animal'. Property 'speak' is missing in type 'Dog' but required in type 'Animal'.`

修复：
```ts
class Dog implements Animal {
  speak() { console.log("woof"); }
}
```

**A2.**
- `x.toUpperCase()` → 正常执行，返回 `"HELLO"`。因为 `any` 关闭类型检查，可以调用任意方法。
- `y.toUpperCase()` → **编译报错**。因为 `unknown` 类型不能直接调用方法，必须先做类型收窄。

修复：
```ts
if (typeof y === "string") {
  y.toUpperCase(); // OK
}
```

**A3.**
`getProperty` 函数使用 `K extends keyof T` 约束，保证 key 必须是 obj 的有效属性。

- `getProperty(user, "name")` → 返回 `"Alice"`，类型推导为 `string`。✅
- `getProperty(user, "email")` → **编译报错**，因为 `"email"` 不在 `keyof typeof user` 中。

这就是 keyof + 泛型约束带来的类型安全：传错属性名在编译期就被拦截。

**A4.**
输出顺序：`start` → `p1` → `p2` → `end`

原因：
1. `console.log("start")` 同步执行
2. `p1` 和 `p2` 的 `.then` 回调进入微任务队列
3. `await p1` 等待 p1 完成，执行微任务输出 `p1`
4. `await p2` 等待 p2 完成，执行微任务输出 `p2`
5. 最后输出 `end`

注意：p1 和 p2 是并发创建的（在 await 之前就已经 start），所以总耗时约 50+ms，而不是 50+50=100ms。

---

## 五、编程题参考答案

### P1. 类型安全的工具调用封装

```ts
interface Tool {
  name: string;
  execute: (input: any) => Promise<any>;
}

async function callTool<T>(tool: Tool | undefined, input: any): Promise<T> {
  if (!tool) {
    return Promise.reject(new Error("Tool not found"));
  }
  try {
    const result = await tool.execute(input);
    return result as T;
  } catch (err) {
    return Promise.reject(err);
  }
}

// 使用示例
const searchTool: Tool = {
  name: "search",
  execute: async (input: { query: string }) => {
    return { results: [input.query], total: 1 };
  },
};

interface SearchResult {
  results: string[];
  total: number;
}

callTool<SearchResult>(searchTool, { query: "ts" })
  .then((res) => console.log(res.results))
  .catch((err) => console.error(err));
```

### P2. 类型安全的属性访问器 pick

```ts
function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    result[key] = obj[key];
  }
  return result;
}

// 使用
const user = { name: "Alice", age: 30, email: "a@b.com" };
const picked = pick(user, ["name", "age"]);
// picked 类型: { name: string; age: number }
```

> 这里使用了内置工具类型 `Pick<T, K>`，它内部就是用 `keyof` 实现的。

### P3. LLM 响应状态机

```ts
type LLMState =
  | { status: "thinking" }
  | { status: "success"; content: string }
  | { status: "error"; message: string };

function renderState(state: LLMState): string {
  switch (state.status) {
    case "thinking":
      return "正在思考...";
    case "success":
      return `回答：${state.content}`;
    case "error":
      return `出错：${state.message}`;
  }
}

async function runLLM(): Promise<LLMState> {
  await new Promise((r) => setTimeout(r, 100));
  // 模拟 80% 成功率
  if (Math.random() > 0.2) {
    return { status: "success", content: "Hello from LLM" };
  }
  return { status: "error", message: "LLM timeout" };
}

// 使用
runLLM().then((state) => console.log(renderState(state)));
```

---

## 自评指南

对照 `STANDARDS.md` 中的 L1-L4 等级：

- 如果你**选择题+判断题**正确率 < 70%：停留在 L1，需要重新理解概念
- 如果**填空题**能独立写出：达到 L2 理解
- 如果**编程题**能不看答案写出：达到 L3 应用
- 如果能给别人讲清楚 `interface vs type`、`any vs unknown`、`Promise 微任务`：达到 L4 辨析

下一步：用本项目学到的知识，去读 opencode 的源码，找出其中使用泛型、联合类型、keyof 的地方。
