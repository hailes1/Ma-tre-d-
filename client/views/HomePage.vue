<template>
  <section class="home-page">
    <div class="home-page__search">
      <cv-search
        :light="false"
        :label="label"
        :placeholder="placeholder"
        :disabled="disabled"
        :size="size"
        :expandable="expandable"
        :modelValue="modelValue"
        :form-item="formItem"
        :aria-label="ariaLabel"
        :clear-aria-label="clearAriaLabel"
        @input="onInput"
        >
      </cv-search>
    </div>
  </section>
</template>

<script setup>
import { CvSearch } from '@carbon/vue'


</script>

<style scoped>
.home-page__search {
  padding-inline: 6rem;
}

.home-page__search :deep(.bx--search) {
  width: 100%;
}

</style>
