import { describe, it, expect } from 'vitest'

import ListView from '../../list/ListView.vue'
import { customMount, noteStore } from '../customMount'

describe('ListView', () => {
    it('should render new note and sidebar on startup', () => {
        const wrapper = customMount(ListView)
        expect(wrapper.findComponent({ name: 'SideBar' }).exists()).toBe(true)
        expect(wrapper.findComponent({ name: 'AddNote' }).exists()).toBe(true)
    })
    it('should render update note form with a selected note', () => {
        noteStore.notes = [{ id: 1, title: 'title', content: 'content' }]
        noteStore.selectedNoteId = 1
        const wrapper = customMount(ListView)
        expect(wrapper.findComponent({ name: 'UpdateNote' }).exists()).toBe(true)
    })
})