import { describe, it, expect } from 'vitest'

import { customMount } from '../customMount'
import UpdateNote from '../../common/UpdateNote.vue'

describe('UpdateNote', () => {
    it('should render properly', () => {
        const wrapper = customMount(UpdateNote)
        expect(wrapper.classes('notes-content')).toBeDefined()
    })
})