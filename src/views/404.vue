<template>
<div class="relative overflow-x-hidden min-h-screen bg-gray-800">
    <div class="h-screen w-full flex flex-col items-center justify-center bg-gray-100 relative">
        <img src="@/assets/404.jpg" class="absolute top-0 left-0 object-cover h-full w-full z-0 opacity-60">
        <brand-logo class="z-10"/>
        <h2 class="capitalize z-10 w-max text-7xl font-heading text-gray-700">
            error 404
        </h2>
        <small class="uppercase text-2xl">
            page not found
        </small>
        <router-link to="/" class="z-10 my-4 p-4 border-4 border-gray-700 text-gray-700 uppercase font-primary font-bold bg-transparent transition-all hover:bg-gray-700 hover:text-gray-200 origin-center duration-500">
            go to home page
        </router-link>
    </div>
    <footer-component />
</div>
</template>


<script>
import BrandLogo from '../components/BrandLogo.vue'
import FooterComponent from '../components/FooterComponent.vue'
export default {
  components: { FooterComponent, BrandLogo },
    name: "ErrorPage",
    mounted() {
        document.documentElement.scrollTo(0,0);
    }
}
</script>

<style>

</style>