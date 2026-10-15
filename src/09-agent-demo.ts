// ============================================================
// 09. 综合实战：类型安全的 Agent 工具调用系统
// 综合运用：interface + type + 泛型 + 联合类型 + 交叉类型 +
//          泛型约束 + keyof + typeof + Promise + async/await
// ============================================================

// 1. 用 const enum 定义工具状态
const enum ToolStatus {
  Idle = "idle",
  Running = "running",
  Success = "success",
  Error = "error",
}

// 2. 定义工具输入/输出接口
interface ToolContext {
  sessionId: string;
  userId: string;
}

interface ToolDefinition<Input, Output> {
  name: string;
  description: string;
  execute: (input: Input, ctx: ToolContext) => Promise<Output>;
}

// 3. 用联合类型定义工具调用结果（可辨识联合）
type ToolResult<T> =
  | { status: ToolStatus.Success; data: T }
  | { status: ToolStatus.Error; error: string };

// 4. 泛型约束：要求 Input 必须有 sessionId
type ValidInput<T> = T & { sessionId?: string };

// 5. 工具注册中心
class ToolRegistry {
  private tools = new Map<string, ToolDefinition<any, any>>();

  register<I, O>(tool: ToolDefinition<I, O>): void {
    this.tools.set(tool.name, tool);
  }

  get<I, O>(name: string): ToolDefinition<I, O> | undefined {
    return this.tools.get(name);
  }

  // keyof + typeof 实战：获取所有已注册工具名
  getToolNames(): string[] {
    return Array.from(this.tools.keys());
  }
}

// 6. 核心：类型安全的工具调用函数
async function callTool<I, O>(
  registry: ToolRegistry,
  name: string,
  input: ValidInput<I>,
  ctx: ToolContext
): Promise<ToolResult<O>> {
  const tool = registry.get<I, O>(name);
  if (!tool) {
    return { status: ToolStatus.Error, error: `Tool not found: ${name}` };
  }

  try {
    const data = await tool.execute(input, ctx);
    return { status: ToolStatus.Success, data };
  } catch (err) {
    return {
      status: ToolStatus.Error,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

// 7. 实战：定义一个搜索工具
interface SearchInput {
  query: string;
  limit?: number;
}

interface SearchOutput {
  results: string[];
  total: number;
}

const searchTool: ToolDefinition<SearchInput, SearchOutput> = {
  name: "search",
  description: "Search the web",
  execute: async (input) => {
    // 模拟异步操作
    await new Promise((r) => setTimeout(r, 100));
    return {
      results: [`result for "${input.query}"`],
      total: 1,
    };
  },
};

// 8. 运行
async function main() {
  const registry = new ToolRegistry();
  registry.register(searchTool);

  const ctx: ToolContext = { sessionId: "s1", userId: "u1" };

  const result = await callTool<SearchInput, SearchOutput>(
    registry,
    "search",
    { query: "typescript" },
    ctx
  );

  // 类型收窄：根据 status 访问不同字段
  if (result.status === ToolStatus.Success) {
    console.log("搜索成功:", result.data.results);
  } else {
    console.error("搜索失败:", result.error);
  }

  console.log("已注册工具:", registry.getToolNames());
}

main().catch(console.error);
