<script setup lang="ts">
interface Profile {
  location?: string;
  email?: string;
  github?: string;
  linkedin?: string;
}

const props = defineProps<{
  profile?: Profile | null
}>()

const isVisible = ref(false)
const formState = ref({
  name: '',
  email: '',
  message: ''
})
const isSubmitting = ref(false)
const isSubmitted = ref(false)

// Links sociales dinámicos basados en el perfil
const socialLinks = computed(() => [
  { 
    name: 'GitHub', 
    icon: 'github', 
    url: props.profile?.github || 'https://github.com/KsmBlitz', 
    color: 'hover:text-slate-800 dark:hover:text-white' 
  },
  { 
    name: 'LinkedIn', 
    icon: 'linkedin', 
    url: props.profile?.linkedin || 'https://www.linkedin.com/in/vicente-estay/', 
    color: 'hover:text-blue-600' 
  },
  { 
    name: 'Email', 
    icon: 'email', 
    url: `mailto:${props.profile?.email || 'vjestayvaldivia@gmail.com'}`, 
    color: 'hover:text-red-500' 
  }
])

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

  const section = document.querySelector('#contact')
  if (section) observer.observe(section)
})

const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // Enviar a Formspree (crea tu cuenta gratis en formspree.io)
    // Reemplaza 'TU_FORM_ID' con tu ID de Formspree
    const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formState.value.name,
        email: formState.value.email,
        message: formState.value.message
      })
    })
    
    if (response.ok) {
      isSubmitted.value = true
      formState.value = { name: '', email: '', message: '' }
    }
  } catch (error) {
    console.error('Error al enviar:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="py-20 md:py-32 bg-slate-50 dark:bg-slate-800/50">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 
          class="text-3xl md:text-4xl font-bold mb-4 transition-all duration-700"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
        >
          <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Contacto
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
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div 
          class="transition-all duration-700 delay-400"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'"
        >
          <h3 class="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
            Trabajemos juntos
          </h3>
          <p class="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Estoy disponible para proyectos freelance, colaboraciones y oportunidades laborales. 
            No dudes en contactarme para discutir cómo puedo ayudarte a llevar tu idea al siguiente nivel.
          </p>

          <!-- Contact Details -->
          <div class="space-y-4 mb-8">
            <div class="flex items-center gap-4 text-slate-600 dark:text-slate-400">
              <div class="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                <span class="text-xl">📍</span>
              </div>
              <div>
                <div class="font-medium text-slate-800 dark:text-slate-200">Ubicación</div>
                <div>{{ profile?.location || 'Chile' }}</div>
              </div>
            </div>
            <div class="flex items-center gap-4 text-slate-600 dark:text-slate-400">
              <div class="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <span class="text-xl">✉️</span>
              </div>
              <div>
                <div class="font-medium text-slate-800 dark:text-slate-200">Email</div>
                <a :href="`mailto:${profile?.email || 'vjestayvaldivia@gmail.com'}`" class="hover:text-indigo-600 transition-colors">{{ profile?.email || 'vjestayvaldivia@gmail.com' }}</a>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="flex gap-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 rounded-full bg-white dark:bg-slate-700 shadow-md flex items-center justify-center text-slate-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              :class="social.color"
              :aria-label="social.name"
            >
              <svg v-if="social.icon === 'github'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <svg v-else-if="social.icon === 'linkedin'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <svg v-else-if="social.icon === 'twitter'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <svg v-else-if="social.icon === 'email'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <div 
          class="transition-all duration-700 delay-600"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'"
        >
          <form 
            v-if="!isSubmitted"
            @submit.prevent="handleSubmit" 
            class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl"
          >
            <div class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Nombre
                </label>
                <input 
                  id="name"
                  v-model="formState.name"
                  type="text" 
                  required
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </label>
                <input 
                  id="email"
                  v-model="formState.email"
                  type="email" 
                  required
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Mensaje
                </label>
                <textarea 
                  id="message"
                  v-model="formState.message"
                  rows="4" 
                  required
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                :disabled="isSubmitting"
                class="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
                  <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  Enviando...
                </span>
                <span v-else>Enviar Mensaje</span>
              </button>
            </div>
          </form>

          <!-- Success Message -->
          <div 
            v-else 
            class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl text-center"
          >
            <div class="text-6xl mb-4">✅</div>
            <h3 class="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
              ¡Mensaje enviado!
            </h3>
            <p class="text-slate-600 dark:text-slate-400">
              Gracias por contactarme. Te responderé lo antes posible.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
