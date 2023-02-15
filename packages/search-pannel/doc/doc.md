<script setup>
  import demo1 from './demo1'
    import demo2 from './demo2'

import preview from '@/components/preview.vue'
</script>

# 基本使用

### 搜索面板需要配合 EinSearchField 使用定义搜索部件

<br />

<div class="componetnsBox">
<demo1></demo1>
</div>
<preview compName="search-pannel" demoName="demo1"/>

<br/>

# 插槽自定义查询部件

### 通过插槽自定义查询部件

<br />

<div class="componetnsBox">
<demo2></demo2>
</div>
<preview compName="search-pannel" demoName="demo2"/>

<br/>

# EinSearchPannel Attributes

| 参数   | 类型          | 说明                                         | 可选值 | 默认值 |
| :----- | :------------ | :------------------------------------------- | :----- | :----- |
| model  | Object        | 结合插槽组件与插槽组件数据绑定               | --     | 3      |
| divide | Number,String | 每一行展示部件数量                           | --     | 3      |
| model  | Object        | 与插槽部件数据双向绑定，获取到插槽部件的数据 | --     | --     |

<br/>

# EinSearchField Attributes

| 参数        | 类型                 | 说明                                   | 可选值             | 默认值 |
| :---------- | :------------------- | :------------------------------------- | :----------------- | :----- |
| v-model     | String,Number,Object | 父子组件双向数据绑定                   | --                 | --     |
| label       | String               | 查询部件显示 label 文案                | --                 | --     |
| type        | String               | 查询部件类型                           | text,number,select | text   |
| options     | Array                | 当 type 为 select 时，options 必须提供 | --                 | --     |
| placeholder | String               | 输入框默认占位提示                     | --                 | --     |
