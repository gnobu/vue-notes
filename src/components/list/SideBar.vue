<script setup>
import ListItem from '@/components/partial/ListItem.vue'
import { useNoteStore } from '@/stores/note-store'
const noteStore = useNoteStore()
</script>

<template>
    <div :class="`notes-sidebar ${noteStore.selectedNoteId ? 'inactive-sidebar' : ''}`">
        <ListItem :notes="noteStore.pinnedNotes" :title="`Pinned Notes`" :type="`list`" :icon="`push_pin`"
            :icon-class="'sidebar-title-pinned-icon'" />
        <ListItem :notes="noteStore.allNotes" :title="`All Notes`" :type="`list`" :icon="`event_note`"
            :icon-class="'sidebar-title-note-icon'" />
        <div data-testId="no-note-info" v-if="!noteStore.notes.length" className="note-list-nothing-found"><span>{{
            noteStore.notice.noNotesFound }}</span></div>
    </div>
</template>