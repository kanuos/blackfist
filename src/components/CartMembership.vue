<template>
  <article class="w-2/3 flex mx-auto overflow-hidden rounded-md shadow-md flex-col" :class="getThemeBg">
      <img 
        :src="image" 
        :alt="title" 
        class="opacity-50 h-60">
      <div class="flex flex-col items-center justify-start bg-gray-300 w-full p-4">
            <section class="flex justify-between w-full">
                <strong class="text-gray-600 font-heading text-sm font-light capitalize">
                    {{title}} membership
                </strong>
                <strong :class="getThemeText" class="font-heading text-sm font-light">
                    ${{price.toFixed(2)}}/mo
                </strong>
            </section>
            <button 
                @click="removeMembershipFromCart()" 
                class="mt-4 p-2 w-full text-xs rounded-md font-primary uppercase font-bold bg-gray-800 text-gray-200">
                remove
            </button>
      </div>
  </article>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props : ['image', 'title', 'price','theme'],
    computed : {
        getThemeBg() {
            return `bg-${this.theme}-600`
        },
        getThemeText() {
            return `text-${this.theme}-700`
        }
    },
    methods : {
        ...mapActions([
            'removeMembershipFromCart'
        ])
    }
}
</script>

<style>

</style>