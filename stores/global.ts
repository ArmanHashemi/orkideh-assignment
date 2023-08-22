import { acceptHMRUpdate, defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    n: 0
  }),

  getters: {

  },

  actions: {
    inc () {
      this.n++
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
}
