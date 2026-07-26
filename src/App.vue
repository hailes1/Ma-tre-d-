<template>
  <cv-header :style="headerStyle">
    <template #header-global>
      <cv-header-global-action
        aria-label="Toggle dark mode"
        @click="toggleDarkMode"
        :style="headerItemStyle"
        :class="{ 'is-active': isDarkMode }"
      >
        <Idea20 />
      </cv-header-global-action>
      <cv-header-global-action :style="headerItemStyle">
        <Home20 />
      </cv-header-global-action>
      <cv-header-global-action
        @click="actionNotifications"
        :style="headerItemStyle"
      >
        <Notification20 />
      </cv-header-global-action>
      <cv-header-global-action
        @click="actionUserAvatar"
        :style="headerItemStyle"
      >
        <UserAvatar20 v-if="loggedIn" />
        <Login20 v-else />
      </cv-header-global-action>

    </template>
  </cv-header>

  <main id="main-content" class="app-content">
    <div class="app-content__inner">
      <router-view />
    </div>
  </main>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { CvHeader, CvHeaderGlobalAction } from '@carbon/vue'
import { Login20, Home20, Notification20, UserAvatar20, Idea20 } from '@carbon/icons-vue'

const loggedIn = ref(false)
const isDarkMode = ref(false)

const actionNotifications = () => {}
const actionUserAvatar = () => {}

const headerStyle = computed(() => ({
  backgroundColor: isDarkMode.value ? '#161616' : '#f4f4f4',
}))

const headerItemStyle = computed(() => ({
  color: isDarkMode.value ? '#f4f4f4' : '#161616',
}))

const syncThemeClass = () => {
  document.body.classList.toggle('light-mode', !isDarkMode.value)
}

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  syncThemeClass()
}

onMounted(() => {
  syncThemeClass()
})
</script>
