<template>
  <div class="admin-header">
    <!-- 左侧标题 -->
    <div class="header-title">仪表盘</div>

    <!-- 右侧部分 -->
    <div class="header-right">
      <!-- 搜索框 -->
      <el-input placeholder="搜索..." v-model="searchText" class="search-input" clearable>
        <template #suffix>
          <el-icon><Search /></el-icon>
        </template>
      </el-input>

      <!-- 通知图标 -->
      <el-badge :value="3" class="notification-badge">
        <el-icon><Bell /></el-icon>
      </el-badge>

      <!-- 用户头像和下拉菜单 -->
      <el-dropdown>
        <span class="el-dropdown-link user-info">
          <el-avatar size="small" src="../../assets/avatar.png" />
          <span>管理员</span>
          <el-icon class="el-icon--right"><ArrowDown /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Bell, Search, ArrowDown } from '@element-plus/icons-vue'

// 为组件定义名称
defineOptions({
  name: 'PageHeader',
})

const searchText = ref('')
</script>

<style scoped>
/* 使用全局变量 */
.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  background-color: var(--header-bg);
  padding: var(--header-padding);
  border-bottom: 1px solid var(--border-color-lighter);
  width: 100%;
  box-shadow: var(--header-shadow);
}

.header-title {
  font-size: var(--header-title-size);
  font-weight: bold;
  color: var(--text-color-primary);
}

.header-right {
  display: flex;
  align-items: center;
  gap: var(--header-item-gap);
}

.search-input {
  width: var(--header-search-width);
}

.notification-badge {
  cursor: pointer;
  font-size: var(--header-icon-size);
  color: var(--text-color-regular);
}

.user-info {
  display: flex;
  align-items: center;
  gap: var(--header-avatar-gap);
  cursor: pointer;
  color: var(--text-color-regular);
}

.el-icon--right {
  margin-left: var(--header-dropdown-icon-margin);
}
</style>
