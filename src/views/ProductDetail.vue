<template>
  <section 
    class="relative overflow-x-hidden bg-gray-800">
    <navbar :scrolled="scrolled"></navbar>
    <go-to-top :scrolled="scrolled" />
    <jumbotron :heading="'our store'"/>
    <section 
        v-if="product"
        :key="product.id"
        id="product"
        class="flex flex-col md:flex-row max-w-6xl mx-auto">
        <h1 class="text-gray-50 font-heading text-center my-4 font-light text-3xl md:mt-0 capitalize">
                {{product.title}}
            </h1>
        <div class="flex flex-col w-full md:1/2">
            <img 
                class="w-11/12 mx-auto h-96 object-cover"
                :src="product.images[currentImage]" 
                :alt="product.title">
            <div class="flex my-4 justify-center">
                <img 
                    @click="selectImage(index)"
                    :class="`w-1/${product.images.length + 1} transition-all transform mx-1.5 border-4 ${currentImage === index ? 'border-gray-200' : 'border-gray-500'} p-1.5`"
                    :src="img" 
                    v-for="(img, index) in product.images" :key="index">
            </div>
        </div>
        <div class="p-4 w-full md:1/2 md:pt-0">
            <h1 class="text-gray-300 font-heading font-light text-2xl my-2 md:mt-0 capitalize">
                {{product.title}}
            </h1>

            <p class="text-gray-500 font-primary capitalize w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, aspernatur libero neque sint sunt provident tenetur consequuntur officiis deserunt voluptatum quos, voluptates dolores repellat? Aliquid, cupiditate. Nihil quod quisquam excepturi iure dolorum nemo maiores similique molestias in magnam repellendus nisi, porro ipsam totam, iste fugit, consequatur corrupti. Nulla, expedita. Ipsum.
            </p>

            <strong class="text-gray-50 font-light my-4 block text-3xl font-heading">
                ${{total}}
            </strong>

            <div
                v-if="!itemInCart" 
                :key="product.id"
                class="flex items-center text-gray-50">
                <button
                    @click="add" 
                    class="py-4 px-6 justify-center w-full font-primary uppercase flex items-center border-2 border-gray-600 hover:bg-gray-200 hover:text-gray-800">
                    <span class="font-bold">
                        add to cart
                    </span>
                    <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                </button>
            </div>
            <div v-else class="flex flex-col w-full">
                <button
                    :key="product.id"
                    @click="remove"
                    @mouseenter="() => removeBtnHovered = !removeBtnHovered"
                    @mouseleave="() => removeBtnHovered = !removeBtnHovered" 
                    class="outline-none focus:outline-none justify-center w-full bg-gray-200 py-2.5 px-4 font-primary uppercase text-xs font-bold rounded-sm">
                        <div class="flex items-center text-green-700 justify-center w-full" v-if="!removeBtnHovered">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span class="text-sm">
                                item added to cart
                            </span>
                        </div>
                        <div class="flex items-center text-red-600 justify-center w-full" v-else>
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            <span class="text-sm">
                                remove item from cart
                            </span>
                        </div>
                </button>
                <router-link to="/myStore" class="bg-gray-200 mt-2 p-2.5 block text-center text-gray-700 uppercase font-primary text-sm font-bold hover:text-green-700">
                    go to my cart
                </router-link>
            </div>

            <ul class="h-48 flex flex-col justify-center pr-8">
                <li class="flex w-full mr-auto justify-between items-center my-2">
                    <span class="text-gray-500 uppercase font-primary">
                        sku
                    </span>
                    <span class="text-gray-200 capitalize font-primary ml-4">
                        n/a
                    </span>
                </li>
                <li class="flex w-full mr-auto justify-between items-center my-2">
                    <span class="text-gray-500 uppercase font-primary">
                        categories
                    </span>
                    <div class="text-gray-200 capitalize font-primary ml-4">
                        <span v-for="cat in product.categories" :key="cat" class="mx-1 bg-gray-600 p-1 rounded-sm text-gray-200 cursor-default">
                            {{cat}}
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    <section class="max-w-6xl w-full my-12 mx-auto">
        <details class="w-full outline-none focus:outline-none">
            <summary class="flex flex-col w-full items-center outline-none focus:outline-none cursor-pointer transform hover:scale-105">
                <strong class="text-gray-200 font-heading uppercase text-3xl font-light block">
                    Reviews ({{reviews.length}})
                </strong>
                <ul class="flex items-center justify-center" 
                :title="`${reviewAverage} out of 5`">
                    <li class="text-3xl" :class="reviewAverage >=1 ? 'text-yellow-500' : 'text-gray-600'">
                        &starf;
                    </li>  
                    <li class="text-3xl" :class="reviewAverage >=2 ? 'text-yellow-500' : 'text-gray-600'">
                        &starf;
                    </li>  
                    <li class="text-3xl" :class="reviewAverage >=3 ? 'text-yellow-500' : 'text-gray-600'">
                        &starf;
                    </li>  
                    <li class="text-3xl" :class="reviewAverage >=4 ? 'text-yellow-500' : 'text-gray-600'">
                        &starf;
                    </li>  
                    <li class="text-3xl" :class="reviewAverage >=5 ? 'text-yellow-500' : 'text-gray-600'">
                        &starf;
                    </li>  
                </ul>
            </summary>
            <div class="flex flex-wrap">
                <client-component 
                    :data="review" 
                    :key="review.id"
                    v-for="review in reviews" />
            </div>
        </details>
    </section>
    <section class="max-w-6xl mx-auto">
        <strong class="text-gray-200 font-heading uppercase text-3xl font-light mt-12 block pl-8">
            related products
        </strong>
        <div class="flex flex-wrap mb-8 px-4">
            <product-thumbnail :product="product" v-for="product in related" :key="product.id" />
        </div>
    </section>
    <footer-component />
  </section>
</template>

<script>
import GoToTop from '../components/GoToTop.vue'
import Jumbotron from '../components/Jumbotron.vue'
import Navbar from '../components/Navbar.vue'
import productData from '../assets/mockDB/products.json';
import reviewData from '../assets/mockDB/reviews.json';
import FooterComponent from '../components/FooterComponent.vue';
import ProductThumbnail from '../components/ProductThumbnail.vue';
import ClientComponent from '../components/ClientComponent.vue';

import {mapActions} from 'vuex';

export default {
    components: { Navbar,FooterComponent, GoToTop, Jumbotron, ProductThumbnail, ClientComponent },
    props : ['scrolled'],
    data(){
        return {
            product : {},
            currentImage : 0,
            itemInCart : false,
            removeBtnHovered: false
        }
    },
    computed : {
        total() {
            return (this.product.price).toFixed(2)
        },
        related() {
            return productData.filter(el => {
              if(el.id.toString() !== this.product.id.toString()){
                  return el;
              }  
            }).slice(0,4);
        },
        reviews() {
            return reviewData.filter(revs => {
                if(this.product.reviews.includes(revs.id)){
                    return revs;
                }
            })
        },
        reviewAverage() {
            return this.reviews.reduce((acc, cur) => {
                return acc + Number(cur.rating)
            }, 0)/this.reviews.length;
        }
    },
    methods : {
        ...mapActions([
            'addToCart',
            'removeFromCart',
        ]),
        add() {
            this.addToCart(this.product);
            this.checkItemInCart();
        },
        remove() {
            this.removeFromCart(this.product);
            this.checkItemInCart();
        },
        selectImage(index) {
            this.currentImage = index;
        },
        checkItemInCart(){
            const cart = this.$store.getters.getCart;
            const cartItem = cart.find(el => (el.id) == this.$route.params.id);
            this.itemInCart = cartItem ? true : false;
        },
        setProduct() {
            const data = productData.find(el => el.id.toString() === this.$route.params.id);
            if(!data) {
                this.$router.push({
                    name: "Error",
                })
            }
            else {
                this.product = data;
            }
        },
    },
    beforeMount(){
        this.setProduct();
        this.checkItemInCart();
    },
    mounted() {
        document.getElementById("product").scrollIntoView();
    },
    watch : {
        '$route'() {
            document.getElementById("product").scrollIntoView();
            this.setProduct();
            this.checkItemInCart();
        }
    }
}
</script>
