<template>
  <ein-space :size="[0, 60]">
    <ein-badge value="一张图片">
      <img src="/src/assets/logo.png"
           alt="">
    </ein-badge>
    <ein-badge value="button按钮">
      <ein-button type="primary">button按钮</ein-button>
    </ein-badge>
  </ein-space>
</template>

<style scoped>
img {
  width: 100px;
}
</style>