<template>
  <ein-search-pannel>
    <ein-search-field label="姓名"
                      type="text"></ein-search-field>
    <ein-search-field label="工号"
                      type="number"></ein-search-field>
    <ein-search-field type="text"></ein-search-field>
    <ein-search-field type="select"></ein-search-field>
  </ein-search-pannel>
</template>

<script setup>
import { ref } from 'vue'
let value = ref(null)
</script>

<style>
</style>