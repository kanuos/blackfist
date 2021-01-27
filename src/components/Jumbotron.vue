<template>
  <header class="h-screen md:h-96 md:my-20">
      <section class="p-10 relative h-full flex flex-col justify-center items-center bg-gradient-to-t from-gray-800 to-red-500">
        <video autoplay muted loop 
            class="absolute object-cover w-full h-full opacity-30">
            <source src="@/assets/hero.mp4" type="video/mp4">
        </video>
        <h1 class="z-0 text-5xl text-center font-heading text-gray-200 uppercase">
            {{heading}}
        </h1>
        <ul class="z-0 flex items-center capitalize">
            <li class="text-gray-400 p-1 hover:text-green-100">
                <router-link to="/">
                    home
                </router-link>
            </li>
            <li class="flex items-center text-gray-200 p-1 cursor-default">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                <span v-if="url">
                    {{url}}
                </span>
                <span v-else>
                    {{heading}}
                </span>
            </li>
        </ul>
        <p class="z-0 max-w-prose w-5/6 mx-auto text-center mt-8 text-xl font-heading font-light text-gray-400">
            {{desc}}
        </p>
      </section>
  </header>
</template>

<script>
export default {
    props : ['heading', 'desc', 'url']
}
</script>


<style scoped>
    video {
        transform: rotateY(180deg);
    }
</style>