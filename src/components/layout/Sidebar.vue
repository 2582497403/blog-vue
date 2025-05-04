<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {
  Odometer,
  Document,
  Folder,
  ChatLineRound,
  User,
  Setting,
  CircleClose,
  Fold,
  Expand,
} from '@element-plus/icons-vue'
import { useUserStore } from '@/stores/user'
import { useSettingsStore } from '@/stores/settings'

// 为组件定义名称（解决linter错误）
defineOptions({
  name: 'AppSidebar',
})

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const settingsStore = useSettingsStore()

// 根据当前路由设置默认激活菜单
const activeMenu = ref(route.path)

// 菜单项数据
const menuItems = [
  {
    title: '仪表盘',
    icon: Odometer,
    path: '/dashboard',
    index: '1',
  },
  {
    title: '文章管理',
    icon: Document,
    path: '/articles',
    index: '2',
  },
  {
    title: '分类管理',
    icon: Folder,
    path: '/categories',
    index: '3',
  },
  {
    title: '评论管理',
    icon: ChatLineRound,
    path: '/comments',
    index: '4',
  },
  {
    title: '用户管理',
    icon: User,
    path: '/users',
    index: '5',
  },
  {
    title: '系统设置',
    icon: Setting,
    path: '/settings',
    index: '6',
  },
]

// 菜单点击处理
const handleMenuSelect = (index: string) => {
  const selectedItem = menuItems.find((item) => item.index === index)
  if (selectedItem) {
    router.push(selectedItem.path)
  }
}

// 退出登录
const handleLogout = () => {
  userStore.logout()
  router.push('/login')
}
</script>

<template>
  <div class="sidebar-container" :class="{ 'is-collapsed': settingsStore.sidebarCollapsed }">
    <!-- Logo区域 -->
    <div class="logo-container">
      <img :src="settingsStore.logoUrl" alt="Logo" class="logo-img" />
      <span class="logo-text" v-if="!settingsStore.sidebarCollapsed">博客后台</span>
    </div>

    <!-- 用户信息 -->
    <div class="user-info" v-if="!settingsStore.sidebarCollapsed">
      <el-avatar class="user-avatar" :src="userStore.avatar" size="medium" />
      <div class="user-details">
        <div class="user-name">{{ userStore.username }}</div>
        <div class="user-role">{{ userStore.role }}</div>
      </div>
    </div>

    <!-- 菜单区域 -->
    <el-menu
      :default-active="activeMenu"
      class="sidebar-menu"
      :collapse="settingsStore.sidebarCollapsed"
      :collapse-transition="false"
      background-color="var(--sidebar-bg)"
      text-color="var(--sidebar-text)"
      active-text-color="var(--sidebar-active-text)"
      router
      @select="handleMenuSelect"
    >
      <el-menu-item v-for="item in menuItems" :key="item.index" :index="item.index">
        <el-icon><component :is="item.icon" /></el-icon>
        <template #title>
          <span>{{ item.title }}</span>
        </template>
      </el-menu-item>
    </el-menu>

    <!-- 侧边栏折叠按钮 -->
    <div class="sidebar-collapse" @click="settingsStore.toggleSidebar">
      <el-icon>
        <fold v-if="!settingsStore.sidebarCollapsed" />
        <expand v-else />
      </el-icon>
    </div>

    <!-- 退出登录 -->
    <div class="logout-container" @click="handleLogout">
      <el-icon><CircleClose /></el-icon>
      <span v-if="!settingsStore.sidebarCollapsed">退出登录</span>
    </div>
  </div>
</template>

<style scoped>
.sidebar-container {
  height: 100%;
  background-color: var(--sidebar-bg);
  width: var(--sidebar-width);
  display: flex;
  flex-direction: column;
  color: var(--sidebar-text);
  overflow-y: hidden;
  transition: width 0.3s;
}

.logo-container {
  display: flex;
  align-items: center;
  padding: 16px;
  height: 64px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.logo-img {
  width: 32px;
  height: 32px;
  margin-right: 8px;
}

.logo-text {
  font-size: 18px;
  font-weight: bold;
  color: white;
  white-space: nowrap;
}

.user-info {
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.user-avatar {
  margin-right: 12px;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-size: 14px;
  font-weight: bold;
}

.user-role {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
}

.sidebar-menu {
  flex: 1;
  border-right: none;
}

.sidebar-menu :deep(.el-menu-item) {
  height: var(--sidebar-item-height);
}

.sidebar-menu :deep(.el-menu-item.is-active) {
  background-color: var(--sidebar-hover-bg);
}

.sidebar-menu :deep(.el-menu-item:hover) {
  background-color: var(--sidebar-hover-bg);
}

.sidebar-menu :deep(.el-icon) {
  font-size: var(--sidebar-icon-size);
  margin-right: 10px;
}

.sidebar-menu :deep(.el-menu--collapse) {
  width: var(--sidebar-collapsed-width);
}

/* 添加折叠后的样式 */
.sidebar-container.is-collapsed {
  width: var(--sidebar-collapsed-width);
}

.sidebar-container.is-collapsed .logo-container {
  justify-content: center;
  padding: 16px 0;
}

.sidebar-collapse {
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-collapse:hover {
  background-color: var(--sidebar-hover-bg);
}

.sidebar-container.is-collapsed .logout-container {
  justify-content: center;
  padding: 12px 0;
}

.logout-container {
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.logout-container:hover {
  background-color: var(--sidebar-hover-bg);
}

.logout-container .el-icon {
  margin-right: 10px;
}

.sidebar-container.is-collapsed .logout-container .el-icon {
  margin-right: 0;
}

/* 工具提示样式 */
.sidebar-container.is-collapsed :deep(.el-menu-item) {
  padding: 0 !important;
  text-align: center;
}

.sidebar-container.is-collapsed :deep(.el-menu-item .el-icon) {
  margin: 0;
}
</style>
