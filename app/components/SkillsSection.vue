<script setup lang="ts">
const isVisible = ref(false)

// Lenguajes de programación
const languages = [
  { name: 'Python', color: '#3776ab', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'TypeScript', color: '#3178c6', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'SQL', color: '#4169e1', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
  { name: 'Dart', color: '#0175c2', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
  { name: 'Arduino', color: '#00979d', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
]

// Tecnologías y herramientas
const technologies = [
  { name: 'Vue.js', color: '#42b883', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'FastAPI', color: '#009688', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'MongoDB', color: '#47a248', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Firebase', color: '#ffca28', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'PostgreSQL', color: '#4169e1', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'AWS', color: '#ff9900', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Git', color: '#f05032', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Docker', color: '#2496ed', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Linux/WSL2', color: '#fcc624', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'FlutterFlow', color: '#02569b', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Raspberry Pi', color: '#a22846', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg' },
  { name: 'Jira', color: '#0052cc', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
  { name: 'Bitbucket', color: '#0052cc', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg' },
]

// Habilidades blandas
const softSkills = [
  { name: 'Trabajo en equipo', icon: '👥' },
  { name: 'Resolución de problemas', icon: '🧩' },
  { name: 'Mantenimiento TI', icon: '🔧' },
  { name: 'Redes', icon: '🌐' },
  { name: 'Responsabilidad', icon: '✓' },
  { name: 'Manejo del tiempo', icon: '⏱' },
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
  <section id="skills" class="py-24 md:py-32 bg-slate-50 dark:bg-slate-800/50">
    <div class="max-w-5xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 
          class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-all duration-500"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          Stack Técnico
        </h2>
        <p 
          class="text-slate-600 dark:text-slate-400 max-w-xl mx-auto transition-all duration-500 delay-100"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          Tecnologías, herramientas y habilidades que utilizo
        </p>
      </div>

      <!-- Languages -->
      <div class="mb-10">
        <h3 
          class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4 transition-all duration-500 delay-150"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          Lenguajes
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          <div 
            v-for="(skill, index) in languages" 
            :key="skill.name"
            class="group flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md transition-all duration-300 cursor-default"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
            :style="{ transitionDelay: `${200 + index * 30}ms` }"
          >
            <div 
              class="w-9 h-9 rounded-lg flex items-center justify-center p-1.5 flex-shrink-0"
              :style="{ backgroundColor: skill.color + '15' }"
            >
              <img 
                :src="skill.logo" 
                :alt="skill.name"
                class="w-full h-full object-contain"
              />
            </div>
            <span class="text-sm font-medium text-slate-700 dark:text-slate-300 truncate">
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>

      <!-- Technologies & Tools -->
      <div class="mb-10">
        <h3 
          class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4 transition-all duration-500 delay-200"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          Tecnologías y Herramientas
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          <div 
            v-for="(skill, index) in technologies" 
            :key="skill.name"
            class="group flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md transition-all duration-300 cursor-default"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
            :style="{ transitionDelay: `${250 + index * 30}ms` }"
          >
            <div 
              class="w-9 h-9 rounded-lg flex items-center justify-center p-1.5 flex-shrink-0"
              :style="{ backgroundColor: skill.color + '15' }"
            >
              <img 
                :src="skill.logo" 
                :alt="skill.name"
                class="w-full h-full object-contain"
              />
            </div>
            <span class="text-sm font-medium text-slate-700 dark:text-slate-300 truncate">
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>

      <!-- Soft Skills -->
      <div>
        <h3 
          class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4 transition-all duration-500 delay-300"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          Habilidades
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          <div 
            v-for="(skill, index) in softSkills" 
            :key="skill.name"
            class="group flex flex-col items-center gap-2 px-4 py-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md transition-all duration-300 cursor-default text-center"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
            :style="{ transitionDelay: `${400 + index * 30}ms` }"
          >
            <span class="text-2xl">{{ skill.icon }}</span>
            <span class="text-xs font-medium text-slate-600 dark:text-slate-400 leading-tight">
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
