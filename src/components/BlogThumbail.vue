<template>
<router-link :to="`/blogs/${id}`">
  <article class="relative p-2 flex flex-col h-80 justify-between my-2 overflow-hidden w-full transition-all duration-300 bg-gray-700 hover:bg-red-600">
    <img
        class="z-0 absolute h-full w-full top-0 left-0 right-0 object-cover opacity-50 transition origin-center block" 
        :src="image" :alt="title">
    <span v-if="date" class="z-10 font-bold uppercase bg-gray-700 w-min text-center text-gray-200 p-4">
        {{date}}
    </span>
    <strong 
        class="z-10 font-thin text-gray-200 uppercase text-2xl font-heading w-min text-center mx-auto pb-0.5 border-transparent border-b-4">
            {{title}}
        </strong>
  </article>
</router-link>
</template>

<script>
export default {
    name : "BlogThumbnail",
    props : ['image', 'date', 'title', 'id']
}
</script>

<style scoped>
    article:hover > img {
        transform: scale(1.15);
    }
    article:hover > strong {
        border-color: currentColor;
    }
</style>
