import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  // 状态
  const username = ref('管理员')
  const role = ref('超级管理员')
  const avatar = ref(new URL('@/assets/avatar.png', import.meta.url).href)
  const token = ref(localStorage.getItem('token') || '')
  const isLoggedIn = ref(!!token.value)

  // 操作
  function login(userInfo: { username: string; token: string }) {
    username.value = userInfo.username
    token.value = userInfo.token
    localStorage.setItem('token', token.value)
    isLoggedIn.value = true
  }

  function logout() {
    username.value = ''
    token.value = ''
    localStorage.removeItem('token')
    isLoggedIn.value = false
  }

  function updateUserInfo(userInfo: { username?: string; role?: string; avatar?: string }) {
    if (userInfo.username) username.value = userInfo.username
    if (userInfo.role) role.value = userInfo.role
    if (userInfo.avatar) avatar.value = userInfo.avatar
  }

  return {
    username,
    role,
    avatar,
    token,
    isLoggedIn,
    login,
    logout,
    updateUserInfo,
  }
})
