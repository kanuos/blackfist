<template>
  <div class="relative overflow-x-hidden bg-gray-800">
    <navbar :scrolled="scrolled"/>
    <go-to-top :scrolled="scrolled"/>
    <jumbotron 
      heading="about us" 
      :desc="`Want to be healthy and have a perfect body? BLACKFIT is the right decision for you! It will create your personal training program and balance your diet so you could get the `"/>
    <p class="text-gray-500 font-primary text-lg my-2 w-11/12 md:w-3/4 mx-auto">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, excepturi culpa, cum consectetur vel deleniti nisi numquam nobis id consequatur voluptatem odio sapiente, quidem maxime ut fugiat at illo rem nam molestias. Eos voluptas sint nobis, quae recusandae, explicabo, doloribus animi labore libero voluptates soluta incidunt? Laudantium deserunt quo distinctio beatae molestias architecto quia id impedit unde tempora a totam hic praesentium atque, ad officia quod quidem at corrupti minima officiis, suscipit optio molestiae aliquid. Impedit debitis nulla deserunt illo nostrum accusantium, voluptatibus atque voluptate facere porro, sit libero, nobis dolore officia non maxime quidem. Hic repellat error odio alias!
    </p>
    <p class="text-gray-500 font-primary text-lg my-2 w-11/12 md:w-3/4 mx-auto">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta perferendis itaque pariatur quis fuga ad placeat soluta, vel maxime quasi, doloremque atque, incidunt alias praesentium ipsa eveniet vero fugit modi libero repellendus sint inventore. Harum ipsa dolores fuga molestiae. Officia maiores corrupti dolor eum magni fuga, suscipit doloremque aliquid.
    </p>
    <gallery-view />
    <video-component />
    <appointment class="mb-8"/>
    <footer-component />
  </div>
</template>

<script>
import Appointment from '../components/Appointment.vue'
import FooterComponent from '../components/FooterComponent.vue'
import GalleryView from '../components/GalleryView.vue'
import GoToTop from '../components/GoToTop.vue'
import Jumbotron from '../components/Jumbotron.vue'
import Navbar from '../components/Navbar'
import VideoComponent from '../components/VideoComponent.vue'
export default {
  name: 'About',
  props : ['scrolled'],
  components : {Navbar,Jumbotron, GalleryView, GoToTop, VideoComponent, FooterComponent, Appointment},
}
</script>