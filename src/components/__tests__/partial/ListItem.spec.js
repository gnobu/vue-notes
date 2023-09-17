import { describe, it, expect } from 'vitest'

import { customMount, noteStore } from '../customMount'
import ListItem from '../../partial/ListItem.vue'

describe('ListItem', () => {
    it('displays the correct type', () => {
        const wrapper = customMount(ListItem, {
            props: { 'type': 'grid' }
        })
        expect(wrapper.find('[data-testId="grid-title"]').exists()).toBe(true)
        expect(wrapper.find('[data-testId="grid-card-wrapper"]').exists()).toBe(true)
        expect(wrapper.find('[data-testId="list-title"]').exists()).toBe(false)
        expect(wrapper.find('[data-testId="list-wrapper"]').exists()).toBe(false)
    })
    it('displays the correct title', () => {
        const title = 'All Notes'
        const wrapper = customMount(ListItem, {
            props: { 'title': title, 'type': 'grid' }
        })
        expect(wrapper.find('[data-testId="grid-title"]').text()).toBe(title)
    })
    it('displays the right amount of notes', () => {
        const notes = noteStore.allNotes
        const wrapper = customMount(ListItem, {
            props: { notes, type: 'grid' }
        })
        expect(wrapper.findAll('[data-testId="note"]').length).toBe(notes.length)

        const listWrapper = customMount(ListItem, {
            props: { notes, type: 'list' }
        })
        expect(listWrapper.findAll('[data-testId="note"]').length).toBe(notes.length)
    })
})