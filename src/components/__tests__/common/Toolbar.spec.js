import { describe, it, expect, vi } from 'vitest'

import { customMount, noteStore } from '../customMount'
import Toolbar from '../../common/Toolbar.vue'

// Mock vue-router
vi.mock('vue-router', () => ({
    createRouter: vi.fn(),
    createWebHistory: vi.fn(),
    resolve: vi.fn(),
    RouterLink: vi.fn(),
}))
describe('Toolbar', () => {
    it('should not display add/back buttons without authenticated user', () => {
        const wrapper = customMount(Toolbar)
        expect(wrapper.classes('toolbar')).toBeDefined()
        expect(wrapper.find('[data-testId="back-btn"]').exists()).toBe(false)
        expect(wrapper.find('[data-testId="back-btn"]').exists()).toBe(false)
    })
    it('should display add button when no note selected', () => {
        noteStore.fullName = 'name'
        const wrapper = customMount(Toolbar)
        expect(wrapper.classes('toolbar')).toBeDefined()
        expect(wrapper.find('[data-testId="add-btn"]').exists()).toBe(true)
    })
    it('should display back button when not in overview', () => {
        noteStore.fullName = 'name'
        noteStore.selectedNoteId = 'new'
        const wrapper = customMount(Toolbar)
        expect(wrapper.classes('toolbar')).toBeDefined()
        expect(wrapper.find('[data-testId="back-btn"]').exists()).toBe(true)
    })
})