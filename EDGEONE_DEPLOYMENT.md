# EdgeOne Pages 部署指南

## 部署步骤

### 1. 构建命令

使用以下命令进行EdgeOne Pages优化构建：

```bash
pnpm run build:edgeone
```

### 2. EdgeOne Pages 配置

在 EdgeOne Pages 控制台中设置以下配置：

**构建命令：**

```
pnpm run build:edgeone
```

**输出目录：**

```
dist
```

**环境变量（必需）：**

```
CHANNEL=你的Telegram频道用户名
```

**可选环境变量：**

```
LOCALE=zh-cn
TIMEZONE=Asia/Shanghai
TELEGRAM=你的Telegram用户名
TWITTER=你的Twitter用户名
GITHUB=你的GitHub用户名
```

### 3. 依赖优化说明

已针对Edge Runtime进行以下优化：

1. **内存优化**：

   - LRU缓存从50MB减少到10MB
   - 适应Edge Runtime内存限制

2. **依赖更新**：

   - Astro升级到4.15.9+
   - Cloudflare适配器升级到11.1.0+
   - Cheerio升级到稳定版1.0.0

3. **配置优化**：
   - 添加EdgeOne/Cloudflare特定的外部依赖配置
   - 启用platformProxy支持
   - 添加Edge Runtime兼容性标志

### 4. 部署注意事项

- 确保Telegram频道是公开的
- 频道用户名是字符串（如：miantiao_me），不是数字ID
- 关闭频道的"限制保存内容"设置
- 修改环境变量后需要重新部署

### 5. 错误排查

如果遇到部署错误，检查：

1. 环境变量CHANNEL是否正确设置
2. Telegram频道是否公开可访问
3. 构建日志中是否有特定错误信息

### 6. 性能优化

- Edge Runtime缓存TTL：5分钟
- 静态资源通过EdgeOne CDN加速
- 支持全球3200+边缘节点
- SSR渲染在边缘节点执行

## 验证部署

部署成功后，访问你的域名应该能看到：

- 网站首页显示Telegram频道内容
- RSS订阅源：`/rss.xml`
- 站点地图：`/sitemap.xml`
- 搜索功能正常工作
