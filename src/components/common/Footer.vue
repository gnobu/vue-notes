<script setup>
import { useNoteStore } from '../../stores/note-store'

const noteStore = useNoteStore()
</script>

<template>
    <div class="toolbar">
        <p>Hello, {{ noteStore.fullName }}</p>
        <button @click="$emit('logout')" class="action-icon material-symbols-outlined">logout</button>
    </div>
</template>

<style scoped>
a {
    color: #fff;
    text-decoration: none;
}
</style>