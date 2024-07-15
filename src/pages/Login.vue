<template>
    <div class="login-container">
        <img class="login-img" src="../assets/login-page-img.jpg" alt="">
        <div class="">
            <img class="logo" src="../assets/logo-ipda.png" alt="">
            <form @submit.prevent="login">
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" id="username" v-model="username" required />
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" v-model="password" required />
                </div>
                <div class="form-group">
                    <button type="submit">Login</button>
                </div>
                <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
                <p>Dont you have an account ? </p>
                <RouterLink to="register"> Register</RouterLink>
            </form>
        </div>


    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const errorMessage = ref('');


const router = useRouter();

const login = () => {
    if (username.value === 'admin' && password.value === 'password') {
        localStorage.setItem('auth', 'true');
        router.push({ name: 'Dashboard' });
    } else {
        errorMessage.value = 'Invalid username or password';
    }

}




</script>
  
<style scoped>

.login-container {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   
    min-width: 1280px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

}

.login-img {
    max-width: 100%;
    border-radius: 15px;


}

.logo {
    min-width: 320px;
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
  