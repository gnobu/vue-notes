<script setup >
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ListView from '@/components/list/ListView.vue'
import GridView from '@/components/grid/GridView.vue'
import Footer from '../components/common/Footer.vue'
import { useNoteStore } from '../stores/note-store'

const noteStore = useNoteStore()
const router = useRouter()
if (!noteStore.fullName) router.push('/auth')

onMounted(async () => {
    await noteStore.fetchNotes()
})
function logout() {
    noteStore.clearUserData()
    router.push('/auth')
}
</script>

<template>
    <div class="content-wrapper">
        <ListView v-if="noteStore.isListView" />
        <GridView v-else />
    </div>
    <Footer @logout="logout" />
</template>