import { describe, it, expect } from 'vitest'

import SideBar from '../../list/SideBar.vue'
import { customMount, noteStore } from '../customMount'

describe('SideBar', () => {
    it('should render two ListItems', () => {
        const wrapper = customMount(SideBar)
        expect(wrapper.findAllComponents({ name: 'ListItem' }).length).toBe(2)
    })
    it("displays 'no-notes' info when there aren't notes", () => {
        noteStore.notes = []
        const wrapper = customMount(SideBar)
        expect(wrapper.find('[data-testId="no-note-info"]').exists()).toBe(true)
    })
})