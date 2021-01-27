<template>
  <div class="relative overflow-x-hidden bg-gray-800">
    <navbar :scrolled="scrolled"></navbar>
    <landing-hero />
    <go-to-top :scrolled="scrolled" />
    <landing-about/>
    <h3 class="font-heading uppercase text-4xl my-8 text-center">
      <span class="text-gray-400 opacity-75">check out&nbsp;</span>
      <span class="text-gray-100">our gallery</span>
    </h3>
    <gallery-view/>
    <why-us />
    <div class="h-60 flex flex-col justify-center items-center p-6">
      <h3 class="font-heading text-center uppercase text-5xl md:text-7xl my-8">
          <span class="text-gray-400 opacity-75">membership&nbsp;</span>
          <span class="text-gray-100">plans</span>
      </h3>
      <p class="text-gray-500 capitalize max-w-prose text-lg text-center md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vitae architecto consectetur reprehenderit esse atque!
      </p>
    </div>
    <div class="flex flex-col lg:flex-row justify-center lg:justify-around">
      <membership-card 
        @modal="modalStat"
        v-for="({id,price, theme, image}) in memberships" :key="id" :price="price" :theme="theme" :image="image" :cat="id"/>
    </div>
    <div class="h-84 flex flex-col justify-center items-center p-6">
      <h3 class="font-heading uppercase text-5xl md:text-7xl my-8">
          <span class="text-gray-400 opacity-75">our&nbsp;</span>
          <span class="text-gray-100">trainers</span>
      </h3>
      <p class="text-gray-500 capitalize max-w-prose text-lg text-center md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vitae architecto consectetur reprehenderit esse atque!
      </p>
    </div>
    <membership-modal v-if="showModal" :id="membershipID" :close="closeModal"/>
    <trainer-list />
    <bMI />
    <h3 class="font-heading uppercase text-center text-5xl md:text-7xl my-8">
      <span class="text-gray-400 opacity-75">featured&nbsp;</span>
      <span class="text-gray-100">blogs</span>
    </h3>
    <div class="flex flex-wrap items-center justify-center">
      <blog-thumbnail 
        v-for="blog in blogs"
        class="w-full max-w-md m-1"
        :key="blog.id"
        :image="blog.image"
        :title="blog.title"
        :date="blog.date | formatDate"
        :id="blog.id"/>
    </div>
    <div class="flex justify-center items-center h-40">
        <router-link
          class="px-6 py-2 font-primary uppercase text-lg font-bold border-4 text-gray-400 border-gray-400 hover:bg-gray-200 hover:border-gray-200 hover:text-gray-800" 
          to="/blogs">
          see all blogs
        </router-link>
    </div>
    <client-home />
    <footer-component />
  </div>
</template>

<script>
import LandingHero from '../components/LandingHero.vue';
import Navbar from '../components/Navbar.vue';
import GoToTop from '../components/GoToTop.vue';
import LandingAbout from '../components/LandingAbout.vue';
import GalleryView from '../components/GalleryView.vue';
import FooterComponent from '../components/FooterComponent.vue';
import TrainerList from '../components/TrainerList.vue';
import WhyUs from '../components/WhyUs.vue';
import BMI from '../components/BMI.vue';
import ClientHome from '../components/ClientHome.vue';
import MembershipCard from '../components/MembershipCard.vue';
import MembershipModal from '../components/MembershipModal.vue';

import blogData from '../assets/mockDB/blogs.json'
import membership from '../assets/mockDB/membership.json'
import BlogThumbnail from '../components/BlogThumbail.vue';

export default {
  components: { 
    Navbar, 
    LandingHero, 
    GoToTop, 
    LandingAbout, 
    GalleryView, 
    FooterComponent, 
    TrainerList, 
    WhyUs, 
    BMI, 
    ClientHome,
    MembershipCard,
    MembershipModal,
    BlogThumbnail
  },
  name: "Home",
  props : ['scrolled'],
  data() {
    return {
      showModal : false,
      membershipID : null
    }
  },
  computed : {
    memberships() {
      return membership
    },
    blogs() {
      return blogData.slice(0,2);
    }
  },
  methods : {
    closeModal() {
      this.showModal = false;
      this.membershipID = null;
    },
    modalStat(event) {
      this.membershipID = event;
      this.showModal = !this.showModal;
    }
  },
  filters : {
    formatDate(date) {
      const months = [
          "jan", "feb", "mar", "apr", "may", "june", "july","aug","sep",
          "oct", "nov","dec"
      ]
      return new Date(date).getDate() + " " + months[new Date(date).getMonth()]
    }
  }
}
</script>
