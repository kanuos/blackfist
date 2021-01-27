<template>
  <article class="flex items-center p-4 my-2 bg-gray-200 rounded-lg w-11/12 mx-auto max-w-prose text-gray-700">
      <img 
        class="h-20 w-20 rounded-full shadow-xl"
        :src="image" 
        :alt="title">
      <div class="flex flex-col ml-3 w-full pl-1">
          <div class="flex justify-between items-center">
              <strong class="text-gray-600 font-primary capitalize text-sm">
                  {{title}}
              </strong>
              <strong class="font-primary font-light">
                  ${{(price * getQty).toFixed(2)}}
              </strong>
          </div>
          <div class="flex justify-between items-center">
              <span class="text-gray-400 font-primary capitalize text-xs">
                  {{categories.join(", ")}}
              </span>
          </div>
          <div class="flex justify-between items-center mt-1">
            <div class="flex items-center justify-center">
                <button
                    @click="decrement(id)" 
                    class="text-xl font-bold hover:text-red-600 outline-none focus:outline-none">
                    <svg class="w-4 h-4 text-gray-500 hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
                </button>
                <span class="px-3 font-bold font-primary capitalize">
                    {{getQty}}
                </span>
                <button 
                    @click="increment(id)"
                    class="text-xl font-bold hover:text-red-600 outline-none focus:outline-none">
                    <svg class="w-4 h-4 text-gray-500 hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </button>
            </div>
            <button @click="removeFromCart(id)" class="outline-none focus:outline-none">
                <svg class="w-5 h-5 text-gray-500 hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
          </div>
      </div>
  </article>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props : ['image', 'price','title','categories', 'id'],
    methods : {
        ...mapActions([
            'removeFromCart',
            'increment',
            'decrement',
        ])
    },
    computed : {
        getQty() {
            const cart = this.$store.getters.getCart;
            return cart.find(el => el.id === this.id).qty;
        }
    }
}
</script>

<style>

</style>