// ============================================================
// 06. Promise 与 async/await
// ============================================================

// 创建 Promise
function delay(ms: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (ms < 0) reject(new Error("ms must be positive"));
    setTimeout(() => resolve("done"), ms);
  });
}

// then/catch/finally 链
delay(100)
  .then((msg) => console.log("then:", msg))
  .catch((err) => console.error("catch:", err))
  .finally(() => console.log("finally: always runs"));

// Promise.all: 并发执行，全部成功才成功
async function parallel() {
  const [r1, r2] = await Promise.all([
    delay(50),
    delay(60),
  ]);
  return r1 + r2;
}

// async/await: 语法糖
async function run() {
  try {
    const result = await delay(100);
    console.log("await result:", result);
  } catch (err) {
    console.error("error:", err);
  }
}

// Promise.race: 谁先完成用谁
async function race() {
  return Promise.race([
    delay(50),
    new Promise((_, reject) => setTimeout(() => reject("timeout"), 1000)),
  ]);
}

// 串行 vs 并发
async function serial() {
  const a = await delay(50); // 先等 a
  const b = await delay(50); // 再等 b，总共 ~100ms
  return a + b;
}

run();
console.log("06 Promise: demo started");

export {};
