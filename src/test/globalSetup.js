import { mount } from '@vue/test-utils'
import { useNoteStore } from '../stores/note-store'
import app from '../main'

export function globalSetup() {
    const noteStore = useNoteStore(app)
    const customMount = (Component, options)=>{
        return mount(Component, {
            global: {
                plugins: [noteStore],
            },
            ...options
        })
    }
    globalThis.customMount = customMount
}