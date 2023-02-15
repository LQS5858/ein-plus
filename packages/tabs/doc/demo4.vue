<!-- html -->
<template>
  <ein-tabs>
    <ein-tab-pane :label="label"
                  name="one">
      选项卡一
    </ein-tab-pane>
    <ein-tab-pane label="选项卡二"
                  name="tow"> 选项卡二 </ein-tab-pane>
    <ein-tab-pane label="选项卡三"
                  name="three"> 选项卡三 </ein-tab-pane>
  </ein-tabs>
</template>


<!-- js -->
<script setup>
import { h } from 'vue'
const label = h('span', {}, [
  h('i', { class: 'm-icon-folder-close' }),
  '选项卡一',
])
</script>