# AppFlowy Diary Pro

## 功能

- AppFlowy 风格
- 手机端适配
- D1 数据库存储
- R2 图片上传
- 深色模式
- PWA 可扩展

## 本地运行

```bash
npm install
npm run dev
```

## Cloudflare

### 创建 D1

Cloudflare -> D1 -> Create

执行：

```sql
CREATE TABLE diary (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  content TEXT,
  image TEXT,
  created_at TEXT
);
```

### 创建 R2

Cloudflare -> R2 -> Create Bucket

Bucket 名：

```txt
diary-images
```

### 登录 Wrangler

```bash
npx wrangler login
```

### 部署

```bash
npm run build
```
