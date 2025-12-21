<script setup lang="ts">
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
    { threshold: 0.2 }
  )

  const section = document.querySelector('#about')
  if (section) observer.observe(section)
})
</script>

<template>
  <section id="about" class="py-20 md:py-32 bg-white dark:bg-slate-900">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 
          class="text-3xl md:text-4xl font-bold mb-4 transition-all duration-700"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
        >
          <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Sobre Mí
          </span>
        </h2>
        <div 
          class="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full transition-all duration-700 delay-200"
          :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'"
        ></div>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Image/Visual -->
        <div 
          class="relative transition-all duration-700 delay-300"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'"
        >
          <div class="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <div class="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center">
              <span class="text-8xl">🚀</span>
            </div>
          </div>
          <!-- Decorative elements -->
          <div class="absolute -top-4 -left-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl"></div>
          <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
        </div>

        <!-- Content -->
        <div 
          class="transition-all duration-700 delay-500"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'"
        >
          <h3 class="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            ¡Hola! Soy un apasionado del desarrollo web
          </h3>
          
          <p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            Con más de <span class="text-indigo-600 dark:text-indigo-400 font-semibold">X años de experiencia</span> 
            creando soluciones digitales innovadoras. Me especializo en el desarrollo de aplicaciones web 
            modernas utilizando las últimas tecnologías del ecosistema JavaScript.
          </p>

          <p class="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Mi enfoque se centra en escribir código limpio, escalable y mantenible, 
            siempre buscando la mejor experiencia de usuario posible.
          </p>

          <!-- Quick Stats -->
          <div class="grid grid-cols-3 gap-4">
            <div class="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
              <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">5+</div>
              <div class="text-sm text-slate-500 dark:text-slate-400">Años Exp.</div>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
              <div class="text-3xl font-bold text-purple-600 dark:text-purple-400">20+</div>
              <div class="text-sm text-slate-500 dark:text-slate-400">Proyectos</div>
            </div>
            <div class="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
              <div class="text-3xl font-bold text-pink-600 dark:text-pink-400">100%</div>
              <div class="text-sm text-slate-500 dark:text-slate-400">Dedicación</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
