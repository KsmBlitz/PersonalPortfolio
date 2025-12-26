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
        <span class="text-sm font-medium text-slate-900 dark:text-white">
          VE
        </span>

        <!-- Copyright -->
        <p class="text-slate-500 dark:text-slate-400 text-sm text-center">
          © {{ new Date().getFullYear() }} {{ profile?.name || 'Vicente Estay' }}
        </p>

        <!-- Back to top -->
        <button 
          @click="scrollToTop"
          class="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          aria-label="Volver arriba"
        >
          Inicio ↑
        </button>
      </div>
    </div>
  </footer>
</template>
