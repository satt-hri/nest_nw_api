### 常用 NestJS CLI 命令速查表

```bash
nest generate <schematic> <name> [options]
# 或者简写
nest g <schematic> <name> [options]


# 同时生成模块 + 控制器 + 服务（推荐用 --flat 控制文件夹结构）
nest g resource users

# 在 src/api/v1/users 下生成 controller
nest g co api/v1/users/user

```

| 类型            | 简写  | 说明               |
| ------------- | --- | ---------------- |
| `module`      | mo  | 模块文件             |
| `controller`  | co  | 控制器              |
| `service`     | s   | 服务（业务逻辑）         |
| `gateway`     | ga  | WebSocket 网关     |
| `guard`       | gu  | 守卫               |
| `interceptor` | in  | 拦截器              |
| `middleware`  | mi  | 中间件              |
| `pipe`        | pi  | 管道               |
| `provider`    | pr  | 提供者（通用依赖注入类）     |
| `class`       | cl  | 普通类              |
| `filter`      | f   | 异常过滤器            |
| `resolver`    | r   | GraphQL resolver |
| `decorator`   | d   | 自定义装饰器           |
| `interface`   | itf | TypeScript 接口    |
| `enum`        | en  | 枚举               |
