<template>
    <div class="login-container">
        <img class="logo" src="../assets/logo-ipda.png" alt="">
        <form @submit.prevent="register">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" required />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <div class="form-group">
                <label for="password">confirm password:</label>
                <input type="confirm_password " id="confirm_password " v-model="confirm_password" required />
            </div>
            <div class="form-group">
                <button type="submit">Register</button>
            </div>
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            <p>  Already have an acount ? </p>
            <RouterLink to="/"> Login</RouterLink>
        </form>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const email = ref('');
const password = ref('');
const confirm_password = ref('');
const errorMessage = ref('');


const router = useRouter();

const register = () => {
    if (username.value === 'admin' && password.value === 'password') {
        localStorage.setItem('auth', 'true');
        router.push({ name: 'Dashboard' });
    } else {
        errorMessage.value = 'Invalid username or password';
    }

}




</script>
  
<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.login-container {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
}
.logo {
    max-width: 100%;
}
h1 {
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
    text-align: left;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #5cb85c;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background-color: #4cae4c;
}

.error {
    color: red;
    margin-top: 10px;
}
</style>
  