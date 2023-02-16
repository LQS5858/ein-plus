<template>
  <ein-search-pannel :model="searchModel"
                     :divide="3">
    <ein-search-field label="姓名"
                      v-model="searchModel.name"
                      type="text"></ein-search-field>
    <ein-search-field label="工号"
                      type="number"
                      v-model="searchModel.version"></ein-search-field>
    <ein-search-field type="text"
                      v-model="searchModel.dept"
                      label="部门"></ein-search-field>
    <ein-search-field type="select"
                      label="岗位"
                      v-model="searchModel.work"></ein-search-field>
    <ein-search-field>
      <el-button type="success">搜索</el-button>
    </ein-search-field>
  </ein-search-pannel>
</template>

<script setup>
import { ref, reactive } from 'vue'
let value = ref(null)
let searchModel = reactive({ version: '', name: '', dept: '', work: '' })
</script>

<style>
</style>