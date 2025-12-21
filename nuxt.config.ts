// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],

  // 1. Configuración de Tailwind INCRUSTADA (Infalible)
  tailwindcss: {
    config: {
      darkMode: 'class', // <--- Esto obliga a usar el botón, no el sistema
      content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue'
      ]
    }
  },

  // 2. Configuración del Color Mode
  colorMode: {
    classSuffix: '',
    preference: 'light', // Forzamos que empiece en claro para sincronizar
    fallback: 'light',
    storageKey: 'nuxt-color-mode'
  },

  // 3. Configuración de Sanity (variables de entorno en runtime)
  runtimeConfig: {
    public: {
      sanityProjectId: '2il0jzpa',
      sanityDataset: 'production',
      sanityApiVersion: '2024-03-20'
    }
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})