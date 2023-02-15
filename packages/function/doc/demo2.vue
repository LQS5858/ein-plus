<!-- html -->
<template>
  <ein-input v-model="value1" disabled placeholder="禁用状态"></ein-input>
</template>

<!-- js -->
<script setup>
  import {ref} from 'vue'
  const value1 = ref('')
</script>