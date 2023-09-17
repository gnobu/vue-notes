<script setup>
import { useNoteStore } from '@/stores/note-store'
const noteStore = useNoteStore()
const props = defineProps(['notes', 'title', 'icon', 'type', 'iconClass'])
const titleLimit = 15
const charLimit = 50
</script>

<template>
    <h4 data-testId="list-title" class="sidebar-title list-item-title" v-if="type === 'list'">
        <span :class="`${iconClass} material-symbols-outlined`">{{ icon }}</span>
        {{ title }}
    </h4>
    <ul data-testId="list-wrapper" class="note-list" v-if="type === 'list'">
        <li data-testId="note" v-for="note in notes" :key="note.id" @click="noteStore.selectNote(note.id)"
            :data-selected="noteStore.selectedNote?.id === note.id">
            <p>{{ note.title }}</p>
            <span @click.stop="noteStore.removeFromPinned(note.id)" v-if="note.pinned"
                class="note-list-icon material-symbols-outlined">do_not_disturb_on</span>
            <span @click.stop="noteStore.addToPinned(note.id)" v-else
                class="note-list-icon material-symbols-outlined">push_pin</span>
        </li>
    </ul>
    <!-- Grid type -->
    <h4 data-testId="grid-title" class="overview-title list-item-title" v-if="type === 'grid'">
        <span :class="`${iconClass} material-symbols-outlined`">{{ icon }}</span>
        {{ title }}
    </h4>
    <div data-testId="grid-card-wrapper" class="grid-card-wrapper" v-if="type === 'grid'">
        <div data-testId="note" class="note-card" v-for="note in notes" :key="note.id" @click="noteStore.selectNote(note.id)"
            :data-selected="noteStore.selectedNote?.id === note.id">
            <h4 class="note-card-title">{{ note.title.substring(0,
                titleLimit) }}{{ note.title.length > titleLimit ? "..." : "" }}</h4>
            <span @click.stop="noteStore.removeFromPinned(note.id)" v-if="note.pinned"
                class="note-grid-icon material-symbols-outlined">do_not_disturb_on</span>
            <span @click.stop="noteStore.addToPinned(note.id)" v-else
                class="note-grid-icon material-symbols-outlined">push_pin</span>
            <p class="pre-line">{{ note.content.substring(0, charLimit) }}{{ note.content.length > charLimit ? "..." : "" }}</p>
            <!-- <p>{{ note.content }}</p> -->
        </div>
    </div>
</template>

<style scoped>
.pre-line{
    white-space: pre-line;
}
</style>