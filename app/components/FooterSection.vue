<script setup lang="ts">
interface Profile {
  name: string;
}

const props = defineProps<{
  profile?: Profile | null
}>()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="py-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <!-- Logo -->
        <a 
          href="#hero"
          class="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          &lt;VE /&gt;
        </a>

        <!-- Copyright -->
        <p class="text-slate-500 dark:text-slate-400 text-sm text-center">
          © {{ new Date().getFullYear() }} {{ profile?.name || 'Vicente Estay' }}. Todos los derechos reservados.
        </p>

        <!-- Back to top -->
        <button 
          @click="scrollToTop"
          class="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 text-slate-500 hover:text-indigo-600 transition-colors"
          aria-label="Volver arriba"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
          </svg>
        </button>
      </div>
    </div>
  </footer>
</template>
