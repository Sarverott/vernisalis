// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@nuxtjs/i18n', '@nuxtjs/sitemap'],
  $production: {
    /*routeRules: {
      '/**': { isr: true }
    }*/
  },
  $development: {
    //
  },
  $env: {
    staging: {
      // 
    }
  },
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  routeRules: {
    '/': { prerender: true }
  }
})
//npm install @nuxtjs/i18n@latest -D --ignore-scripts
