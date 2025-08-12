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