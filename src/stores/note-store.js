import axios from "axios"
import { defineStore } from "pinia"

const base_url = 'https://web-production-88a1.up.railway.app'

export const useNoteStore = defineStore('noteStore', {
    state: () => ({
        notes: [],
        selectedNoteId: null,
        notesView: 'list',
        notice: {
            'blankTitle': 'Title can not be blank',
            'noNotesFound': 'No notes added yet!'
        },
        fullName: sessionStorage.getItem('fullName') || '',
        email: sessionStorage.getItem('email') || '',
        token: sessionStorage.getItem('token') || '',
    }),
    getters: {
        allNotes: (state) => state.notes.filter(note => !note.pinned),
        pinnedNotes: (state) => state.notes.filter(note => note.pinned),
        selectedNote: (state) => state.notes.find(note => note.id === state.selectedNoteId),
        isListView: (state) => state.notesView === 'list',
    },
    actions: {
        async signup(payload) {
            try {
                const { data } = await axios.post(`${base_url}/users`, payload)
                this.token = data.token
                this.setUserData(data)
                return true
            } catch (error) {
                console.log(error)
                return false
            }
        },
        async signin(payload) {
            try {
                const { data } = await axios.post(`${base_url}/users/signin`, payload)
                this.token = data.token
                this.setUserData(data)
                return true
            } catch (error) {
                console.log(error)
                return false
            }
        },
        async fetchNotes() {
            try {
                const { data } = await axios.get(`${base_url}/api/note`, {
                    headers: { Authorization: `Bearer ${this.token}` }
                })
                this.notes = data
            } catch (error) {
                console.log(error)
            }
        },
        async addNote(noteData) {
            try {
                const { data } = await axios.post(`${base_url}/api/note`, noteData, {
                    headers: { Authorization: `Bearer ${this.token}` }
                })
                this.notes = [...this.notes, data]
            } catch (error) {
                console.log(error)
            }
        },
        async addToPinned(noteId) {
            try {
                const { data } = await axios.put(`${base_url}/api/note/${noteId}`, { pinned: true }, {
                    headers: { Authorization: `Bearer ${this.token}` }
                })
                const updatedNotes = this.notes.map(note => {
                    if (note.id === data.id) note.pinned = true
                    return note
                })
                this.notes = updatedNotes
            } catch (error) {
                console.log(error)
            }
        },
        async removeFromPinned(noteId) {
            try {
                const { data } = await axios.put(`${base_url}/api/note/${noteId}`, { pinned: false }, {
                    headers: { Authorization: `Bearer ${this.token}` }
                })
                const updatedNotes = this.notes.map(note => {
                    if (note.id === data.id) note.pinned = false
                    return note
                })
                this.notes = updatedNotes
            } catch (error) {
                console.log(error)
            }
        },
        async removeNote(noteId) {
            try {
                const res = await axios.delete(`${base_url}/api/note/${noteId}`, {
                    headers: { Authorization: `Bearer ${this.token}` }
                })
                this.notes = this.notes.filter(note => note.id !== noteId)
                this.selectedNoteId = null
            } catch (error) {
                console.log(error)
            }
        },
        async updateNote(noteData) {
            try {
                const { data } = await axios.put(`${base_url}/api/note/${noteData.id}`, noteData, {
                    headers: { Authorization: `Bearer ${this.token}` }
                })
                const updatedNotes = this.notes.map(note => {
                    if (note.id === data.id) return data
                    return note
                })
                this.notes = updatedNotes
            } catch (error) {
                console.log(error)
            }
        },
        selectNote(noteId) {
            this.selectedNoteId = noteId
        },
        openNewNote() {
            this.selectedNoteId = 'new'
        },
        unselectNotes() {
            this.selectedNoteId = null
        },
        setView(view) {
            this.notesView = view
        },
        setUserData(data) {
            this.fullName = data.fullName
            sessionStorage.setItem('fullName', data.fullName)
            this.email = data.email
            sessionStorage.setItem('email', data.email)
            this.token = data.token
            sessionStorage.setItem('token', data.token)
        },
        clearUserData() {
            this.fullName = ''
            this.email = ''
            this.token = ''
            sessionStorage.clear()
        }
    }
})