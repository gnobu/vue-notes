<template>
    <input type="text" data-testId="fullName" class="input-title" v-model="fullName" placeholder="Full Name">
    <input type="text" data-testId="email" class="input-title" v-model="email" placeholder="Email">
    <input type="text" data-testId="password" class="input-title" v-model="password" placeholder="Password">
    <!-- <span class="error-msg">{{ error }}</span> -->
    <button @click="$emit('submitForm', { fullName, email, password })" data-testId="submit-btn" type="submit"
        class="form-btn">
        <span>Sign up</span>
    </button>
</template>

<script setup >
import { ref } from 'vue'
const emit = defineEmits(['submitForm'])

const fullName = ref('')
const email = ref('')
const password = ref('')
</script>