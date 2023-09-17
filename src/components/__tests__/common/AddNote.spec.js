import { describe, it, expect } from 'vitest'

import AddNote from '../../common/AddNote.vue'
import { customMount } from '../customMount'

describe('AddNote', () => {
    it('should render properly', async () => {
        const wrapper = customMount(AddNote)
        expect(wrapper.classes('notes-content')).toBeDefined()
    })
    it.todo('should submit a note', async () => {
        const wrapper = customMount(AddNote)
        const titleInput = wrapper.find('[data-testId="title-input"]')
        const contentInput = wrapper.find('[data-testId="content-input"]')
        const submitBtn = wrapper.find('[data-testId="submit-btn"]')

        await titleInput.setValue('New Note')
        await contentInput.setValue('New note content')
        await submitBtn.trigger('click')

        expect(wrapper.emitted()).toHaveProperty('submit')
    })
})
