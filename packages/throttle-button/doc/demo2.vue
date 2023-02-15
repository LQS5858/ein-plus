<template>
  <EinThrottleButton @confirm="confirmHandler"
                     :loading="true"
                     :delay="500"></EinThrottleButton>
</template>

<script setup>
const confirmHandler = () => {}
</script>

<style scoped lang="scss">
</style>