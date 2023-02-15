import EinTable from './index.vue';
EinTable.install = app => {
  app.component(EinTable.name, EinTable)
}
export default EinTable