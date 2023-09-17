import { describe, it, expect } from 'vitest'

import GridView from '../../grid/GridView.vue'
import { customMount, noteStore } from '../customMount'


describe('GridView', () => {
    it('should render overview without a selected note', () => {
        noteStore.notesView = 'grid'
        noteStore.selectedNoteId = null
        const wrapper = customMount(GridView)
        expect(wrapper.find('.notes-content-grid').exists()).toBe(true)
    })
    it('should render update note form with a selected note', () => {
        noteStore.notes = [{ id: 1, title: 'title', content: 'content' }]
        noteStore.notesView = 'grid'
        noteStore.selectedNoteId = 1
        const wrapper = customMount(GridView)
        expect(wrapper.find('[data-testId="update-form"]').exists()).toBe(true)
    })
    it('should render new note form with "new" noteId', () => {
        noteStore.notesView = 'grid'
        noteStore.selectedNoteId = 'new'
        const wrapper = customMount(GridView)
        expect(wrapper.find('[data-testId="new-note-form"]').exists()).toBe(true)
    })
})