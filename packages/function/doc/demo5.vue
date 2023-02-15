<!-- html -->
<template>
  <ein-space>
    <ein-input v-model="value1"  placeholder="默认大小"></ein-input>
    <ein-input v-model="value2"  placeholder="小的" size="small"></ein-input>
    <ein-input v-model="value3"  placeholder="更小的" size="mini"></ein-input>
  </ein-space>
</template>

<!-- js -->
<script setup>
  import { ref } from "vue";
  const value1 = ref('')
  const value2 = ref('')
  const value3 = ref('')
</script>