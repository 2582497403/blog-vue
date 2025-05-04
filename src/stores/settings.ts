import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
  // 状态
  const sidebarCollapsed = ref(false)
  const theme = ref(localStorage.getItem('theme') || 'light')
  const logoUrl = ref(new URL('@/assets/logo.svg', import.meta.url).href)
  const notificationCount = ref(3)

  // 操作
  function toggleSidebar() {
    sidebarCollapsed.value = !sidebarCollapsed.value
  }

  function setTheme(newTheme: 'light' | 'dark') {
    theme.value = newTheme
    localStorage.setItem('theme', newTheme)
    // 这里可以添加切换主题的逻辑
  }

  function setNotificationCount(count: number) {
    notificationCount.value = count
  }

  return {
    sidebarCollapsed,
    theme,
    logoUrl,
    notificationCount,
    toggleSidebar,
    setTheme,
    setNotificationCount,
  }
})
