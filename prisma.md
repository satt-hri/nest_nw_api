### Prisma

```bash
#1. 安装 Prisma 依赖
npm install prisma --save-dev
npm install @prisma/client

#2. 初始化 Prisma
npx prisma init

#4. 让 Prisma 读取现有 MySQL 数据表
npx prisma db pull

#5. 生成 Prisma Client
npx prisma generate
```


#### 執行中有些沒有key 的表 
``` bash
Environment variables loaded from .env
Prisma schema loaded from prisma\schema.prisma
Datasource "db": MySQL database "nw_ph14" at "public-park4p.satt.jp:3306"

✔ Introspected 86 models and wrote them into prisma\schema.prisma in 713ms

*** WARNING ***

The following models were ignored as they do not have a valid unique identifier or id. This is currently not supported by Prisma Client:
  - "category_total"
  - "category_total_last_month"
  - "category_total_last_month_mandatory"
  - "category_total_mandatory"
  - "course_complete_count"
  - "course_complete_count_mandatory"
  - "course_learning_time"
  - "course_learning_time_mandatory"
  - "individual_detail"
  - "individual_detail_last_month"
  - "individual_detail_last_month_mandatory"
  - "individual_detail_mandatory"
  - "learning_detail"
  - "learning_detail_mandatory"
  - "lms_info"
  - "operation_log"

These objects have comments defined in the database, which is not yet fully supported. Read more: https://pris.ly/d/database-comments
  - Type: "model", name: "login_limit_management"
  - Type: "model", name: "menu_construct_wk"
  - Type: "model", name: "menu_group_construct_wk"
  - Type: "model", name: "menu_master_wk"

Run prisma generate to generate Prisma Client.

```

#### 1️⃣ 索引设计 Checklist（强制执行）
- [ ] 选择性 > 10%？ `SELECT COUNT(DISTINCT col)/COUNT(*) > 0.1`
- [ ] JOIN 条件字段是否在索引前列？
- [ ] WHERE + ORDER BY 是否被索引覆盖？
- [ ] 是否避免在状态字段（如 delete_flag）建单列索引？
- [ ] 每个索引是否对应具体查询？

#### 2️⃣ SQL 优化黄金法则
-- 好索引 = WHERE 条件字段 + JOIN 字段 + ORDER BY 字段
-- 最佳顺序：等值条件 → 范围条件 → 排序字段