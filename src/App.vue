<script setup lang="ts">
import { useHead } from '@vueuse/head'
useHead({
  title: 'Xbox Official Site: Consoles, Games, and Community | Xbox',
  meta: [
    {
      name: 'description',
      content: 'Using Vue3,Vite,UnoCSS,Vite-SSG',
    },
  ],
})
</script>
<template>
  <div h-full overflow-y-scroll>
    <NavBar />
    <CarouselDemo />
    <IconBlade />
    <ItemList />
    <Footer />
  </div>
</template>

<style scoped></style>
