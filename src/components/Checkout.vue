<template>
  <div class="z-20 fixed top-0 left-0 h-screen w-full flex justify-center items-center">
      <article class="relative h-4/5 w-4/5 bg-gray-100 px-4 flex flex-col overflow-y-auto max-w-xl">
            <section class="p-2 bg-gray-100 flex sticky justify-between items-center top-0 left-0 w-full shadow-sm">
                <img :src="require(`@/assets/logo.svg`)" class="h-10 w-10 object-cover">
                <button @click="close()" class="text-gray-800 font-primary text-4xl font-bold outline-none focus:outline-none">
                    &times;
                </button>
            </section>
            <strong class="font-heading font-light uppercase text-center mt-3 text-2xl text-gray-500">
                proceed to checkout
            </strong>
            <span class="font-primary capitalize text-center my-1.5 text-sm font-bold text-gray-900">
                {{string}}
            </span>
            <details>
                <summary class="flex items-center pl-2 py-1.5 w-full font-primary font-bold uppercase text-sm text-gray-100 bg-gray-800 cursor-pointer">
                    in your bag
                </summary>
                <section class="my-4">
                    <slot></slot>
                    <article class="flex my-2.5 items-center justify-between w-full text-sm">
                        <span class="text-gray-600 capitalize font-primary">
                        subtotal
                        </span>
                        <span class="text-gray-800 font-primary">
                        ${{subTotal.toFixed(2)}}
                        </span>
                    </article>
                    <article class="flex my-2.5 items-start justify-between w-full text-sm">
                        <span class="text-gray-600 capitalize font-primary">
                        estimated shipping and handling charges
                        </span>
                        <span class="text-gray-800 font-primary">
                        ${{handling}}
                        </span>
                    </article>
                    <article class="flex my-2.5 items-center justify-between w-full text-sm">
                        <span class="text-gray-600 capitalize font-primary">
                        tax <br>
                        <small class="text-xs text-gray-400">
                            taxed @ 5% FLAT
                        </small>
                        </span>
                        <span class="text-gray-800 font-primary">
                        ${{tax}}
                        </span>
                    </article>
                    <article class="flex items-center justify-between w-full my-4">
                        <span class="text-gray-600 capitalize font-primary font-bold">
                        total
                        </span>
                        <span class="text-gray-800 font-primary font-bold">
                        ${{billTotal}}
                        </span>
                    </article>
                </section>
            </details>

            <section class="border-2 border-t-0 border-gray-400 my-2.5 block">
                <strong class="block items-center pl-2 py-1.5 w-full font-primary font-bold uppercase text-sm text-gray-100 bg-gray-800">
                    billing details
                </strong>
                <form @submit.prevent="" autocomplete="off" class="w-full p-2 mx-auto">
                    <section class="flex flex-col md:flex-row">
                        <article class="relative w-full md:w-1/2 md:mr-1.5">
                            <input 
                                autocomplete="off" 
                                type="text" 
                                v-model="fname"
                                placeholder="First Name" 
                                class="w-full bg-transparent p-2.5 border-gray-300 border-2 my-1 rounded-md">
                            <small
                                :class="fname ? 'text-gray-400 opacity-100' : 'opacity-0'" 
                                class="absolute -top-1 left-3 bg-gray-100 font-bold font-primary">
                                First Name
                            </small>
                        </article>
                        <article class="relative w-full md:w-1/2">
                            <input 
                                autocomplete="off" 
                                type="text" 
                                v-model="lname"
                                placeholder="Last Name" 
                                class="w-full bg-transparent p-2.5 border-gray-300 border-2 my-1 rounded-md">
                            <small
                                :class="lname ? 'text-gray-400 opacity-100' : 'opacity-0'" 
                                class="absolute -top-1 left-3 bg-gray-100 font-bold font-primary">
                                Last Name
                            </small>
                        </article>
                    </section>
                    <article class="relative w-full my-1">
                        <input 
                            autocomplete="off" 
                            type="text" 
                            v-model="address"
                            placeholder="Address" 
                            class="w-full bg-transparent p-2.5 border-gray-300 border-2 my-1 rounded-md">
                        <small
                            :class="address ? 'text-gray-400 opacity-100' : 'opacity-0'" 
                            class="absolute -top-1 left-3 bg-gray-100 font-bold font-primary">
                            Address
                        </small>
                    </article>
                    <article class="relative w-full my-1">
                        <input 
                            autocomplete="off" 
                            type="text" 
                            v-model="city"
                            placeholder="City" 
                            class="w-full bg-transparent p-2.5 border-gray-300 border-2 my-1 rounded-md">
                        <small
                            :class="city ? 'text-gray-400 opacity-100' : 'opacity-0'" 
                            class="absolute -top-1 left-3 bg-gray-100 font-bold font-primary">
                            City
                        </small>
                    </article>
                    <article class="relative w-full my-1">
                        <input 
                            autocomplete="off" 
                            type="text" 
                            v-model="country"
                            placeholder="Country" 
                            class="w-full bg-transparent p-2.5 border-gray-300 border-2 my-1 rounded-md">
                        <small
                            :class="country ? 'text-gray-400 opacity-100' : 'opacity-0'" 
                            class="absolute -top-1 left-3 bg-gray-100 font-bold font-primary">
                            Country
                        </small>
                    </article>
                    <article class="relative w-full my-1">
                        <input 
                            autocomplete="off" 
                            type="text" 
                            v-model="pin"
                            placeholder="Pin" 
                            class="w-full bg-transparent p-2.5 border-gray-300 border-2 my-1 rounded-md">
                        <small
                            :class="pin ? 'text-gray-400 opacity-100' : 'opacity-0'" 
                            class="absolute -top-1 left-3 bg-gray-100 font-bold font-primary">
                            Pin
                        </small>
                    </article>
                    <article class="relative w-full my-1">
                        <input 
                            autocomplete="off" 
                            type="text" 
                            v-model="email"
                            placeholder="Email" 
                            class="w-full bg-transparent p-2.5 border-gray-300 border-2 my-1 rounded-md">
                        <small
                            :class="email ? 'text-gray-400 opacity-100' : 'opacity-0'" 
                            class="absolute -top-1 left-3 bg-gray-100 font-bold font-primary">
                            Email
                        </small>
                    </article>
                    <button 
                        :disabled="showBtn"
                        :class="showBtn ? 'cursor-pointer opacity-100' : 'cursor-not-allowed opacity-50'"
                        class="rounded-sm block my-3.5 mx-auto w-5/6 p-2.5 bg-gray-800 text-gray-200 font-primary uppercase font-bold text-sm">
                        continue
                    </button>
                </form>
            </section>
      </article>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    data() {
        return {
            lname : '', fname : '', address : '', city : '', phone : '', email: '', country : '',pin: ''
        }
    },
    props : ['string', 'close', 'tax', 'billTotal', 'subTotal', 'handling'],
    computed : {
        ...mapGetters([
            'getCart', 'getMembership'
        ]),
        showBtn() {
            return (this.lname.trim().length > 0) && 
            (this.fname.trim().length > 0) && (this.email.trim().length > 0) && 
            (this.address.trim().length > 0) && (this.city.trim().length > 0) && 
            (this.country.trim().length > 0) && (this.pin.trim().length > 0) 
        }
    }
}
</script>

<style scoped>
    article::-webkit-scrollbar {
        background-color: gray;
        width: 10px;
    }
    article::-webkit-scrollbar-thumb {
        background-color: darkgray;
        transition: all .5s ease;
    }
    article::-webkit-scrollbar-thumb:hover {
        background-color: gray;
    }
    div {
        background-image: linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75));
    }
    article > input:focus + small {
        opacity: 1;
    }
    article > input:focus::placeholder {
        opacity: 0;
    }
    article > small {
        transition: all .5s ease;
    }
</style>