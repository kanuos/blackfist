<template>
  <div class="relative overflow-x-hidden bg-gray-800">
    <section 
      :class="showModal ? 'h-screen' : 'h-0' "
      class="modal z-40 fixed top-0 left-0 w-full flex flex-col justify-center items-center transform origin-top transition-all">
        <button
          :class="showModal ? 'block' : 'hidden'" 
          @click="toggleModal()" class="absolute top-8 right-8 outline-none focus:outline-none text-4xl text-gray-400 hover:text-gray-100 transform hover:scale-110">
          &times;
        </button>
        <img
          :class="showModal ? 'block' : 'hidden'"
          class="h-3/4 w-1/4 object-contain object-top border-4 border-gray-100" 
          :src="require(`@/assets/trainers/${trainer.image}`)" />
        <span
          :class="showModal ? 'block' : 'hidden'" 
          class="text-gray-100 capitalize font-primary font-light text-center my-2 italic">
          {{trainer.name}}
        </span>
        <small :class="showModal ? 'block' : 'hidden'" 
          class="text-gray-400 capitalize px-2 border-l-4 border-gray-400 max-w-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quidem eveniet et facilis modi corporis, a magnam maiores laboriosam in similique, minus veritatis rem quam?
        </small>
    </section>
    <navbar :scrolled="scrolled"></navbar>
    <go-to-top :scrolled="scrolled"></go-to-top>
    <jumbotron 
      heading="our trainers" 
      url="Trainers"
      desc="Our team comprises the finest trainers from across the globe."/>
      <div id="trainer" class="flex flex-col-reverse w-full h-full relative">
        <img 
          :src="require(`@/assets/trainers/${trainer.image}`)" 
          class="hidden md:block z-0 absolute top-0 left-0 opacity-20">
        <trainer-list />
        <strong class="text-center font-light cursor-default text-gray-300 font-heading uppercase text-4xl my-12">
          other instructors
        </strong>
        <appointment class="z-10"/>
        <article
          class="mb-8"
          v-if="trainer">
          <section class="sm:flex md:flex-row-reverse max-w-4xl mx-auto justify-center items-center md:mb-4 lg:flex-col-reverse">
            <div class="md:1/2 relative lg:w-full flex items-center justify-center">
              <button class="absolute top-3 left-2/3 transform translate-x-1/3 z-20 hidden lg:block text-gray-400 transition-all duration-200 outline-none focus:outline-none hover:scale-110 hover:text-gray-100" @click="toggleModal()">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
              </button>
              <img 
                class="leftImg transform transition-all duration-300 absolute -left-10 z-0 hidden w-0 h-0 lg:block lg:h-72 lg:w-72 md:object-cover object-top pointer-events-none lg:border-8 border-gray-200 lg:rounded-md animate-pulse"
                :src="require(`@/assets/trainers/${trainer.image}`)" :alt="trainer.name">
              <img 
                class="z-10 block w-full object-cover mx-auto lg:h-96 lg:w-96 md:object-contain pointer-events-none lg:border-8 md:mr-auto border-gray-200 lg:rounded-md"
                :src="require(`@/assets/trainers/${trainer.image}`)" :alt="trainer.name">
              <img 
                class="rightImg transform transition-all duration-300 absolute -right-10 z-0 hidden w-0 h-0 lg:block lg:h-72 lg:w-72 md:object-cover object-top pointer-events-none lg:border-8 border-gray-200 lg:rounded-md animate-pulse"
                :src="require(`@/assets/trainers/${trainer.image}`)" :alt="trainer.name">
            </div>
            <div class="z-10 max-w-prose md:w-3/5 w-full mx-auto px-6 md:flex flex-col items-center">
              <h1 class="text-5xl font-heading text-gray-200 uppercase w-min my-6 md:w-max">
                {{trainer.name}}
              </h1>
              <ul class="flex items-center my-6">
                  <li class="h-6 w-6 m-2">
                      <img
                      src="@/assets/ig.svg" class="social">
                  </li>
                  <li>
                      <svg class="w-8 h-8 text-white hover:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path></svg>
                  </li>
                  <li class="h-6 w-6 m-2">
                      <img
                      src="@/assets/in.svg" class="social">
                  </li>
              </ul>
              <ul class="mb-12">
                <li class="flex items-center w-full justify-between">
                  <strong class="text-gray-500 text-lg capitalize font-normal">
                    speciality
                  </strong>
                  <ul class="flex font-primary capitalize">
                    <li v-for="(speciality, index) in trainer.speciality" :key="index" v-text="speciality" class="mx-1 px-2 py-1 bg-gray-500 text-gray-200 rounded-md font-semibold">
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>
          <dummy-body class="z-10 px-4 text-gray-50"/>
          <dummy-quote class="z-10 w-11/12 mx-auto"/>
          <p class="px-4 font-primary text-gray-500 mx-auto max-w-2xl md:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, modi rem. Odio pariatur in distinctio eum magnam voluptatem nobis nisi laborum iure cum necessitatibus, labore libero nemo facilis quasi. Aspernatur id fugiat dolorem atque vitae exercitationem laborum architecto recusandae sapiente fuga ratione praesentium rerum libero blanditiis sunt culpa placeat quam quidem, harum soluta aperiam modi est perspiciatis deleniti. 
            </p>
        </article>
      </div>
    <footer-component class="mt-36"/>
  </div>
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue'
import GoToTop from '../components/GoToTop.vue'
import Jumbotron from '../components/Jumbotron.vue'
import Navbar from '../components/Navbar.vue'
import TrainerList from '../components/TrainerList.vue'
import trainerData from '../assets/mockDB/trainers.json'
import DummyBody from '../components/DummyBody.vue'
import Appointment from '../components/Appointment.vue'
import DummyQuote from '../components/DummyQuote.vue'
export default {
    name : "Trainers",
    components: { Navbar, GoToTop, FooterComponent, Jumbotron, TrainerList, DummyBody, Appointment, DummyQuote },
    props : ['scrolled'],
    data() {
      return {
        showBgImage : true,
        showModal : false,
        trainer : {},
      }
    },
    methods : {
      toggleModal() {
        this.showModal = !this.showModal;
      },
      setTrainer() {
        const id = this.$route.query.t_id
        if(!id) {
          this.trainer =trainerData.find(el => el.id === 1);
          return;
        }
        const trainerProfile = trainerData.find(el => el.id.toString() === id);
        if(!trainerProfile){
            this.$router.replace({
              name: "Error"
            })      
        }
        else {
          this.trainer = trainerProfile
        }
      }
    },
    mounted() {
      this.setTrainer();
      console.clear();
      document.documentElement.scrollTo(0,0);
      window.addEventListener('resize', ()=> {
        this.showBgImage = (window.innerWidth >= 768);
      })
    },
    watch : {
      '$route'() {
        this.setTrainer();
        document.getElementById("trainer").scrollIntoView();
      }
    }
}
</script>

<style scoped>
  .social {
    filter: invert(100%);
  }
  .social:hover {
    filter: invert(40%);
  }
  .leftImg {
    opacity: .3;
    transform: rotateY(180deg);
    filter: grayscale(100%);
  }
  .rightImg {
    opacity: .3;
    filter: sepia(100%);
  }
  .modal {
    background-color: rgba(0,0,0,.75);
  }
</style>