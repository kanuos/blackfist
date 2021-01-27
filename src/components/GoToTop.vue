<template>
    <button
        @click="scrollToTop()"
        :class="scrolled ? 'block': 'hidden'" 
        class="text-white fixed bottom-24 right-4 p-4 border-4 border-white outline-none focus:outline-none z-20 hover:border-gray-600 hover:text-gray-600">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7"></path></svg>
    </button>
</template>


<script>
export default {
    props : ['scrolled'],
    methods : {        
        scrollToTop() {
        document.documentElement.scrollTo(0, 0);
        }
    }
}
</script>

<style>

</style>