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
  },

  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_API_BASE_URL || '',
      publicKey: process.env.NUXT_MARVEL_API_PUBLIC_KEY || '',
      privateKey: process.env.NUXT_MARVEL_API_PRIVATE_KEY || ''
    }
  }
})
