<script setup lang="ts">
const isVisible = ref(false)

const skills = [
  { name: 'Vue.js', level: 95, icon: '💚', color: 'from-green-500 to-emerald-500' },
  { name: 'Nuxt', level: 90, icon: '💎', color: 'from-green-400 to-teal-500' },
  { name: 'TypeScript', level: 85, icon: '🔷', color: 'from-blue-500 to-blue-600' },
  { name: 'JavaScript', level: 95, icon: '⚡', color: 'from-yellow-400 to-orange-500' },
  { name: 'Tailwind CSS', level: 90, icon: '🎨', color: 'from-cyan-400 to-blue-500' },
  { name: 'AWS', level: 80, icon: '☁️', color: 'from-orange-400 to-yellow-500' },
  { name: 'Node.js', level: 85, icon: '🟢', color: 'from-green-500 to-lime-500' },
  { name: 'Python', level: 75, icon: '🐍', color: 'from-blue-400 to-yellow-400' }
]

const tools = [
  { name: 'Git', icon: '📦' },
  { name: 'Docker', icon: '🐳' },
  { name: 'VS Code', icon: '💻' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Linux', icon: '🐧' },
  { name: 'CI/CD', icon: '🔄' }
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    { threshold: 0.2 }
  )

  const section = document.querySelector('#skills')
  if (section) observer.observe(section)
})
</script>

<template>
  <section id="skills" class="py-20 md:py-32 bg-slate-50 dark:bg-slate-800/50">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 
          class="text-3xl md:text-4xl font-bold mb-4 transition-all duration-700"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
        >
          <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Habilidades
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
          Tecnologías y herramientas que domino para crear soluciones excepcionales
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="grid md:grid-cols-2 gap-6 mb-16">
        <div 
          v-for="(skill, index) in skills" 
          :key="skill.name"
          class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
          :style="{ transitionDelay: `${400 + index * 100}ms` }"
        >
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-3">
              <span class="text-2xl">{{ skill.icon }}</span>
              <span class="font-semibold text-slate-800 dark:text-slate-100">{{ skill.name }}</span>
            </div>
            <span class="text-sm font-medium text-slate-500 dark:text-slate-400">{{ skill.level }}%</span>
          </div>
          
          <!-- Progress Bar -->
          <div class="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div 
              class="h-full rounded-full bg-gradient-to-r transition-all duration-1000 ease-out"
              :class="[skill.color, isVisible ? '' : 'w-0']"
              :style="{ width: isVisible ? `${skill.level}%` : '0%', transitionDelay: `${600 + index * 100}ms` }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Tools Section -->
      <div 
        class="text-center transition-all duration-700"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
        style="transition-delay: 1200ms"
      >
        <h3 class="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-6">
          Herramientas que uso
        </h3>
        <div class="flex flex-wrap justify-center gap-4">
          <div 
            v-for="tool in tools" 
            :key="tool.name"
            class="px-5 py-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
          >
            <span>{{ tool.icon }}</span>
            <span class="font-medium text-slate-700 dark:text-slate-200">{{ tool.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
