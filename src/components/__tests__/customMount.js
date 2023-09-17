import { mount } from '@vue/test-utils'
import { useNoteStore } from '../../stores/note-store'
import app from '../../main'

export const noteStore = useNoteStore(app)
export const customMount = (Component, options) => {
    if (Component) {
        return mount(Component, {
            global: {
                plugins: [noteStore],
            },
            ...options
        })
    }
}