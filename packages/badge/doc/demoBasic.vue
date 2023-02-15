<template>
  <ein-space :size="[0, 60]">
    <ein-badge :value="99"
               type="primary">
      <ein-button>默认</ein-button>
    </ein-badge>
    <ein-badge :value="100"
               type="success">
      <ein-button>成功</ein-button>
    </ein-badge>
    <ein-badge :value="10"
               type="warning">
      <ein-button>警告</ein-button>
    </ein-badge>
    <ein-badge :value="3"
               type="danger">
      <ein-button>危险</ein-button>
    </ein-badge>
    <ein-badge :value="3"
               type="info">
      <ein-button>危险</ein-button>
    </ein-badge>
    <ein-badge :value="50"
               isDot>
      <ein-button>小红点</ein-button>
    </ein-badge>
  </ein-space>
</template>