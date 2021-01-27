<template>
  <nav
    :class="scrolled ? 'bg-gray-800 shadow-lg' : 'bg-transparent'"
    class="absolute lg:fixed top-0 left-0 w-full flex justify-between items-start py-1.5 px-4 lg:items-center lg:px-6 lg:py-0 z-30">
    <brand-logo class="list-icon"></brand-logo>
    <button @click="toggleNavList()" class="outline-none focus:outline-none lg:hidden">
        <svg 
            class="w-10 h-10 cursor-pointer text-gray-100" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg">
            <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="1.5" 
                d="M4 6h16M4 12h16m-7 6h7">
            </path>
        </svg>
    </button>
    <ul class="hidden lg:flex w-2/3 max-w-2xl ml-auto items-center justify-between">
        <li 
            class="mx-1.5 font-bold text-base uppercase text-gray-400 font-primary text-center hover:font-extrabold cursor-pointer transition-colors duration-300 hover:text-gray-200 focus:text-gray-200">
            <router-link class="border-b-2 border-transparent pb-1" exact-active-class="text-gray-50 border-b-2 border-gray-50" to="/">home</router-link>
        </li>
        <li 
            class="mx-1.5 font-bold text-base uppercase text-gray-400 font-primary text-center hover:font-extrabold cursor-pointer transition-colors duration-300 hover:text-gray-200 focus:text-gray-200 border-b-2 border-transparent pb-1">
            <router-link active-class="text-gray-50 border-b-2 border-gray-50" to="/about">about us</router-link>
        </li>
        <li 
            class="mx-1.5 font-bold text-base uppercase text-gray-400 font-primary text-center hover:font-extrabold cursor-pointer transition-colors duration-300 hover:text-gray-200 focus:text-gray-200 border-b-2 border-transparent pb-1">
            <router-link active-class="text-gray-50 border-b-2 border-gray-50" to="/trainers">trainers</router-link>    
        </li>
        <li 
            class="mx-1.5 font-bold text-base uppercase text-gray-400 font-primary text-center hover:font-extrabold cursor-pointer transition-colors duration-300 hover:text-gray-200 focus:text-gray-200">
                <router-link active-class="text-gray-50 border-b-2 border-gray-50" to="/products">products</router-link>
            </li>
        <li 
            class="mx-1.5 font-bold text-base uppercase text-gray-400 font-primary text-center hover:font-extrabold cursor-pointer transition-colors duration-300 hover:text-gray-200 focus:text-gray-200 border-b-2 border-transparent pb-1">
            <router-link active-class="text-gray-50 border-b-2 border-gray-50" to="/blogs">blogs</router-link>
            </li>
        <li 
            class="mx-1.5 my-6 font-bold text-xl uppercase text-gray-400 font-primary text-center hover:font-extrabold cursor-pointer transition-colors duration-300 hover:text-gray-200 focus:text-gray-200">
            <router-link class="flex items-center justify-center border-b-2 border-transparent pb-1" active-class="text-gray-50 border-b-2 border-gray-50" to="/myStore">
                <span class="mr-1 text-base">cart</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                <span v-if="isCartEmpty" class="block h-2 w-2 rounded-full bg-red-600"></span>
                <span v-else class="block h-2 w-2 rounded-full bg-transparent"></span>
            </router-link>
        </li>
    </ul>
    <section 
        :class="navListOpen ? 'showNav': 'hideNav'" 
        class="fixed w-full min-h-screen top-0 z-30 bg-gray-900 transition-all duration-500 origin-right p-4 lg:hidden border-l-2 border-gray-100">
        <button
            class="outline-none focus:outline-none block ml-auto w-max" 
            @click="toggleNavList()">
            <svg class="w-8 h-8 text-gray-200 transition-colors hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <div class="mt-20 flex flex-col justify-center items-center">
            <brand-logo class="list-icon scale-125"></brand-logo>
            <ul class="mt-6">
                <li 
                    class="mx-1.5 my-6 font-bold text-xl uppercase text-gray-400 font-primary text-center hover:font-extrabold cursor-pointer transition-colors duration-300 hover:text-gray-200 focus:text-gray-200">
                    <router-link class="border-b-2 border-transparent pb-1" exact-active-class="text-gray-50 border-b-2 border-gray-50" to="/">home</router-link>
                </li>
                <li 
                    class="mx-1.5 my-6 font-bold text-xl uppercase text-gray-400 font-primary text-center hover:font-extrabold cursor-pointer transition-colors duration-300 hover:text-gray-200 focus:text-gray-200">
                    <router-link class="border-b-2 border-transparent pb-1" active-class="text-gray-50 border-b-2 border-gray-50" to="/about">about us</router-link>
                </li>
                <li 
                    class="mx-1.5 my-6 font-bold text-xl uppercase text-gray-400 font-primary text-center hover:font-extrabold cursor-pointer transition-colors duration-300 hover:text-gray-200 focus:text-gray-200">
                    <router-link class="border-b-2 border-transparent pb-1" active-class="text-gray-50 border-b-2 border-gray-50" to="/trainers">trainers</router-link>
                </li>
                <li 
                    class="mx-1.5 my-6 font-bold text-xl uppercase text-gray-400 font-primary text-center hover:font-extrabold cursor-pointer transition-colors duration-300 hover:text-gray-200 focus:text-gray-200">
                    <router-link class="border-b-2 border-transparent pb-1" active-class="text-gray-50 border-b-2 border-gray-50" to="/products">products</router-link>    
                </li>
                <li 
                    class="mx-1.5 my-6 font-bold text-xl uppercase text-gray-400 font-primary text-center hover:font-extrabold cursor-pointer transition-colors duration-300 hover:text-gray-200 focus:text-gray-200">
                    <router-link class="border-b-2 border-transparent pb-1" active-class="text-gray-50 border-b-2 border-gray-50" to="/blogs">blogs</router-link>
                </li>
                <li 
                    class="mx-1.5 my-6 font-bold text-xl uppercase text-gray-400 font-primary text-center hover:font-extrabold cursor-pointer transition-colors duration-300 hover:text-gray-200 focus:text-gray-200">
                    <router-link class="flex items-center justify-center border-b-2 border-transparent pb-1" active-class="text-gray-50 border-b-2 border-gray-50" to="/myStore">
                        <span class="mr-1 text-base">cart</span>
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                        <span v-if="isCartEmpty" class="block h-2 w-2 rounded-full bg-red-600"></span>
                        <span v-else class="block h-2 w-2 rounded-full bg-transparent"></span>
                    </router-link>
                </li>
            </ul>
        </div>
        
    </section>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex';
import BrandLogo from './BrandLogo.vue'
export default {
    name : "navbar",
    components: { BrandLogo },
    props : ['scrolled'],
    data(){
        return {
            navListOpen: false,
        }
    },
    methods : {
        toggleNavList() {
            this.navListOpen = !this.navListOpen;
        },
    },
    computed : {
        ...mapGetters([
            'getCart',
            'getMembership'
        ]),
        isCartEmpty() {
            return this.getCart.length > 0 || this.getMembership.length > 0;
        }
    },
    // watch : {
    //     'this.$store'() {
    //         this.showCartStatus()
    //     }
    // },
    // mounted() {
    //     this.showCartStatus()
    // }
}
</script>

<style scoped>
    .showNav {
        left: 0;
    }
    .hideNav {
        left: 100%;
    }
    .list-icon {
        filter: invert(100%);
    }
</style>