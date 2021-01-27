<template>
<div class="relative">
<transition-group 
    name="images"
    tag="section" 
    class="flex flex-wrap h-screen overflow-hidden w-full transition-all duration-500">
    <trainer-card 
        v-for="item in computedImages"
        :key="item.id"
        :user="item"
        :image="item.image" />
</transition-group>
    <div class="z-10 flex w-full px-4 justify-between absolute top-1/2">
        <button @click="previous()" 
            class="text-gray-200 outline-none focus:outline-none hover:text-red-600 text-5xl font-semibold">&lt;</button>
        <button @click="next()" 
            class="text-gray-200 outline-none focus:outline-none hover:text-red-600 text-5xl font-semibold">&gt;</button>
    </div>
</div>
</template>

<script>
import jsonData from '../assets/mockDB/trainers.json'
import TrainerCard from '../components/TrainerCard.vue'
export default {
  components: { TrainerCard },
    data() {
        return {
            images : jsonData
        }
    },
    methods : {
        previous() {
            let lastItem = this.images.pop();
            this.images.unshift(lastItem);
        },
        next() {
            let firstItem = this.images.shift();
            this.images.push(firstItem);
        }
    },
    computed : {
        computedImages() {
            return this.images;
        }
    }
}
</script>

<style scoped>
    .images-enter, .images-leave-to {
        opacity: 0;
    }
    .images-enter-to {
        opacity: 1;
    }
    .images-move {
        opacity: 1;
        transition: all .5s;
    }
</style>