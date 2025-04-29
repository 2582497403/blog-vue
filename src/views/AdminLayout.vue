<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <Sidebar />
      </el-aside>
      <el-container class="main-container">
        <el-header>
          <PageHeader />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/layout/Header.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
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
</style>
