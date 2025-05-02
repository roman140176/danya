<script setup lang="ts">
import { ref, onMounted } from 'vue'


const loading = ref(true)
const error = ref<string | null>(null)

const tg = window.Telegram?.WebApp
const first_name = ref('')
const id = ref('')
const username = ref('')
onMounted(() => {
  loading.value = true;
  // Пытаемся взять initData из Telegram WebApp API
  setTimeout(() => {
    first_name.value = tg?.initDataUnsafe.user?.first_name
    id.value = tg?.initDataUnsafe.user?.id
    username.value = tg?.initDataUnsafe.user?.username
    loading.value = false;
  },1000)
})
</script>

<template>
  <div v-if="loading">
    <h1>Загрузка...</h1>
  </div>

  <div v-else-if="error">
    <h1 style="color: red;">Ошибка: {{ error }}</h1>
  </div>

  <div v-else>
    <h1>Добро пожаловать, {{ first_name }}!</h1>
    <p>ID пользователя: {{ id }}</p>
    <p>Username: @{{username }}</p>
  </div>
</template>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 16px;
}
p {
  font-size: 18px;
}
</style>
