<template>
  <article class="h-screen w-full relative flex flex-col justify-end items-center pb-16">
    <img 
        class="absolute top-0 left-0 object-cover object-center h-full w-full"
        :src="img" 
        alt="">
    <div class="absolute transition-all origin-bottom duration-1000 top-0 left-0 bg-gray-800 opacity-70 h-full w-full">
        <!-- black screen -->
    </div>
    <router-link class="z-0 font-heading font-light text-gray-100 opacity-75 p-2 text-5xl uppercase cursor-pointer" :to="`/sections/${title.toLowerCase()}`">
        {{title}}
    </router-link>
  </article>
</template>

<script>
export default {
    props : ['img', 'title']
}
</script>

<style scoped>
    article:hover > div {
        height: 0;
    }
    article:hover > a {
        opacity: 1;
        color:red;
        background: white;
    }
</style>