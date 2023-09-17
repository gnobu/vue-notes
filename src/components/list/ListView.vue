<script setup>
import SideBar from '@/components/list/SideBar.vue'
import { useNoteStore } from '@/stores/note-store'
import AddNote from '../common/AddNote.vue'
import UpdateNote from '../common/UpdateNote.vue'

const noteStore = useNoteStore()
</script>

<template>
    <SideBar />
    <UpdateNote v-if="noteStore.selectedNote" :selected-note-prop="noteStore.selectedNote" />
    <AddNote v-else />
</template>