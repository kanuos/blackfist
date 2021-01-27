<template>
  <article class="relative h-screen w-full md:w-1/2 lg:w-1/4 flex justify-center items-center">
      <div class="p-8 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-end bg-gray-800 opacity-75 z-10">
        <router-link exact :to="`/trainers?t_id=${user.id}`">
            <h1 
                class="z-10 font-heading text-4xl uppercase text-gray-200 cursor-pointer transition-all duration-300 hover:bg-gray-700 hover:text-red-600 p-1 text-center">
                {{user.name}}
            </h1>         
        </router-link> 
        <p class="my-2 text-gray-300 font-primary w-4/5 mx-auto text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, ipsa? Ipsum quaerat quia neque praesentium!
        </p>
        <ul class="flex items-center justify-center my-6 z-10">
            <li class="h-6 w-6 m-2">
                <img
                class="social" 
                src="@/assets/ig.svg" alt="">
            </li>
            <li>
                <svg class="w-8 h-8 social" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path></svg>
            </li>
            <li class="h-6 w-6 m-2">
                <img
                class="social" 
                src="@/assets/in.svg" alt="">
            </li>
        </ul>
      </div>
      <h1 class="z-10 font-heading text-4xl uppercase text-gray-200 pointer-events-none">
          {{user.name.split(" ")[0]}}
      </h1>
      <img 
        class="h-full w-full object-cover absolute block"
        :src="image ? require(`@/assets/trainers/${image}`) :'https://images.pexels.com/photos/3838699/pexels-photo-3838699.jpeg'" alt="">
  </article>
</template>

<script>
export default {
    name: "TrainerCard",
    props : ['image','user'],
}
</script>

<style scoped>
    article > h1, article > div {
        transition: all .4s ease-in;
    }
    article > div {
        transform: scaleX(0);
    }
    article:hover > h1 {
        transform: scaleX(0);
    }
    article:hover > div {
        transform: scaleX(1);
    }
    .social {
        filter: invert(100%);
    }
</style>