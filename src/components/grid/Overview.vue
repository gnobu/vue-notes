<script setup>
import { useNoteStore } from '../../stores/note-store'
import ListItem from '../partial/ListItem.vue'

const noteStore = useNoteStore()
</script>

<template>
    <div class="notes-content-grid">
        <div data-testId="note-section" class="notes-content-all-notes">
            <ListItem :notes="noteStore.pinnedNotes" :title="`Pinned Notes`" :type="`grid`" :icon="`push_pin`"
                :icon-class="'sidebar-title-pinned-icon'" />
        </div>
        <div data-testId="note-section" class="notes-content-all-notes">
            <ListItem :notes="noteStore.allNotes" :title="`All Notes`" :type="`grid`" :icon="`event_note`"
                :icon-class="'sidebar-title-note-icon'" />
        </div>
        <div data-testId="no-note-info" v-if="!noteStore.notes.length" className="note-grid-nothing-found">
            <span>{{ noteStore.notice.noNotesFound }}</span>
        </div>
    </div>
</template>