<template>
  <ein-search-pannel model="searchModel"
                     :divide="3">
    <ein-search-field label="姓名"
                      v-model="searchModel.name"
                      type="text"></ein-search-field>
    <ein-search-field label="工号"
                      v-model="searchModel.version"
                      type="number"></ein-search-field>
    <ein-search-field type="text"
                      v-model="searchModel.dept"
                      label="部门"></ein-search-field>
    <ein-search-field type="select"
                      v-model="searchModel.work"
                      label="岗位"></ein-search-field>
  </ein-search-pannel>
</template>

<script setup>
import { ref, reactive } from 'vue'
let value = ref(null)
let searchModel = ref({ name: '', version: '', dept: '', work: '' })
</script>

<style>
</style>