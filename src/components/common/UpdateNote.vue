<script setup>
import { ref, computed, watchEffect } from 'vue'
import contenteditable from 'vue-contenteditable'
import { useNoteStore } from '@/stores/note-store'

const noteStore = useNoteStore()

const title = ref('')
const content = ref('')
const error = computed(() => {
    if (!title.value.trim().length || !content.value.trim().length) {
        return 'title and content are required'
    }
    return ''
})
function handleSubmit() {
    if (error.value) return

    noteStore.updateNote({ id: noteStore.selectedNote.id, title: title.value, content: content.value })

    title.value = ''
    content.value = ''
}
watchEffect(() => {
    title.value = noteStore.selectedNote?.title || ''
    content.value = noteStore.selectedNote?.content || ''
})
</script>

<template>
    <div class="notes-content">
        <form data-testId="update-form" @submit.prevent="handleSubmit">
            <input type="text" class="input-title" v-model="title" placeholder="Add title">
            <span class="error-msg">{{ error }}</span>
            <contenteditable tag="div" class="content-editable" :contenteditable="true" :no-nl="false" :no-html="true"
                v-model="content" />
            <button type="submit" class="form-save-btn">
                <span class="material-symbols-outlined">save</span>
            </button>
        </form>
    </div>
</template>