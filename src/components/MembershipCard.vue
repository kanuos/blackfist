<template>
    <article class="w-5/6 max-w-xs mx-auto my-4 rounded-md overflow-hidden shadow-lg">
        <section class="bg-gray-100 w-full h-2/5 flex flex-col items-center justify-around py-4">
            <span class="text-gray-700 text-sm font-primary uppercase font-semibold">
                {{cat}}
            </span>
            <div class="flex font-heading ml-2.5">
                <small class="font-light text-gray-500 self-start">$</small>
                <strong class="text-gray-700 text-5xl mx-1">
                    {{price}}
                </strong>
                <small class="font-light text-gray-500 self-end">/mo</small>
            </div>
            <p class="text-gray-500 font-semibold w-4/5 mx-auto text-center my-2 italic font-primary text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ut.
            </p>
        </section>
        <section
            :class="themeClass" 
            class="h-3/5 w-full flex flex-col items-center pt-2 pb-6 relative">
            <img :src="image" alt="" class="absolute object-cover h-full w-full top-0 left-0 opacity-20">
            <div class="h-full z-10 flex flex-col items-center justify-between">
                <small class="text-sm text-gray-700 block w-4/5 mx-auto text-center font-semibold">
                    Facilis numquam sint quisquam expedita, officiis possimus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae optio, voluptatem itaque obcaecati dignissimos maxime eos sint corrupti cumque magnam libero suscipit, fugit corporis dolorum earum nemo, quae rerum dolor saepe quo enim voluptates expedita.
                </small>
                <button
                    @click="triggerModalOpen()"
                    v-if="!itemPresentInCart" 
                    class="bg-gray-800 text-gray-300 py-2.5 px-4 font-primary uppercase text-xs font-bold hover:text-gray-200 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-200 rounded-sm shadow-lg outline-none focus:outline-none">
                    learn more
                </button>
                <button
                    @click="remove"
                    @mouseenter="() => removeBtnHovered = !removeBtnHovered"
                    @mouseleave="() => removeBtnHovered = !removeBtnHovered"
                    v-else 
                    class="outline-none focus:outline-none bg-gray-200 py-2.5 px-4 font-primary uppercase text-xs font-bold rounded-sm">
                        <div class="flex items-center text-green-700" v-if="!removeBtnHovered">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span class="text-sm">
                                item added to cart
                            </span>
                        </div>
                        <div class="flex items-center text-red-600" v-else>
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            <span class="text-sm">
                                remove item from cart
                            </span>
                        </div>
                </button>
            </div>

        </section>
    </article>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: 'ProgramCard',
    props : ['theme', 'image', 'price', 'cat'],
    data(){
        return {
            imgHovered : false,
            removeBtnHovered : false
        }
    },
    methods : {
        remove() {
            this.$store.dispatch('removeMembershipFromCart')
        },
        triggerModalOpen() {
            this.$emit("modal", this.cat);
        }
    },
    computed : {
        ...mapGetters([
            'getMembership'
        ]),
        themeClass() {
            return `bg-${this.theme}-400`;
        },
        itemPresentInCart() {
            return this.getMembership.find(el => el === this.cat)
        }
    }
}
</script>

<style scoped>
    article {
        height: 28rem;
    }
    article > .toggler:hover ~ .backSide {
        transform: scaleY(1);
    }
</style>