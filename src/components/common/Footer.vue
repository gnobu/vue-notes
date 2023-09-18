<script setup>
import { useNoteStore } from '../../stores/note-store'

const noteStore = useNoteStore()
</script>

<template>
    <footer class="footer">
        <p>Hello, {{ noteStore.fullName }}</p>
        <div class="logout">
            Logout:
            <button @click="$emit('logout')" class="action-icon material-symbols-outlined">logout</button>
        </div>
    </footer>
</template>

<style scoped>
button {
    color: #000;
}
.logout {
    display: flex;
    gap: .5rem;
    align-items: center;
}
</style>