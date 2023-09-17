import { describe, it, expect } from 'vitest'

import { customMount, noteStore } from '../customMount'
import Overview from '../../grid/Overview.vue'

describe('Overview', () => {
    it('should render two note sections', () => {
        const wrapper = customMount(Overview)
        expect(wrapper.findAll('[data-testId="note-section"]').length).toBe(2)
    })
    it("displays no notes info when there aren't notes", () => {
        noteStore.notes = []
        const wrapper = customMount(Overview)
        expect(wrapper.find('[data-testId="no-note-info"]').exists()).toBe(true)
    })
})