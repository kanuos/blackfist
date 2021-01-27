<template>
  <main id="main" class="min-h-screen flex flex-col justify-center items-center">
      <div class="h-96 flex flex-col justify-center items-center p-6  md:py-40">
        <brand-logo class="logo"/>
        <p class="font-heading text-gray-100 text-xl text-center max-w-4xl md:text-2xl">
          Want to be healthy and have a perfect body? BLACKFIT is the right decision for you! It will create your personal training program and balance your diet so you could get the shape of your dream shortly!
        </p>
      </div>
      <div class="flex flex-wrap my-8 w-full">
          <image-link-card  
            v-for="item in sections"
            :img="item.image"
            :title="item.title"
            :key="item.id"
            class="w-full md:w-1/2 lg:w-1/4"/>
      </div>
      <h3 class="font-heading uppercase text-5xl md:text-7xl my-8">
          <span class="text-gray-400 opacity-75">who </span>
          <span class="text-gray-100">we are</span>
      </h3>
        <video-component />
  </main>
</template>

<script>
import ImageLinkCard from './ImageLinkCard.vue'
import VideoComponent from './VideoComponent.vue'
import sections from '../assets/mockDB/homeSections.json'
import BrandLogo from './BrandLogo.vue'
export default {
    name : 'LandingAbout',
    components: { ImageLinkCard, VideoComponent, BrandLogo},
    data() {
        return  {
            sections
        }
    }
}
</script>

<style scoped>
  .logo {
    filter: invert(50%);
    margin-bottom: 1rem;
  }
</style>