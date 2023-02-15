<!-- html -->
<template>
  <ein-input v-model="password" type="password" showPassword placeholder="请输入密码"></ein-input>
</template>

<!-- js -->
<script setup>
  import {ref} from 'vue'
  const password = ref('')
</script>