<!-- html -->
<template>
  <ein-input v-model="value1" clearable>
    <template #btn>
      <ein-button type="primary" leftIcon="ein-icon-search">搜索</ein-button>
    </template>
  </ein-input>
</template>

<!-- js -->
<script setup>
  import {ref} from 'vue'
  const value1 = ref('')
</script>