<script setup >
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useNoteStore } from '../stores/note-store'

const router = useRouter()
const noteStore = useNoteStore()

const hasAccount = ref(true)
const password = ref('')
const errorMsg = ref('')

async function submitForm() {
    const payload = {
        password: password.value,
        fullName: noteStore.fullName,
        email: noteStore.email
    }
    const error = hasAccount.value
        ? await noteStore.signin(payload)
        : await noteStore.signup(payload)
    if (!error) {
        password.value = ''
        router.push('/')
    } else {
        password.value = ''
        errorMsg.value = error
    }
}
</script>

<template>
    <main class="content-wrapper">
        <div class="notes-content">
            <div class="container">
                <h2 class="form-intro">Welcome to Notes</h2>
                <div class="form-toggle">
                    <button @click="hasAccount = true" :class="`toggle-btn ${!hasAccount ? 'clickable' : ''}`">Login</button>
                    <button @click="hasAccount = false" :class="`toggle-btn ${hasAccount ? 'clickable' : ''}`">Signup</button>
                </div>
                <form data-testId="auth-form" @submit.prevent="submitForm">
                    <input v-if="!hasAccount" type="text" data-testId="fullName" class="input-title"
                        v-model="noteStore.fullName" placeholder="Full Name">
                    <input type="text" data-testId="email" class="input-title" v-model="noteStore.email" placeholder="Email">
                    <input type="text" data-testId="password" class="input-title" v-model="password" placeholder="Password">
                    <!-- <span class="error-msg">{{ error }}</span> -->
                    <button data-testId="submit-btn" type="submit" class="form-btn">
                        <span>{{ hasAccount ? 'Login' : 'Sign up' }}</span>
                    </button>
                </form>
            </div>
        </div>
    </main>
    <footer class="footer"></footer>
</template>

<style scoped>
.container{
    max-width: 500px;
    margin-inline: auto;
}
.form-toggle {
    display: flex;
    margin-inline: auto;
    width: fit-content;
    margin-bottom: 1rem;
}

.toggle-btn {
    padding: .5rem 1rem;
    border: 0;
    border-radius: 4px;
    color: #999999;
}

.toggle-btn.clickable {
    background-color: #FFFFFF;
    color: #333333;
    cursor: pointer;
}

.toggle-btn.clickable:hover {
    background-color: #cacaca;
}
</style>