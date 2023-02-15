<template>
  <EinThrottleButton @confirm="confirmHandler"
                     :loading="false"
                     prefixIcon=""
                     :delay="500">
    <template v-slot:preffixIcon>
      <el-icon class="el-icon--right">
        <Upload />
      </el-icon>
    </template>
  </EinThrottleButton>
</template>

<script setup>
const confirmHandler = () => {}
</script>

<style scoped lang="scss">
</style>