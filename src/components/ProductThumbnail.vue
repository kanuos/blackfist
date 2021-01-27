<template>
    <article class="w-full md:w-1/2 my-6 relative hover:scale-100 transition-all transform scale-95">
        <div class="absolute z-10 transform scale-0 top-0 left-0 h-full w-full bg-gray-800 opacity-0 transition-all duration-200 flex justify-center items-center">
            <router-link :to="`/products/${product.id}`">
                <svg class="w-16 h-10 cursor-pointer hover:text-red-600 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </router-link>
        </div>
        <img 
            class="block h-full w-full object-cover rounded-md"
            :src="product.images[0]" 
            :alt="product.title">
        <div class="flex justify-between items-center my-1.5">
            <strong class="text-gray-200 capitalize text-lg font-heading font-light">
                {{product.title}}
            </strong>
            <span v-if="product.price > 0" class="text-gray-400 font-semibold text-lg">
                ${{product.price.toFixed(2)}}
            </span>
        </div>
    </article>
</template>

<script>
export default {
    props : ['product'],
}
</script>

<style scoped>
    article:hover > div {
        opacity: .7;
        transform: scale(1);
    }
</style>