<template>
<section class="w-full my-12 flex flex-wrap">
  <article
    :key="index"
    v-for="(image, index) in images" 
    class="relative h-60 flex justify-center items-center overflow-hidden w-1/2 sm:w-1/3 md:w1/4 xl:w-1/6">
      <button 
        class="z-10 text-gray-300 opacity-0 outline-none focus:outline-none" 
        @click="openModal(index)">
        <svg class="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
      </button>
      <img 
        :src="image"
        class="absolute top-0 left-0 block w-full object-cover h-full" 
        alt="">
      <div class="absolute top-0 left-0 w-full h-full bg-gray-700 opacity-60">
      </div>
  </article>
  
  <div
    :class="fullscreen ? 'scale-100': 'scale-0'" 
    class="fixed transition-all transform duration-700 top-0 h-full w-full z-10 flex flex-col justify-center items-center">
    <div class="bg-gray-800 z-10 absolute top-0 left-0 h-full w-full opacity-90"></div>
    <button @click="toggleModal()" 
      class="absolute top-4 right-4 text-4xl text-gray-300 z-10 hover:text-gray-200 outline-none focus:outline-none">
      &times;
    </button>
    <div class="flex items-center my-4 z-20 w-1/6 mx-auto justify-between">
      <button 
        @click="previous()"
        class="text-gray-400 outline-none focus:outline-none hover:scale-110 hover:text-gray-100 transform duration-700 transition-all">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <button
        @click="next()" 
        class="text-gray-400 outline-none focus:outline-none hover:scale-110 hover:text-gray-100 transform duration-700 transition-all">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 5l7 7-7 7"></path></svg>
      </button>
    </div>
    <img :src="images[currentImg]" :key="currentImg" 
      class="w-5/6 max-w-5xl h-1/2 md:h-5/6 object-cover md:object-contain object-center rounded-md z-20 ">
  </div>

</section>
</template>

<script>
export default {
  name: 'GalleryView',
  data() {
    return {
      currentImg:0,
      fullscreen : false,
      images : [
        'https://i.ibb.co/12MRj24/1.jpg',
        'https://i.ibb.co/YQJSM41/2.jpg',
        'https://i.ibb.co/84FMPRF/3.jpg',
        'https://i.ibb.co/TY90BGd/4.jpg',
        'https://i.ibb.co/M13ScKW/5.jpg',
        'https://i.ibb.co/Qn2Rb0x/6.jpg',
        'https://i.ibb.co/S6R13B3/7.jpg',
        'https://i.ibb.co/6sWBFCm/8.jpg',
        'https://i.ibb.co/1Gdyj21/9.jpg',
        'https://i.ibb.co/84mn6HT/10.jpg',
        'https://i.ibb.co/RzKpmPQ/11.jpg',
        'https://i.ibb.co/xhm08pt/12.jpg',
      ]
    }
  },
  methods : {
    openModal(index){
      this.currentImg = index;
      this.toggleModal();
    },
    toggleModal() {
      this.fullscreen = !this.fullscreen
    },
    next() {
      if(this.currentImg === this.images.length - 1) {
        this.currentImg = 0;
      }
      else {
        this.currentImg++;
      }
    },
    previous() {
      if(this.currentImg === 0) {
        this.currentImg = this.images.length - 1;
      }
      else {
        this.currentImg--;
      }
    }
  }
}
</script>


<style scoped>
  article > div, article > button, article > img {
    transform-origin: center;
    transition: all 1s ease;
  }
  article:hover > button {
    opacity: 1;
  }
  article:hover > div {
    transform: scale(0);
  }
  article:hover > img {
    filter: blur(2px) grayscale(80%);
  }
</style>