<template>
  <router-view :name="$$(mainStore,'curSize')"></router-view>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue'
import {
  listenScreenSize,
  excuteSize,
  removeListen,
} from '@/utils/setScreenSize'
import { useMainStore } from '@/store'
import headerBlockVue from './components/header-block.vue'

const mainStore = useMainStore()
console.log('size', mainStore, mainStore.curSize)
onMounted(() => {
  listenScreenSize()
})
onUnmounted(() => {
  removeListen()
})
</script>
<style lang="scss">
@import './assets/styles/style.scss';
#app {
  overflow: hidden;
}
</style>
