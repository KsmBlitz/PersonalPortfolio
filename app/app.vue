<script setup lang="ts">
interface Project {
  title: string;
  imageUrl?: string;
  description?: string;
  technologies?: string[];
  link?: string;
}

interface Profile {
  name: string;
  title?: string;
  photoUrl?: string;
  aboutPhotoUrl?: string;
  shortBio?: string;
  longBio?: string;
  yearsExperience?: number;
  projectsCompleted?: number;
  location?: string;
  email?: string;
  github?: string;
  linkedin?: string;
}

// Query proyectos
const projectsQuery = `*[_type == "project"]{
  title,
  "imageUrl": image.asset->url,
  description,
  technologies,
  link
}`

// Query perfil
const profileQuery = `*[_type == "profile"][0]{
  name,
  title,
  "photoUrl": photo.asset->url,
  "aboutPhotoUrl": aboutPhoto.asset->url,
  shortBio,
  longBio,
  yearsExperience,
  projectsCompleted,
  location,
  email,
  github,
  linkedin
}`

const { data: projects } = await useSanityQuery<Project[]>(projectsQuery, 'projects')
const { data: profile } = await useSanityQuery<Profile>(profileQuery, 'profile')
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300">
    <!-- Navigation -->
    <NavBar />

    <!-- Hero Section -->
    <HeroSection :profile="profile" />

    <!-- About Section -->
    <AboutSection :profile="profile" />

    <!-- Skills Section -->
    <SkillsSection />

    <!-- Projects Section -->
    <ProjectsSection :projects="projects ?? null" />

    <!-- Contact Section -->
    <ContactSection :profile="profile" />

    <!-- Footer -->
    <FooterSection :profile="profile" />
  </div>
</template>

<style>
/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar - minimal */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

.dark ::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

.dark ::-webkit-scrollbar-thumb {
  background: #475569;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: #64748b;
}

/* Selection color */
::selection {
  background-color: #1e293b;
  color: white;
}

.dark ::selection {
  background-color: #e2e8f0;
  color: #0f172a;
}

/* Line clamp utility */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>