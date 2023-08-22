export default defineNuxtConfig({
  css: ['@/assets/css/app.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/css/_variables.scss"'
        }
      }
    }
  },

  modules: [
    // pinia plugin
    '@pinia/nuxt',
    ['@nuxtjs/eslint-module', { /* module options */ }],
    '@nuxtjs/tailwindcss'
  ],

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate']
  },

  imports: {
    dirs: ['./stores']
  }
})
