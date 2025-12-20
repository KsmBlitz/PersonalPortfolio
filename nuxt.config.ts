export default defineNuxtConfig({
  modules: ['@nuxtjs/sanity', '@nuxtjs/tailwindcss'],
  sanity: {
    projectId: '2il0jzpa', 
    dataset: 'production',
    apiVersion: '2024-03-20',
    useCdn: true,
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})