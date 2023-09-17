<script setup>
import { useNoteStore } from '@/stores/note-store'
import AddNote from '../common/AddNote.vue'
import UpdateNote from '../common/UpdateNote.vue'
import Overview from './Overview.vue'

const noteStore = useNoteStore()
</script>

<template>
    <Overview v-if="!noteStore.selectedNoteId" />
    <UpdateNote v-else-if="noteStore.selectedNote" />
    <AddNote v-else-if="noteStore.selectedNoteId === 'new'" />
</template>