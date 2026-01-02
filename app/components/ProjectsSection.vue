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

// Mapeo de tecnologías a sus URLs oficiales
const techUrls: Record<string, string> = {
  // Frontend
  'React': 'https://react.dev',
  'Vue': 'https://vuejs.org',
  'Vue.js': 'https://vuejs.org',
  'Nuxt': 'https://nuxt.com',
  'Nuxt.js': 'https://nuxt.com',
  'Next.js': 'https://nextjs.org',
  'Angular': 'https://angular.io',
  'Svelte': 'https://svelte.dev',
  'Tailwind': 'https://tailwindcss.com',
  'TailwindCSS': 'https://tailwindcss.com',
  'Bootstrap': 'https://getbootstrap.com',
  'Sass': 'https://sass-lang.com',
  'TypeScript': 'https://www.typescriptlang.org',
  'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  
  // Backend
  'Node.js': 'https://nodejs.org',
  'Node': 'https://nodejs.org',
  'Express': 'https://expressjs.com',
  'NestJS': 'https://nestjs.com',
  'FastAPI': 'https://fastapi.tiangolo.com',
  'Django': 'https://www.djangoproject.com',
  'Flask': 'https://flask.palletsprojects.com',
  'Laravel': 'https://laravel.com',
  'Spring': 'https://spring.io',
  
  // Databases
  'MongoDB': 'https://www.mongodb.com',
  'PostgreSQL': 'https://www.postgresql.org',
  'MySQL': 'https://www.mysql.com',
  'Redis': 'https://redis.io',
  'Firebase': 'https://firebase.google.com',
  'Supabase': 'https://supabase.com',
  
  // Cloud & DevOps
  'AWS': 'https://aws.amazon.com',
  'Azure': 'https://azure.microsoft.com',
  'GCP': 'https://cloud.google.com',
  'Docker': 'https://www.docker.com',
  'Kubernetes': 'https://kubernetes.io',
  'Vercel': 'https://vercel.com',
  'Netlify': 'https://www.netlify.com',
  
  // Tools
  'Git': 'https://git-scm.com',
  'GraphQL': 'https://graphql.org',
  'REST': 'https://restfulapi.net',
  'Prisma': 'https://www.prisma.io',
  'Sanity': 'https://www.sanity.io',
  'Strapi': 'https://strapi.io',
  
  // Mobile
  'React Native': 'https://reactnative.dev',
  'Flutter': 'https://flutter.dev',
  
  // Languages
  'Python': 'https://www.python.org',
  'Java': 'https://www.java.com',
  'Go': 'https://go.dev',
  'Rust': 'https://www.rust-lang.org',
  'C#': 'https://docs.microsoft.com/en-us/dotnet/csharp',
  'PHP': 'https://www.php.net'
}

const getTechUrl = (tech: string): string | undefined => {
  return techUrls[tech] || techUrls[tech.toLowerCase()] || undefined
}

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
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 
          class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-all duration-500"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          Proyectos
        </h2>
        <p 
          class="text-slate-600 dark:text-slate-400 max-w-xl mx-auto transition-all duration-500 delay-100"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          Algunos proyectos en los que he trabajado
        </p>
      </div>

      <!-- Projects Grid -->
      <div v-if="projects && projects.length > 0" class="grid md:grid-cols-2 gap-8">
        <article 
          v-for="(project, index) in projects" 
          :key="project.title"
          class="project-card group bg-slate-50 dark:bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-500"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          :style="{ transitionDelay: `${150 + index * 100}ms` }"
        >
          <!-- Image -->
          <div class="aspect-video bg-slate-100 dark:bg-slate-800 overflow-hidden">
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
          <div class="p-6">
            <h3 class="text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {{ project.title }}
            </h3>
            
            <p v-if="project.description" class="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed text-sm">
              {{ project.description }}
            </p>

            <!-- Technologies -->
            <div v-if="project.technologies && project.technologies.length > 0" class="flex flex-wrap gap-2 mb-5">
              <a 
                v-for="tech in project.technologies" 
                :key="tech"
                :href="getTechUrl(tech)"
                :target="getTechUrl(tech) ? '_blank' : undefined"
                :rel="getTechUrl(tech) ? 'noopener noreferrer' : undefined"
                :class="getTechUrl(tech) ? 'hover:bg-slate-300 dark:hover:bg-slate-600 cursor-pointer' : 'cursor-default'"
                class="text-xs px-2.5 py-1 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full transition-colors"
              >
                {{ tech }}
              </a>
            </div>

            <!-- Link -->
            <a 
              v-if="project.link" 
              :href="project.link" 
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Ver proyecto
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </article>
      </div>

      <!-- Loading State -->
      <div v-else-if="!projects" class="text-center py-20">
        <div class="inline-flex flex-col items-center gap-4">
          <div class="relative w-16 h-16">
            <div class="absolute inset-0 border-4 border-slate-200 dark:border-slate-700 rounded-full"></div>
            <div class="absolute inset-0 border-4 border-slate-600 dark:border-slate-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p class="text-slate-500 dark:text-slate-400 font-medium">Cargando proyectos...</p>
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
<style scoped>
/* 3D Hover Effect for Project Cards */
.project-card {
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.project-card:hover {
  transform: translateY(-8px) rotateX(2deg) rotateY(2deg);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
}

.dark .project-card:hover {
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
}

/* Add subtle gradient overlay on hover */
.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
  border-radius: inherit;
  z-index: 1;
}

.project-card:hover::before {
  opacity: 1;
}

.dark .project-card::before {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
}
</style>