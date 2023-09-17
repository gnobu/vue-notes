<script setup>
import { useNoteStore } from '../../stores/note-store'
const noteStore = useNoteStore()
</script>

<template>
    <div class="toolbar">
        <div class="toolbar-title">
            <RouterLink to="/">Notes</RouterLink>
            <div v-if="noteStore.fullName" class="action-icons">
                <button v-if="noteStore.selectedNoteId" @click="noteStore.unselectNotes()"
                    class="action-icon material-symbols-outlined">arrow_back_ios_new</button>
                <button v-if="noteStore.fullName" @click="noteStore.openNewNote()"
                    class="action-icon material-symbols-outlined">add_circle</button>
            </div>
        </div>
        <button v-if="noteStore.selectedNote" @click="noteStore.removeNote(noteStore.selectedNote?.id)"
            class="action-icon material-symbols-outlined">delete</button>
        <div class="action-icons justify-end">
            <button v-show="false" class="action-icon material-symbols-outlined">search</button>
            <button @click="noteStore.setView('list')" class="action-icon material-symbols-outlined">view_list</button>
            <button @click="noteStore.setView('grid')" class="action-icon material-symbols-outlined">grid_view</button>
        </div>
    </div>
</template>

<style scoped>
a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
}
</style>