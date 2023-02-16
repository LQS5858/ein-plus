<script setup>
  import Demo1 from './demo1.vue'
   


import preview from '@/components/preview.vue'
</script>

# 节流按钮

### 传入 delay 节流使用,支持 Element-plus 所有按钮属性

# 基本使用

### 节流 500ms

<br/>

<div class="componetnsBox">
<Demo1></Demo1>
</div>
<preview compName="input" demoName="demo1"></preview>

# 开启 loading

### 传入参数 loading

<br/>

<div class="componetnsBox">
<Demo2></Demo2>
</div>
<preview compName="throttle-button" demoName="demo2"></preview>
<br/>

# 前置图标

#### 传入参数 prefixIcon

<br/>
<div class="componetnsBox">
<Demo3></Demo3>
</div>
<preview compName="throttle-button" demoName="demo3"></preview>

<br/>

# 前置图标插槽方式

### 通过插槽方式自定义前置图标

<br/>
<div class="componetnsBox">
<Demo4></Demo4>
</div>
<preview compName="throttle-button" demoName="demo4"></preview>
<br/>

# Attributes

| 参数       | 类型          | 说明                         | 可选值          | 默认值  |
| :--------- | :------------ | :--------------------------- | :-------------- | :------ |
| type       | String        | 按钮类型，支持饿了么所有类型 | primary,success | primary |
| text       | String        | 按钮文案                     | --              | Button  |
| loading    | Boolean       | 开启 loading                 | true,false      | false   |
| prefixIcon | String        | 前置图标                     | --              | --      |
| delay      | Number,String | 按钮节流时间                 | 500             | --      |

<br/>

# Events

| 事件名  | 说明         | 回调参数 |
| :------ | :----------- | :------- |
| confirm | 点击按钮回调 | --       |

<br/>

# Slots

| 插槽名     | 说明                         |
| :--------- | :--------------------------- |
| prefixIcon | 前置图标插槽，自定义前置图标 |
| suffixIcon | 后置图标插槽，自定义后置图标 |

<br/>
