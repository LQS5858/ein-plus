import EinTabs from './index.vue';
import EinTabPane from './pane.vue';
EinTabs.install = app => {
  app.component(EinTabs.name, EinTabs)
  app.component(EinTabPane.name, EinTabPane)
}
export default EinTabs