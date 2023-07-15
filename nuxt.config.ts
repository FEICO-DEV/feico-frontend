// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtModule } from 'nuxt'

export default defineNuxtConfig({
  modules: ['nuxt-swiper'],
  css: [
    '@/assets/css/main.scss',
  ],
  app: {
    head: {
        link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  },
  
  
})
