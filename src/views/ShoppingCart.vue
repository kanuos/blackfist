<template>
<div class="relative overflow-x-hidden bg-gray-100 pb-20 lg:pb-0">
  <go-to-top :scrolled="scrolled"/>
  <checkout
    v-if="modalOpen && (getCart.length > 0 || getMembership.length > 0)"
    :close ="toggleModal"  
    :billTotal="billTotal"
    :tax="tax"
    :subTotal="subTotal"
    :handling="handlingCharges"
    :string="`${getMembership.length + getCart.length} item ${(getMembership.length + getCart.length) > 1 ? '(s)' : '' } | ${billTotal}`">
      <cart-membership 
        v-if="cartMembershipItem"
        :title="cartMembershipItem.id"
        :price="cartMembershipItem.price"
        :theme="cartMembershipItem.theme"
        :image="cartMembershipItem.image" />
      <cart-item-thumb 
        v-for="item in cartItems" 
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :categories="item.categories"
        :price="item.price"
        :image="item.image"/>
  </checkout>
  <div class="flex flex-col lg:flex-row max-w-7xl pt-16 pb-5 mx-auto lg:items-start">
    <div class="w-full lg:w-2/3">
      <section class="w-full flex flex-col justify-center items-center">
        <brand-logo />
        <strong>
            {{getMembership.length + getCart.length}} item {{(getMembership.length + getCart.length) > 1 ? '(s)' : '' }} In Cart | ${{billTotal}}
        </strong>
        <router-link to="/products" class="text-gray-500 border-b-2 border-transparent hover:text-gray-600 text-sm font-primary uppercase my-2 hover:border-current lg:hidden">
          continue shopping
        </router-link>
      </section>

      <article class="w-11/12 max-w-prose mx-auto flex flex-col items-center my-4 py-1.5  border-2 border-gray-500">
        <strong class="text-red-500 font-primary font-semibold text-2xl capitalize">
          free shipping for members
        </strong>
        <small class="text-gray-500 text-center text-base">
          Become a blackFit member for a fast and free shipping. 
        </small>
      </article>

      <section v-if="getMembership.length > 0">
        <h2 class="text-gray-600 font-heading text-center text-xl my-4 capitalize">
            My membership
        </h2>
        <p class="text-gray-200 font-primary text-lg my-2 w-11/12 md:w-3/4 mx-auto">
            <cart-membership 
              :title="cartMembershipItem.id"
              :price="cartMembershipItem.price"
              :theme="cartMembershipItem.theme"
              :image="cartMembershipItem.image" />
        </p>
      </section>
      <section v-if="getCart.length > 0">
        <h2 class="text-gray-600 font-heading text-center text-xl my-4 capitalize">
            My products
        </h2>
        <transition-group name="cart" class="text-gray-200" tag="p">
          <cart-item-thumb 
            v-for="item in cartItems" 
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :categories="item.categories"
            :price="item.price"
            :image="item.image"/>
        </transition-group>
      </section>
    </div>
    <section class="w-11/12 mx-auto lg:w-1/3 lg:min-h-screen lg:px-5 flex flex-col items-start justify-start">
      <strong class="mt-6 font-heading text-2xl font-light text-gray-500 uppercase">
        summary
      </strong>
      <strong v-if="parseFloat(billTotal) === 0" class="text-gray-700 font-primary my-2 capitalize">
        your cart is empty
      </strong>
      <small class="text-gray-400 block mb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere necessitatibus provident, repellendus eaque in accusantium.
      </small>
      <div class="flex my-0.5 items-center justify-between w-full">
        <span class="text-gray-600 capitalize font-primary">
          subtotal
        </span>
        <span class="text-gray-800 font-primary">
          ${{subTotal.toFixed(2)}}
        </span>
      </div>
      <div class="flex my-0.5 items-start justify-between w-full">
        <span class="text-gray-600 capitalize font-primary">
          estimated shipping and handling charges
          <br>
          <small class="text-xs text-gray-400">Handling charges exempted for purchase over $50.00</small>
        </span>
        <span class="text-gray-800 font-primary" v-if="handlingCharges > 0">
          ${{handlingCharges}}
        </span>
      </div>
      <div class="flex my-0.5 items-center justify-between w-full">
        <span class="text-gray-600 capitalize font-primary">
          tax <br>
          <small class="text-xs text-gray-400">
            taxed @ 5% FLAT
          </small>
        </span>
        <span class="text-gray-800 font-primary">
          ${{tax}}
        </span>
      </div>
      <div class="flex items-center justify-between w-full my-4">
        <span class="text-gray-600 capitalize font-primary font-bold">
          total
        </span>
        <span class="text-gray-800 font-primary font-bold">
          ${{billTotal}}
        </span>
      </div>
      <button
        @click="toggleModal()"
        :disabled="subTotal === 0"
        :class="subTotal > 0 ? '' : 'opacity-30 cursor-not-allowed'" 
        class="py-4  my-2 w-full mx-auto bg-gray-800 text-gray-300 font-primary font-bold uppercase text-center hidden lg:block rounded-3xl outline-none focus:outline-none hover:shadow-lg hover:text-white hover:bg-gray-900">
        proceed to checkout
      </button>
      <span class="text-gray-400 text-center hidden lg:block w-full uppercase">
        or
      </span>
      <router-link to="/products"
        class="py-4 my-2 w-full mx-auto bg-gray-800 text-gray-300 font-primary font-bold uppercase text-center hidden lg:block rounded-3xl outline-none focus:outline-none hover:shadow-lg hover:text-white hover:bg-gray-900">
        continue shopping
      </router-link>
    </section>
  </div>
  <article class="fixed bottom-0 left-0 w-full lg:hidden bg-gray-200 p-4 flex items-center justify-center">
    <button
      @click="toggleModal()"
      :disabled="subTotal === 0"
      :class="subTotal > 0 ? '' : 'opacity-30 cursor-not-allowed'" 
      class="py-4 w-5/6 mx-auto bg-gray-800 text-gray-300 font-primary font-bold uppercase text-center block rounded-3xl outline-none focus:outline-none hover:shadow-lg hover:text-white hover:bg-gray-900">
      proceed to checkout
    </button>
  </article>
  <footer-component />
</div>
</template>

<script>
import {mapGetters} from 'vuex';
import GoToTop from '../components/GoToTop.vue';
import productData from '../assets/mockDB/products.json';
import CartItemThumb from '../components/CartItemThumb.vue';
import BrandLogo from '../components/BrandLogo.vue';
import CartMembership from '../components/CartMembership.vue';
import membershipData from '../assets/mockDB/membership.json';
import FooterComponent from '../components/FooterComponent.vue';
import Checkout from '../components/Checkout.vue';


export default {
  components: { GoToTop, CartItemThumb, BrandLogo, CartMembership, FooterComponent, Checkout },
    name : "cart",
    props : ['scrolled'],
    data() {
      return {
        modalOpen : false,
      }
    },
    computed : {
      ...mapGetters([
          'getCart',
          'getMembership',
      ]),
      cartItems() {
        let arr = [];
        this.getCart.forEach((product) => {
          const item = productData.find(el => el.id === product.id);
          if(item) {
            item.image = item.images[0]
            item.qty = product.qty;
            arr.push(item);
          }
        })
        return arr;
      },
      cartMembershipItem() {
        const id = this.getMembership[0];
        return membershipData.find(el => el.id === id)
      },
      getMembershipTotal() {
        return this.getMembership.length > 0 ? this.getMembership[0].price : 0;
      },
      getCartTotal() {
        return this.getCart.reduce((acc, cur) => {
          return acc + (this.getCartItemPrice(cur.id) * cur.qty)
        }, 0)
      },
      subTotal() {
        if(this.getMembership.length > 0) {
          const membershipAmount = membershipData.find(el => el.id === this.getMembership[0]).price;
          return membershipAmount + this.getCartTotal;
        }  
        return this.getCartTotal; 
      },
      handlingCharges() {
        if(this.subTotal < 50) {
          return (this.subTotal * 4 / 100).toFixed(2);
        }  
        return 0; 
      },
      tax() {  
        return (this.subTotal * 5 / 100).toFixed(2); 
      },
      billTotal(){
        return (parseFloat(this.subTotal) + parseFloat(this.tax) + parseFloat(this.handlingCharges)).toFixed(2);
      }
    },
    methods : {
      getCartItemPrice(itemID) {
        const element = productData.find(el => el.id === itemID);
        return Number(element.price);
      },
      toggleModal() {
        this.modalOpen = ! this.modalOpen;
      }
    },
    mounted() {
      document.documentElement.scrollTo(0,0);
    }
}
</script>

<style scoped>
  .cart-enter-from, .cart-leave-to, .cart-move {
    opacity: 0;
    transform: scale(0);
    transform-origin: center;
  }
  .cart-enter-active, .cart-leave-active {
    transition: all .5s ease;
  }
</style>