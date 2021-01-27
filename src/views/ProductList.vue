<template>
  <div class="relative overflow-x-hidden bg-gray-800">
    <navbar :scrolled="scrolled"></navbar>
    <go-to-top :scrolled="scrolled" />
    <jumbotron :heading="`our store`" />
    <section class="my-4 p-3 flex flex-col md:flex-row-reverse md:items-start relative min-h-screen w-full md:w-5/6 mx-auto justify-between md:my-0">
        <section class="w-full md:w-3/4">
            <div class="flex justify-start items-center my-4 md:mt-0 md:ml-auto">
                <span class="text-xl text-gray-500 capitalize font-primary mr-1.5">
                    showing results
                </span>
                <span class="text-gray-200 font-primary text-xl capitalize">
                    {{currentProductList.length}} items
                </span>
            </div>
            <div class="flex flex-wrap justify-between">
                <product-thumbnail 
                    :key="product.id"
                    :product="product"
                    v-for="product in currentProductList" />
            </div>
            <div class="flex justify-center items-center h-48">
                <button 
                    @click="toggleListLength()"
                    class="text-gray-200 uppercase border-b-2 border-current outline-none font-primary font-semibold pb-0.5 focus:outline-none">
                    {{showAll ? "show less" : "more products"}}
                </button>
            </div>
        </section>
        <section class="w-full md:w-1/4 md:sticky top-0 px-4">
            <div>
                <strong class="font-heading uppercase font-light text-3xl text-gray-200 block">
                    categories
                </strong>
                <ul class="my-2">
                    <li 
                        :class="category === cat ? 'text-gray-300 font-semibold' : 'text-gray-500'"
                        class="flex justify-between items-between my-1.5"
                        v-for="cat in Object.keys(categories)" :key="cat">
                        <span class="uppercase" @click="selectCategory(cat)">
                            {{cat}}
                        </span>
                        <span class="pr-4">
                            {{categories[cat]}}
                        </span>
                    </li>
                    <li 
                        @click="clearFilter()"
                        v-if="category !=='all'" 
                        class="text-gray-300 font-semibold flex justify-between items-between my-1.5">
                        <span class="uppercase" @click="selectCategory(cat)">
                            clear filter
                        </span>
                        <span class="pr-4 cursor-pointer transform hover:scale-105" >
                            &times;
                        </span>
                    </li>
                </ul>
            </div>
            <div class="my-6">
                <strong class="font-heading uppercase font-light text-3xl text-gray-200 block">
                    filter by price
                </strong>
                <vue-slider 
                    class="my-8"
                    :min="min"
                    :max="max"
                    :width="'100%'"
                    v-model="price" 
                    :enable-cross="false"/>
                <strong class="text-gray-400 block">
                    Price ranging from {{price[0]}} to {{price[1]}}
                </strong>
            </div>
            <div>
                <strong class="font-heading uppercase font-light text-3xl bg-gray-300 flex flex-col items-center mb-4">
                    <brand-logo/> 
                    <span>assurance</span>
                </strong>
                <p class="text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates aliquam recusandae, est, ea ratione quia consequatur tempora rerum deserunt sint repellat error nam minus maxime saepe quidem et iste dicta inventore quaerat eligendi doloribus molestiae minima. Laboriosam laudantium fugit saepe veniam suscipit minus magnam possimus magni, repellat commodi odio distinctio!
                </p>
            </div>
        </section>
    </section>
    <footer-component />
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component';
import GoToTop from '../components/GoToTop.vue'
import Jumbotron from '../components/Jumbotron.vue'
import Navbar from '../components/Navbar.vue'
import productData from '../assets/mockDB/products.json'
import FooterComponent from '../components/FooterComponent.vue'
import ProductThumbnail from '../components/ProductThumbnail.vue'
import 'vue-slider-component/theme/default.css'
import BrandLogo from '../components/BrandLogo.vue';

export default {
    components: { Navbar, GoToTop, Jumbotron, FooterComponent, ProductThumbnail, VueSlider, BrandLogo },
    props : ['scrolled'],
    data() {
        return {
            products : productData,
            end: 5,
            showAll : false,
            max : 200, 
            min : 0,
            categories : {},
            category : 'all',
            price : [0, 200]
        }
    },
    methods : {
        toggleListLength() {
            this.showAll = !this.showAll;
            this.end = this.showAll ? this.products.length : 5; 
        },
        selectCategory(category) {
            this.category = category;
        },
        clearFilter() {
            this.category = 'all';
        }
    },
    computed : {
        currentProductList() {
            if(this.category !== 'all') {
                return this.products.filter((product) => {
                    if(product.categories.includes(this.category)){
                        return product;
                    }
                })
                .filter(item => item.price >= this.price[0] && item.price <= this.price[1])
                .slice(0, this.end);
            }
            else {
                return this.products.slice(0, this.end);
            }
        }
    },
    mounted() {
        // set categories
        let catSet = {};
        this.products.forEach(({categories}) => {
            categories.forEach(category => {
                if(Object.keys(catSet).includes(category)) {
                    catSet[category] += 1
                }else {
                    catSet[category] = 1
                }
            })
        })
        this.categories = {...catSet}
    },
    watch : {
        price() {
            this.products = productData.filter(el => Number(el.price) >= this.price[0] && Number(el.price) <= this.price[1])
        }
    }
}
</script>

<style>

</style>