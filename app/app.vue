<script setup lang="ts">
const query = groq`*[_type == "project"]{
  title,
  "imageUrl": image.asset->url,
  description,
  technologies,
  link
}`
const { data: projects } = await useSanityQuery(query)
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300">
    
    <nav class="p-6 border-b border-slate-200 dark:border-slate-800">
      <div class="max-w-6xl mx-auto flex justify-between items-center">
        <h1 class="text-xl font-bold tracking-tighter">Mi Portafolio</h1>
        <div class="text-sm font-medium text-slate-500">v1.0</div>
      </div>
    </nav>

    <header class="max-w-6xl mx-auto px-6 py-20 text-center md:text-left">
      <h2 class="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
        Desarrollador Web
      </h2>
      <p class="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-8">
        Especializado en crear experiencias digitales escalables con Nuxt, Vue y AWS.
      </p>
    </header>

    <main class="max-w-6xl mx-auto px-6 pb-20">
      <h3 class="text-2xl font-bold mb-8 flex items-center gap-2">
        <span class="w-2 h-8 bg-indigo-500 rounded-full"></span>
        Proyectos Destacados
      </h3>

      <div v-if="projects" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.title" 
             class="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 dark:border-slate-700">
          
          <div class="h-48 overflow-hidden bg-slate-200">
            <img v-if="project.imageUrl" :src="project.imageUrl" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div v-else class="w-full h-full flex items-center justify-center text-slate-400">Sin imagen</div>
          </div>

          <div class="p-6">
            <h4 class="text-xl font-bold mb-2 group-hover:text-indigo-500 transition-colors">{{ project.title }}</h4>
            <p v-if="project.description" class="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
              {{ project.description }}
            </p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tech in project.technologies" :key="tech" 
                    class="px-2 py-1 text-xs font-semibold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-md">
                {{ tech }}
              </span>
            </div>

            <a v-if="project.link" :href="project.link" target="_blank" class="text-sm font-medium text-indigo-500 hover:text-indigo-600 flex items-center gap-1">
              Ver Proyecto →
            </a>
          </div>
        </div>
      </div>
      
      <div v-else class="text-center py-20 text-slate-500">Cargando proyectos...</div>
    </main>
  </div>
</template>