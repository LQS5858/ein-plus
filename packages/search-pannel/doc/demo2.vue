<template>
  <ein-search-pannel :model="searchModel">
    <ein-search-field label="姓名"
                      type="text"></ein-search-field>
    <ein-search-field label="工号"
                      type="number"
                      v-model="searchModel.version"></ein-search-field>
    <ein-search-field type="text"></ein-search-field>
    <ein-search-field type="select"></ein-search-field>
    <ein-search-field>
      <el-button type="success">搜索</el-button>
    </ein-search-field>
  </ein-search-pannel>
</template>

<script setup>
import { ref, reactive } from 'vue'
let value = ref(null)
let searchModel = reactive({ version: '' })
</script>

<style>
</style>