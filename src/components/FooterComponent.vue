<template>
  <footer class="px-4 py-8 bg-gray-300 w-full">
    <div class="w-full max-w-prose mx-auto flex flex-col items-center">
      <div class="flex flex-col items-center">
        <img src="@/assets/logo.svg" alt="logo" class="h-14 w-14">
        <strong class="font-heading font-light text-4xl uppercase text-gray-700 mb-4">
            blackfit
        </strong>
      </div>
      <p class="text-gray-500 font-semibold font-primary text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti est officia eveniet obcaecati sequi beatae, porro vero quo eos, optio rerum, error soluta veniam saepe!
      </p>
      <strong class="text-gray-700 my-2 font-heading font-light uppercase">
          newsletter
      </strong>
      <p class="text-gray-500 font-primary font-semibold text-center">
          BLACKFIT – fitness health center where your body gets its shape! Start training now to stay fit and healthy all year round!
      </p>
      <div class="flex justify-center items-center mt-4 w-4/5 mb-4">
          <input 
            type="text" 
            placeholder="Email" 
            class="p-2 w-4/5 border-2 border-r-0 border-gray-500 bg-transparent focus:outline-none outline-none">
          <button class="bg-transparent text-gray-500 py-2 px-4 border-2 border-gray-500 outline-none focus:outline-none">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </button>
      </div>
        <ul class="flex items-center justify-center my-6">
            <li class="h-6 w-6 m-2">
                <img
                src="@/assets/ig.svg" alt="">
            </li>
            <li>
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path></svg>
            </li>
            <li class="h-6 w-6 m-2">
                <img
                src="@/assets/in.svg" alt="">
            </li>
        </ul>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
    input:focus, input:focus + button {
        border-color: black;
        color: black;
    }
</style>