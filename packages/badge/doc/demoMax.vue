<template>
  <ein-space :size="[0, 60]">
    <ein-badge :value="11"
               :max="10">
      <ein-button>设置最大值10</ein-button>
    </ein-badge>
    <ein-badge :value="100"
               :max='99'>
      <ein-button>设置最大值99</ein-button>
    </ein-badge>
  </ein-space>
</template>