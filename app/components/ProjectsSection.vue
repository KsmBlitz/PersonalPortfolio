<script setup lang="ts">
interface Project {
  title: string;
  imageUrl?: string;
  description?: string;
  technologies?: string[];
  link?: string;
}

defineProps<{
  projects: Project[] | null
}>()

const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    { threshold: 0.1 }
  )

  const section = document.querySelector('#projects')
  if (section) observer.observe(section)
})
</script>

<template>
  <section id="projects" class="py-20 md:py-32 bg-white dark:bg-slate-900">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 
          class="text-3xl md:text-4xl font-bold mb-4 transition-all duration-700"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
        >
          <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Proyectos Destacados
          </span>
        </h2>
        <div 
          class="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full transition-all duration-700 delay-200"
          :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'"
        ></div>
        <p 
          class="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-all duration-700 delay-300"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
        >
          Una selección de mis trabajos más recientes y significativos
        </p>
      </div>

      <!-- Projects Grid -->
      <div v-if="projects && projects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="(project, index) in projects" 
          :key="project.title"
          class="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
          :style="{ transitionDelay: `${400 + index * 150}ms` }"
        >
          <!-- Image -->
          <div class="relative h-52 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800">
            <img 
              v-if="project.imageUrl" 
              :src="project.imageUrl" 
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div 
              v-else 
              class="w-full h-full flex items-center justify-center"
            >
              <span class="text-6xl opacity-50">📁</span>
            </div>
            
            <!-- Overlay on hover -->
            <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <a 
                v-if="project.link" 
                :href="project.link" 
                target="_blank"
                rel="noopener noreferrer"
                class="px-6 py-2 bg-white text-indigo-600 font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-indigo-50"
              >
                Ver Proyecto →
              </a>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {{ project.title }}
            </h3>
            
            <p v-if="project.description" class="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
              {{ project.description }}
            </p>

            <!-- Technologies -->
            <div v-if="project.technologies && project.technologies.length > 0" class="flex flex-wrap gap-2">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="px-3 py-1 text-xs font-medium bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-600 dark:text-indigo-300 rounded-full"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </article>
      </div>

      <!-- Loading State -->
      <div v-else-if="!projects" class="text-center py-20">
        <div class="inline-flex items-center gap-3 text-slate-500">
          <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
          </svg>
          <span>Cargando proyectos...</span>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-20">
        <span class="text-6xl mb-4 block">📭</span>
        <p class="text-slate-500">No hay proyectos disponibles</p>
      </div>
    </div>
  </section>
</template>
