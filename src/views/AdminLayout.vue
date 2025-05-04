<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="settingsStore.sidebarCollapsed ? '64px' : '200px'">
        <AppSidebar />
      </el-aside>
      <el-container class="main-container">
        <el-header>
          <PageHeader />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>
          <PageFooter />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/layout/Header.vue'
import AppSidebar from '@/components/layout/Sidebar.vue'
import PageFooter from '@/components/layout/Footer.vue'
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()
</script>

<style scoped>
.common-layout {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.main-container {
  width: 100%;
  overflow-x: hidden;
}

.el-header,
.el-footer {
  padding: 0;
}

/* 添加侧边栏过渡动画 */
.el-aside {
  transition: width 0.3s;
  overflow: hidden;
}
</style>
