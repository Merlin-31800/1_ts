// ============================================================
// 04. enum
// ============================================================

// 数字枚举（有反向映射）
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right, // 3
}

console.log(Direction.Up);      // 0
console.log(Direction[0]);      // "Up"（反向映射）

// 字符串枚举（没有反向映射）
enum Status {
  Success = "SUCCESS",
  Error = "ERROR",
}

console.log(Status.Success);    // "SUCCESS"
// console.log(Status["SUCCESS"]); // Error，无反向映射

// 异构枚举（不推荐）
enum Mixed {
  No = 0,
  Yes = "YES",
}

// const enum: 编译时内联，不产生运行时代码
const enum Color {
  Red,
  Green,
  Blue,
}
const c: Color = Color.Red; // 编译后变成 const c = 0;

// 现代 TS 推荐用 const 对象 + as const 替代 enum
const Role = {
  Admin: "admin",
  User: "user",
} as const;

type RoleType = (typeof Role)[keyof typeof Role]; // "admin" | "user"

console.log("04 enum:", Direction.Up, Status.Success, c, Role.Admin);

export {};
