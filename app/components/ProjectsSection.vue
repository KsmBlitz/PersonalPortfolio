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
  <section id="projects" class="py-24 md:py-32 bg-white dark:bg-slate-900">
    <div class="max-w-5xl mx-auto px-6">
      <!-- Section Header -->
      <div class="mb-16">
        <p 
          class="text-sm font-mono text-slate-500 dark:text-slate-400 mb-2 tracking-wider uppercase transition-all duration-500"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          Portfolio
        </p>
        <h2 
          class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-all duration-500 delay-100"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          Proyectos seleccionados
        </h2>
      </div>

      <!-- Projects List -->
      <div v-if="projects && projects.length > 0" class="space-y-16">
        <article 
          v-for="(project, index) in projects" 
          :key="project.title"
          class="group grid md:grid-cols-2 gap-8 items-center transition-all duration-500"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          :style="{ transitionDelay: `${150 + index * 100}ms` }"
        >
          <!-- Image -->
          <div class="aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
            <img 
              v-if="project.imageUrl" 
              :src="project.imageUrl" 
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div 
              v-else 
              class="w-full h-full flex items-center justify-center text-slate-300 dark:text-slate-600"
            >
              <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          <!-- Content -->
          <div>
            <h3 class="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              {{ project.title }}
            </h3>
            
            <p v-if="project.description" class="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Technologies -->
            <div v-if="project.technologies && project.technologies.length > 0" class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="text-xs text-slate-500 dark:text-slate-400"
              >
                {{ tech }}{{ project.technologies?.indexOf(tech) !== (project.technologies?.length || 0) - 1 ? ' ·' : '' }}
              </span>
            </div>

            <!-- Link -->
            <a 
              v-if="project.link" 
              :href="project.link" 
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white hover:opacity-70 transition-opacity"
            >
              Ver proyecto
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </article>
      </div>

      <!-- Loading State -->
      <div v-else-if="!projects" class="text-center py-20">
        <p class="text-slate-500 dark:text-slate-400">Cargando proyectos...</p>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-20">
        <span class="text-6xl mb-4 block">📭</span>
        <p class="text-slate-500">No hay proyectos disponibles</p>
      </div>
    </div>
  </section>
</template>
