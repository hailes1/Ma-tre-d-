<template>
  <cv-header>
    <template #header-global>
      <cv-header-global-action
        @click="actionNotifications"
      >
        <Notification20 />
      </cv-header-global-action>

      <cv-header-global-action
        aria-label="User avatar"
        aria-controls="user-panel"
        @click="actionUserAvatar"
        label="Log in"
        tip-position="bottom"
        tip-alignment="center"
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
import { ref } from 'vue'
import {
  CvHeader,
  CvHeaderGlobalAction,
} from '@carbon/vue'
import { Login20, Notification20, UserAvatar20 } from '@carbon/icons-vue'

const loggedIn = ref(false)

const actionNotifications = () => {}
</script>
