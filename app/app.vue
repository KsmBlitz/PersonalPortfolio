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

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

.dark ::-webkit-scrollbar-track {
  background: #1e293b;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #6366f1, #8b5cf6);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #4f46e5, #7c3aed);
}

/* Selection color */
::selection {
  background-color: #6366f1;
  color: white;
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