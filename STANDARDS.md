# TypeScript 学习产出标准

> 本文档定义了每个概念的「掌握判定标准」。只有满足对应层级的所有要求，才算真正掌握。
> 学习方法：**自上而下，项目驱动**——先理解概念在 agent 项目中的作用，再回到语法细节。

## 掌握等级说明

| 等级 | 含义 | 判定方式 |
|------|------|----------|
| L1 认知 | 能说出概念是什么、解决什么问题 | 口头/文字回答 |
| L2 理解 | 能看懂含该概念的代码，解释其行为 | 代码阅读题 |
| L3 应用 | 能在合适场景独立写出该概念的代码 | 编程题 |
| L4 辨析 | 能区分易混淆概念，解释底层机制 | 对比/判断题 |

---

## 1. 变量 (Variable)

| 等级 | 标准 |
|------|------|
| L1 | 知道 `let` / `const` / `var` 的区别，知道块级作用域 |
| L2 | 能判断代码中变量的可访问性、是否会被重新赋值 |
| L3 | 能正确选择 `let` 还是 `const`，避免 `var` |
| L4 | 能解释暂时性死区 (TDZ)、变量提升 (hoisting) 的区别 |

**在 agent 项目中的意义**：`const` 用于不变的配置/对象引用，`let` 用于循环计数、临时状态。

---

## 2. 类型 (Type)

| 等级 | 标准 |
|------|------|
| L1 | 知道 TS 的基本类型：`string` / `number` / `boolean` / `null` / `undefined` / `any` / `unknown` / `void` / `never` |
| L2 | 能看懂类型注解，判断 `any` 与 `unknown` 的区别 |
| L3 | 能为变量、参数、返回值添加正确的类型注解 |
| L4 | 能解释 `unknown` 比 `any` 安全的原因，能正确使用类型收窄 |

**在 agent 项目中的意义**：给 LLM 响应、工具参数、配置对象加上类型，避免运行时崩溃。

---

## 3. interface

| 等级 | 标准 |
|------|------|
| L1 | 知道 `interface` 用于定义对象结构、可被 `class` 实现 |
| L2 | 能看懂含可选属性 `?`、只读属性 `readonly` 的接口 |
| L3 | 能为 API 响应、配置对象定义 `interface` |
| L4 | 能解释 `interface` 的声明合并 (declaration merging)，知道何时该用 `interface` 而非 `type` |

---

## 4. type

| 等级 | 标准 |
|------|------|
| L1 | 知道 `type` 可以定义类型别名，包括联合、交叉、元组 |
| L2 | 能看懂 `type ID = string \| number` 这样的类型别名 |
| L3 | 能用 `type` 定义联合类型、交叉类型、元组 |
| L4 | 能说清 `type` 与 `interface` 的 5 个核心区别（合并、扩展方式、元组、联合、映射类型） |

---

## 5. enum

| 等级 | 标准 |
|------|------|
| L1 | 知道枚举用于定义命名常量集合，有数字枚举和字符串枚举 |
| L2 | 能看懂枚举的反向映射（数字枚举） |
| L3 | 能在合适场景使用 `enum` 或 `const enum` |
| L4 | 能解释为什么很多团队推荐用 `const` 对象 + `as const` 替代 `enum`，能说出 `enum` 的运行时代价 |

---

## 6. function

| 等级 | 标准 |
|------|------|
| L1 | 知道函数声明、函数表达式、箭头函数的写法 |
| L2 | 能看懂函数参数类型、返回值类型、可选参数、默认参数 |
| L3 | 能为函数添加完整类型注解，正确使用剩余参数 `...args` |
| L4 | 能解释 `this` 在箭头函数与普通函数中的区别，能使用函数重载 (overload) |

**在 agent 项目中的意义**：工具函数、LLM 调用函数、回调函数都需要精确的类型签名。

---

## 7. async / await

| 等级 | 标准 |
|------|------|
| L1 | 知道 `async` 函数返回 Promise，`await` 等待 Promise 完成 |
| L2 | 能看懂含 `try/catch` 的 async 函数，理解执行顺序 |
| L3 | 能把回调/Promise 链改写为 async/await，正确处理错误 |
| L4 | 能解释 `await` 不会阻塞主线程，能区分并发 (`Promise.all`) 与串行 |

---

## 8. Promise

| 等级 | 标准 |
|------|------|
| L1 | 知道 Promise 有 pending / fulfilled / rejected 三种状态 |
| L2 | 能看懂 `.then()` / `.catch()` / `.finally()` 链 |
| L3 | 能手动 `new Promise` 包装回调式 API，能使用 `Promise.all` / `Promise.race` |
| L4 | 能解释 Promise 的微任务 (microtask) 机制，能实现简单的 Promise 链 |

**在 agent 项目中的意义**：LLM 流式响应、工具调用、数据库操作几乎全是 Promise。

---

## 9. 泛型 (Generics)

| 等级 | 标准 |
|------|------|
| L1 | 知道泛型用 `<T>` 表示，让函数/接口/类可以处理多种类型 |
| L2 | 能看懂 `function identity<T>(x: T): T` 这样的泛型函数 |
| L3 | 能写出泛型函数、泛型接口、泛型类 |
| L4 | 能在 agent 项目中识别泛型的使用场景（如统一 API 响应类型） |

---

## 10. 联合类型 (Union Type)

| 等级 | 标准 |
|------|------|
| L1 | 知道 `A \| B` 表示值可以是 A 或 B |
| L2 | 能看懂联合类型，理解只能访问共有属性 |
| L3 | 能用联合类型 + 类型收窄 (type guard) 处理多种情况 |
| L4 | 能使用可辨识联合 (discriminated union) 设计状态机 |

**在 agent 项目中的意义**：LLM 响应可能是文本/工具调用/错误，用联合类型描述。

---

## 11. 交叉类型 (Intersection Type)

| 等级 | 标准 |
|------|------|
| L1 | 知道 `A & B` 表示同时具有 A 和 B 的所有属性 |
| L2 | 能看懂交叉类型，理解与 `extends` 的关系 |
| L3 | 能用交叉类型组合多个接口/类型 |
| L4 | 能解释交叉类型在同名属性冲突时的行为 (如 `string & number = never`) |

---

## 12. 泛型约束 (Generic Constraint)

| 等级 | 标准 |
|------|------|
| L1 | 知道 `extends` 用于约束泛型，如 `<T extends { length: number }>` |
| L2 | 能看懂泛型约束，理解为什么需要约束 |
| L3 | 能写出带约束的泛型函数，正确访问约束中的属性 |
| L4 | 能结合 `keyof` 写出 `<T, K extends keyof T>` 这样的高级约束 |

---

## 13. 类型推导 (Type Inference)

| 等级 | 标准 |
|------|------|
| L1 | 知道 TS 能自动推导变量、函数返回值的类型 |
| L2 | 能判断哪些场景需要显式注解，哪些可以省略 |
| L3 | 能写出既简洁又类型安全的代码（不滥用 `any`，不全量注解） |
| L4 | 能解释上下文类型 (contextual typing)、最佳通用类型 (best common type) |

---

## 14. typeof

| 等级 | 标准 |
|------|------|
| L1 | 知道 `typeof` 有两个用途：运行时 typeof（JS 原生）和类型上下文 typeof（TS） |
| L2 | 能看懂 `type T = typeof obj` 获取对象的类型 |
| L3 | 能在类型上下文中使用 `typeof` 复用已有值的类型 |
| L4 | 能结合 `ReturnType` / `InstanceType` 等工具类型做高级推导 |

---

## 15. keyof

| 等级 | 标准 |
|------|------|
| L1 | 知道 `keyof T` 返回类型 T 的所有键组成的联合类型 |
| L2 | 能看懂 `type Keys = keyof User` 的结果 |
| L3 | 能用 `keyof` 约束泛型，实现类型安全的属性访问 |
| L4 | 能结合 `typeof` + `keyof` 实现 `getProperty(obj, key)` 这样的类型安全函数 |

---

## 综合产出标准

完成本阶段学习后，你应该能：

1. **读懂** opencode / Claude Code 中 80% 以上的 TypeScript 代码
2. **写出** 一个类型安全的 LLM 工具调用封装（含泛型、联合类型、Promise）
3. **解释** `interface` vs `type`、`any` vs `unknown`、`Promise.all` vs 串行 await
4. **不查文档** 写出 `keyof` + `typeof` + 泛型约束的组合用法
