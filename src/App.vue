<script setup>
import Toolbar from '@/components/common/Toolbar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="notes-wrapper">
    <Toolbar />
    <RouterView />
  </div>
</template>
