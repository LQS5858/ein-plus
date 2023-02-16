import size from './function/size'
//导入组件
import EinButton from "./button/index";
import EinTable from "./table/index";
import EinSearchField from './search-field'
import $einyun from "./function/index";
import EinBacktop from "./backtop/index";
import EinTabs from "./tabs/index";
import EinSpace from "./Space/index";
import EinSearch from './search-pannel'
import EinThrottleButton from './throttle-button'
import EinInput from './input'

import EinBadge from './badge/index'
//存在所有组件
const components = [
  EinButton,
  EinTable,
  EinBacktop,
  EinThrottleButton,
  EinSearchField,
  EinInput,
  EinSearch,
  EinBadge,
  EinTabs,
  EinSpace
];
const install = (app) => {
  components.forEach((i) => {
    app.use(i)
  })
  app.config.globalProperties.$einyun = $einyun
  app.config.globalProperties.$size = size
}
const einyunUi = {
  version: '0.4.1',
  install
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  // 导出的对象必须具有 install，才能被 app.use() 方法安装
  install,
  // 以下是具体的组件列表
  EinButton,
  EinTable,
  EinInput,
  EinBacktop,
  EinThrottleButton,
  EinSearchField,
  EinSearch,
  EinBadge,
  EinTabs,
  EinSpace
}
export default einyunUi
