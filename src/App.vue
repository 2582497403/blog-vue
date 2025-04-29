<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <!-- 登录页单独显示，不要框架 -->
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<style scoped>
/* 特定于App组件的样式，全局样式已移至src/styles/global.css */
</style>
