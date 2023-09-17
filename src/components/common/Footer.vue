<script setup>
import { useNoteStore } from '../../stores/note-store'

const noteStore = useNoteStore()
</script>

<template>
    <footer class="toolbar">
        <p>Hello, {{ noteStore.fullName }}</p>
        <button @click="$emit('logout')" class="action-icon material-symbols-outlined">logout</button>
    </footer>
</template>

<style scoped>
a {
    color: #fff;
    text-decoration: none;
}
</style>