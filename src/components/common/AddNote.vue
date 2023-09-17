<script setup>
import { ref, computed } from 'vue'
import contenteditable from 'vue-contenteditable'
import { useNoteStore } from '@/stores/note-store'

const title = ref('')
const content = ref('')
const error = computed(() => {
    if (!title.value.trim().length || !content.value.trim().length) {
        return 'title and content are required'
    }
    return ''
})

const noteStore = useNoteStore()
async function handleSubmit() {
    if (error.value) return

    await noteStore.addNote({ title: title.value, content: content.value })
    title.value = ''
    content.value = ''
}
</script>

<template>
    <div :class="`notes-content ${noteStore.selectedNoteId === 'new' ? '' : 'inactive-sidebar'}`">
        <form data-testId="new-note-form" @submit.prevent="handleSubmit">
            <input type="text" data-testId="title-input" class="input-title" v-model="title" placeholder="Add title">
            <span class="error-msg">{{ error }}</span>
            <contenteditable tag="div" data-testId="content-input" class="content-editable" :contenteditable="true"
                :no-nl="false" :no-html="true" v-model="content" />
            <button data-testId="submit-btn" type="submit" class="form-save-btn">
                <span class="material-symbols-outlined">save</span>
            </button>
        </form>
    </div>
</template>