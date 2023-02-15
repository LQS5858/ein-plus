import EinButton from './index.vue'
EinButton.install = app => {
  app.component(EinButton.name, EinButton)
}
export default EinButton