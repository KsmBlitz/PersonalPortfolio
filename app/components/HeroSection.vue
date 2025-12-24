<script setup lang="ts">
interface Profile {
  name: string;
  title?: string;
  photoUrl?: string;
  shortBio?: string;
}

const props = defineProps<{
  profile?: Profile | null
}>()

const scrollToProjects = () => {
  const element = document.querySelector('#projects')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToContact = () => {
  const element = document.querySelector('#contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950"></div>
    
    <!-- Animated background shapes -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-3xl animate-blob"></div>
      <div class="absolute top-40 -left-40 w-80 h-80 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-40 left-1/2 w-80 h-80 bg-pink-400/20 dark:bg-pink-600/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
      <!-- Avatar/Photo -->
      <div class="mb-8 animate-fade-in-up">
        <div class="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-2xl">
          <img 
            v-if="profile?.photoUrl" 
            :src="profile.photoUrl" 
            :alt="profile.name"
            class="w-full h-full rounded-full object-cover"
          />
          <div v-else class="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-4xl">
            👨‍💻
          </div>
        </div>
      </div>

      <!-- Greeting -->
      <p class="text-lg md:text-xl text-indigo-600 dark:text-indigo-400 font-medium mb-4 animate-fade-in-up animation-delay-200">
        ¡Hola! Soy
      </p>

      <!-- Name -->
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-fade-in-up animation-delay-400">
        <span class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {{ profile?.name || 'Vicente Estay' }}
        </span>
      </h1>

      <!-- Title -->
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-200 mb-6 animate-fade-in-up animation-delay-600">
        {{ profile?.title || 'Desarrollador Full Stack' }}
      </h2>

      <!-- Description -->
      <p class="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-800">
        {{ profile?.shortBio || 'Especializado en crear experiencias digitales excepcionales con Vue.js, Nuxt y AWS.' }}
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-1000">
        <button 
          @click="scrollToProjects"
          class="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1 transition-all duration-300"
        >
          Ver Proyectos
        </button>
        <button 
          @click="scrollToContact"
          class="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-semibold rounded-full hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transform hover:-translate-y-1 transition-all duration-300"
        >
          Contáctame
        </button>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(20px, -30px) scale(1.1); }
  50% { transform: translate(-20px, 20px) scale(0.9); }
  75% { transform: translate(30px, 10px) scale(1.05); }
}

.animate-blob {
  animation: blob 8s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}

.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-400 { animation-delay: 0.4s; }
.animation-delay-600 { animation-delay: 0.6s; }
.animation-delay-800 { animation-delay: 0.8s; }
.animation-delay-1000 { animation-delay: 1s; }
</style>
