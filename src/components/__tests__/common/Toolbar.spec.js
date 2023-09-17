import { describe, it, expect } from 'vitest'

import { customMount } from '../customMount'
import Toolbar from '../../common/Toolbar.vue'

describe('Toolbar', () => {
    it('should render properly', () => {
        const wrapper = customMount(Toolbar)
        expect(wrapper.classes('toolbar')).toBeDefined()
        expect(wrapper.findAll('.action-icon')).length.greaterThanOrEqual(4)
    })
})