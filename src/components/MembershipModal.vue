<template>
  <section class="fixed top-0 left-0 h-full w-full flex justify-center items-center z-30">
      <button
        @click="close()" 
        class="absolute right-2 top-2 text-gray-200 text-4xl outline-none focus:outline-none">
          &times;
      </button>
      <article class="bg-gray-200 w-4/5 max-w-prose rounded-sm mx-auto flex flex-col p-2" v-if="detail">
            <img 
            :src="detail.image" 
            class="h-1/3 object-cover block pb-2 w-full border-b-2 border-gray-800"
            :alt="id">
            <div class="h-2/3">
                <strong class="mt-1 font-heading w-full flex justify-between font-light text-lg capitalize">
                    <span class="text-gray-500">
                        membership type :
                    </span>
                    <span class="text-gray-800">
                        {{id}} pack
                    </span>
                </strong>
                <strong class="flex font-heading w-full justify-between font-light text-lg capitalize">
                    <span class="text-gray-500">
                        price :
                    </span>
                    <span class="text-gray-800">
                        ${{(detail.price).toFixed(2)}}
                    </span>
                </strong>
                <strong class="flex font-heading w-full justify-between font-light capitalize">
                    <span class="text-gray-500">
                        description :
                    </span>
                </strong>
                <p class="text-sm font-primary p-1 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, maiores iure? Omnis ex repellat quisquam nam debitis neque et ad vero quidem! Architecto quam laudantium officiis delectus consectetur. Iste adipisci praesentium quo aut ullam quos itaque. Consectetur dolore quaerat blanditiis! Magni quaerat neque totam dolorem provident debitis.
                </p>
                <div class="my-3 flex justify-center items-center">
                    <button
                        v-if="!success"
                        @click="add"
                        class="bg-gray-800 text-gray-300 py-2.5 px-4 font-primary uppercase text-xs font-bold hover:text-gray-200 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-200 rounded-sm shadow-lg outline-none focus:outline-none">
                        add to cart
                    </button>
                    <button
                        @mouseenter="() => removeBtnHovered = !removeBtnHovered"
                        @mouseleave="() => removeBtnHovered = !removeBtnHovered"
                        v-else 
                        class="bg-gray-200 py-2.5 px-4 font-primary uppercase text-xs font-bold rounded-sm outline-none focus:outline-none">
                            <div class="flex items-center text-green-700" v-if="removeBtnHovered">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span class="text-sm">
                                    item added to cart
                                </span>
                            </div>
                            <div
                                @click="remove()" 
                                class="flex items-center text-red-600" v-else>
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                <span class="text-sm">
                                    remove item from cart
                                </span>
                            </div>
                    </button>
                </div>
            </div>
      </article>
  </section>
</template>

<script>
import membershipData from '../assets/mockDB/membership.json';
import {mapActions} from 'vuex'
export default {
    props: ['id', 'close'],
    data() {
        return {
            success : false,
            removeBtnHovered : false
        }
    },
    computed : {
        detail() {
            return membershipData.find(el => el.id === this.id)
        }
    },
    methods : {
        ...mapActions([
            'addMembershipToCart',
            'removeMembershipFromCart'
        ]),
        add() {
            this.addMembershipToCart(this.detail.id);
            this.success = true;
        },
        remove() {
            this.removeMembershipFromCart(this.detail.id);
            this.success = false;
        }
    },
    beforeMount(){
        const cart = this.$store.getters.getMembership;
        this.success = cart.includes(this.id);
    }
}

</script>

<style scoped>
    section {
        background-image: linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75));
    }
</style>