<script setup lang="ts">
const isVisible = ref(false)

// Mapeo de URLs oficiales
const techUrls: Record<string, string> = {
  // Lenguajes
  'Python': 'https://www.python.org',
  'TypeScript': 'https://www.typescriptlang.org',
  'SQL': 'https://www.iso.org/standard/63555.html',
  'Dart': 'https://dart.dev',
  'Arduino': 'https://www.arduino.cc',
  
  // Frameworks y Tecnologías
  'Vue.js': 'https://vuejs.org',
  'FastAPI': 'https://fastapi.tiangolo.com',
  'MongoDB': 'https://www.mongodb.com',
  'Firebase': 'https://firebase.google.com',
  'PostgreSQL': 'https://www.postgresql.org',
  'AWS': 'https://aws.amazon.com',
  'Git': 'https://git-scm.com',
  'Docker': 'https://www.docker.com',
  'Linux/WSL2': 'https://learn.microsoft.com/en-us/windows/wsl',
  'FlutterFlow': 'https://flutterflow.io',
  'Raspberry Pi': 'https://www.raspberrypi.com',
  'Jira': 'https://www.atlassian.com/software/jira',
  'Bitbucket': 'https://bitbucket.org'
}

// Lenguajes de programación
const languages = [
  { name: 'Python', color: '#3776ab', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', url: techUrls['Python'] },
  { name: 'TypeScript', color: '#3178c6', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', url: techUrls['TypeScript'] },
  { name: 'SQL', color: '#4169e1', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg', url: techUrls['SQL'] },
  { name: 'Dart', color: '#0175c2', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', url: techUrls['Dart'] },
  { name: 'Arduino', color: '#00979d', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg', url: techUrls['Arduino'] },
]

// Tecnologías y herramientas
const technologies = [
  { name: 'Vue.js', color: '#42b883', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', url: techUrls['Vue.js'] },
  { name: 'FastAPI', color: '#009688', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', url: techUrls['FastAPI'] },
  { name: 'MongoDB', color: '#47a248', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', url: techUrls['MongoDB'] },
  { name: 'Firebase', color: '#ffca28', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', url: techUrls['Firebase'] },
  { name: 'PostgreSQL', color: '#4169e1', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', url: techUrls['PostgreSQL'] },
  { name: 'AWS', color: '#ff9900', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', url: techUrls['AWS'] },
  { name: 'Git', color: '#f05032', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', url: techUrls['Git'] },
  { name: 'Docker', color: '#2496ed', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', url: techUrls['Docker'] },
  { name: 'Linux/WSL2', color: '#fcc624', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', url: techUrls['Linux/WSL2'] },
  { name: 'FlutterFlow', color: '#02569b', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', url: techUrls['FlutterFlow'] },
  { name: 'Raspberry Pi', color: '#a22846', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg', url: techUrls['Raspberry Pi'] },
  { name: 'Jira', color: '#0052cc', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg', url: techUrls['Jira'] },
  { name: 'Bitbucket', color: '#0052cc', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg', url: techUrls['Bitbucket'] },
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
  <section id="skills" class="py-24 md:py-32 bg-slate-50 dark:bg-slate-800/50 relative overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Decorative grid -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <!-- Gradient orbs -->
      <div class="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-orb-float"></div>
      <div class="absolute bottom-10 right-10 w-[600px] h-[600px] bg-slate-300/30 dark:bg-slate-600/10 rounded-full blur-3xl animate-orb-float animation-delay-2000"></div>
      <div class="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-indigo-200/15 dark:bg-indigo-500/5 rounded-full blur-3xl animate-orb-pulse"></div>
      
      <!-- Floating shapes -->
      <div class="absolute top-1/4 right-1/5 w-6 h-6 border-2 border-slate-300/40 dark:border-slate-600/40 rotate-45 animate-float-slow"></div>
      <div class="absolute bottom-1/3 left-1/6 w-8 h-8 border-2 border-slate-300/40 dark:border-slate-600/40 rounded-full animate-float-slow animation-delay-1000"></div>
      <div class="absolute top-2/3 right-1/4 w-4 h-4 bg-slate-400/20 dark:bg-slate-500/20 rotate-45 animate-float-slow animation-delay-3000"></div>
    </div>
    
    <div class="max-w-5xl mx-auto px-6 relative z-10">
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
          <a 
            v-for="(skill, index) in languages" 
            :key="skill.name"
            :href="skill.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md transition-all duration-300 cursor-pointer"
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
          </a>
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
          <a 
            v-for="(skill, index) in technologies" 
            :key="skill.name"
            :href="skill.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md transition-all duration-300 cursor-pointer"
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
          </a>
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
<style scoped>
/* Floating animations */
@keyframes orb-float {
  0%, 100% {
    transform: translateY(0) translateX(0) scale(1);
  }
  33% {
    transform: translateY(-30px) translateX(20px) scale(1.05);
  }
  66% {
    transform: translateY(20px) translateX(-15px) scale(0.95);
  }
}

@keyframes orb-pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.5;
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

.animate-orb-float {
  animation: orb-float 20s ease-in-out infinite;
}

.animate-orb-pulse {
  animation: orb-pulse 15s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-3000 {
  animation-delay: 3s;
}
</style>