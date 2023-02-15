<!-- html -->
<template>
  <ein-space>
    <ein-input v-model="value1" leftIcon="ein-icon-search"></ein-input>
    <ein-input v-model="value2" rightIcon="ein-icon-calendar"></ein-input>
  </ein-space>
</template>

<!-- js -->
<script setup>
  import { ref } from "vue";
  const value1 = ref('')
  const value2 = ref('')
</script>