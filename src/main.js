import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import einUI from "../packages/index";
import hljs from "highlight.js";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import directives from '../packages/directives/common'
import { optionalChaining } from '@/utils/common'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// import "highlight.js/styles/color-brewer.css";

import router from "@/router";
// import einUI from '../dist/einyun-ui.es'
// import '../dist/style.css'
const app = createApp(App);
app.use(einUI);
app.use(router);
app.use(createPinia());
app.use(ElementPlus)
Object.keys(directives).forEach(key => {
  app.directive(key, directives?.[key])
})
app.config.globalProperties.$$ = optionalChaining
hljs.configure({
  ignoreUnescapedHTML: true,
  languages: [
    "javascript",
    "css",
    "python",
    "html",
    "bash",
    "java",
    "sql",
    "json",
    "http",
    "go",
    "c++",
    "c#",
    "",
  ],
});
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.directive("highlight", function (el) {
  const blocks = el.querySelectorAll("pre code");
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
});
app.mount("#app");
