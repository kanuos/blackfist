<template>
  <article class="w-full md:w-1/2 flex flex-col items-center">
      <img 
        :src="data.image" 
        class="h-40 w-40 mx-auto my-4 shadow-xl rounded-full block object-cover"
        alt="">
        <strong class="text-3xl font-heading font-light text-gray-300">
            {{data.name}}
        </strong>
        <ul class="flex items-center justify-center" :title="`${data.rating} out of 5`">
            <li class="text-2xl" :class="data.rating >=1 ? 'text-yellow-500' : 'text-gray-600'">
                &starf;
            </li>  
            <li class="text-2xl" :class="data.rating >=2 ? 'text-yellow-500' : 'text-gray-600'">
                &starf;
            </li>  
            <li class="text-2xl" :class="data.rating >=3 ? 'text-yellow-500' : 'text-gray-600'">
                &starf;
            </li>  
            <li class="text-2xl" :class="data.rating >=4 ? 'text-yellow-500' : 'text-gray-600'">
                &starf;
            </li>  
            <li class="text-2xl" :class="data.rating >=5 ? 'text-yellow-500' : 'text-gray-600'">
                &starf;
            </li>  
        </ul>
        <p class="text-center w-4/5 max-w-prose mx-auto font-primary italic mb-4 font-semibold text-gray-500 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, odio nam? Dicta debitis quia atque quod, aliquid ullam exercitationem, sed similique omnis minus dignissimos possimus non praesentium veritatis quae consectetur!
        </p>
  </article>
</template>

<script>
export default {
    name: "ClientComponent",
    props : ['data'],
}
</script>

<style>

</style>