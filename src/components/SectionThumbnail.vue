<template>
  <article class="relative flex justify-center items-center m-2 rounded-md overflow-hidden">
      <img
        class="absolute top-0 left-0 h-full w-full object-cover" 
        :src="image" alt="">
        <router-link class="z-0 font-heading font-light text-gray-100 opacity-75 p-2 text-5xl uppercase cursor-pointer" :to="`/sections/${title.toLowerCase()}`">
            {{title}}
        </router-link>
  </article>
</template>

<script>
export default {
    props : ['image', 'title']
}
</script>

<style scoped>
    article {
        width: 60%;
        height: 30rem;
    }
    article > img {
        opacity: .5;
        transform-origin: center;
        transition: all .5s ease;
    }
    article:hover > a {
        opacity: 1;
        color:red;
        background: white;
    }
    article:hover > img {
        opacity: 1;
        filter: grayscale(100%);
    }
</style>