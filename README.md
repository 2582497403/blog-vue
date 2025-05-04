# Blog-vue

# 环境初始化

## 1. 初始化项目

执行命令：

```bash
npm init vue@latest
```

然后会有一系列问题提示你填写：

| 选项                | 企业建议                         | 解释           |
| :------------------ | :------------------------------- | :------------- |
| 项目名称            | 用小写+短横线，如 `blog-system`  | 文件夹名字     |
| 包管理器选择        | npm / pnpm（公司规定就用规定的） | 管理依赖       |
| TypeScript          | 选 Yes                           | 企业中基本必选 |
| JSX                 | 选 No（除非项目需要）            | 初学用不上     |
| Vue Router          | 选 Yes                           | 路由必备       |
| Pinia               | 选 Yes                           | 状态管理必备   |
| Vitest 单元测试     | 选 No（先跳过测试）              | 初期可以不管   |
| E2E 测试（Cypress） | 选 No（先跳过）                  | 初期不需要     |
| ESLint + Prettier   | 选 Yes                           | 代码规范必选   |

创建完后，会生成一个完整项目。

✅ 进入目录：

```bash
cd blog-system
```

✅ 安装依赖：

```bash
npm install
```

## 2. 目录结构

```
src/
├── assets/      # 静态资源
├── components/  # 公共组件
├── views/       # 页面组件
├── router/      # 路由配置
├── stores/      # Pinia 状态管理
├── App.vue
├── main.ts
├── ...

```

| 目录/文件      | 用途                               |
| :------------- | :--------------------------------- |
| src/api/       | 请求接口统一管理                   |
| src/utils/     | 工具函数                           |
| src/hooks/     | 封装常用 hooks                     |
| src/constants/ | 常量配置                           |
| src/types/     | 类型定义（尤其是 TypeScript 项目） |
| src/styles/    | 全局样式，如主题色、公共 CSS       |
| .env           | 环境变量文件                       |

## 3. 配置 ESLint + Prettier（代码规范）

**目标**：统一代码风格，避免团队成员写出乱七八糟的代码。

- `.eslintrc.cjs` 文件：控制语法规则，比如禁止未使用的变量。
- `.prettierrc` 文件：控制格式规则，比如缩进用2格、末尾加不加分号。

一般标准配置是：

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "bracketSpacing": true
}

```

然后在 VS Code 配置：

- 保存时自动格式化（Format On Save）
- eslint 报错提示

✅ 统一规范之后，提交的每一行代码格式都一样，避免不必要的争吵。

## 4. 安装和配置基础库

**目标**：为后面开发做好准备工作。

常见企业必装的库：

| 类别   | 推荐库                        | 说明           |
| :----- | :---------------------------- | :------------- |
| 请求库 | axios                         | 请求后端接口   |
| UI库   | Element Plus / Ant Design Vue | 常用组件       |
| 工具类 | lodash-es / dayjs             | 处理数据和时间 |

```bash
npm install axios lodash-es dayjs
npm install element-plus
```

`main.ts` 中全局引入 Element Plus：

```ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

app.mount('#app');

```

## 5. 配置环境变量（区分开发/生产）

**目标**：区分不同环境的接口地址、设置不同参数。

项目根目录下建文件：

- `.env.development` （开发环境）
- `.env.production` （生产环境）

示例：

```bash
# .env.development
VITE_API_BASE_URL=http://localhost:3000/api
# .env.production
VITE_API_BASE_URL=https://api.myblog.com
```

在代码中使用：

```ts
console.log(import.meta.env.VITE_API_BASE_URL);
```

✅ 企业项目一般有至少两个环境，**不能写死 URL**。

## 6.初始化全局样式

让整个项目的基础样式统一，看起来专业。

一般在 `src/styles/` 里新建：

- `reset.css`（浏览器默认样式清除）
- `global.css`（项目通用样式）

然后在 `main.ts` 里引入：

```ts
import './styles/reset.css';
import './styles/global.css';
```

## 7.Git

新建一个github仓库



