import { defineStore } from 'pinia'
export const useMainStore = defineStore('main', {
  state: () => {
    return {
      lang: 'CN',
      curSize: 'pc'
    }
  },
  actions: {
    setLang (lang) {
      this.lang = lang
    },
    changeSize (size) {
      this.curSize = size
    }
  },
  getters: {
    getLang: (state) => {
      return state.lang
    }
  }

})