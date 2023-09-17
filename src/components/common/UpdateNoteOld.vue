<script setup>
import { ref, computed, watchEffect } from 'vue'
import contenteditable from 'vue-contenteditable'
import { useNoteStore } from '@/stores/note-store'

const props = defineProps({
    'selectedNoteProp': Object,
})
const noteStore = useNoteStore()

const title = ref(props.selectedNoteProp.title)
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
    console.log(title.value, props)
})
</script>

<template>
    <div class="notes-content">
        <form @submit.prevent="handleSubmit">
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