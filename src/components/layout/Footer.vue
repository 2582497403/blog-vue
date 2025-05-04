<script setup lang="ts">
// 为组件定义名称
defineOptions({
  name: 'PageFooter',
})

// 获取当前年份
const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="footer-container">
    <p>&copy; {{ currentYear }} 博客后台管理系统 | 版权所有</p>
  </div>
</template>

<style scoped>
.footer-container {
  height: var(--footer-height);
  padding: var(--footer-padding);
  text-align: var(--footer-text-align);
  background-color: var(--footer-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-color-secondary);
  font-size: 14px;
  border-top: 1px solid var(--border-color-lighter);
}
</style>
