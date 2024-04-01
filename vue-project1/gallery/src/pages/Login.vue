<template>
  <div class="form-signin w-100 m-auto">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
    <div class="form-floating">
      <input
        type="email"
        class="form-control"
        id="floatingInput"
        v-model="userId"
      />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input
        type="password"
        class="form-control"
        id="floatingPassword"
        v-model="userPw"
      />
      <label for="floatingPassword">Password</label>
    </div>

    <div class="form-check text-start my-3">
      <input
        class="form-check-input"
        type="checkbox"
        value="remember-me"
        id="flexCheckDefault"
      />
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button class="btn btn-primary w-100 py-2" @click="userLogin">
      Sign in
    </button>
    <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
  </div>
</template>

<script setup>
import router from '@/router'
import axios from 'axios'
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

const userId = ref('')
const userPw = ref('')

const store = useUserStore()
const { setAccount } = store

function userLogin() {
  axios
    .post('/api/account/login', {
      email: userId.value,
      password: userPw.value,
    })
    .then(res => {
      setAccount(res.data)
      sessionStorage.setItem('id', res.data)
      alert('로그인 성공')
      router.push('/')
    })
    .catch(() => {
      alert('로그인 실패')
    })
}
</script>

<style scoped>
.form-signin {
  max-width: 330px;
  padding: 1rem;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type='email'] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type='password'] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
