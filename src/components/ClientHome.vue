<template>
  <section class="min-h-screen flex flex-col items-center p-4">
    <h3 class="font-heading text-center uppercase text-5xl md:text-7xl my-8">
        <span class="text-gray-400 opacity-75">what our&nbsp;</span>
        <span class="text-gray-100">clients say</span>
    </h3>
    <p class="font-primary text-gray-500 text-center w-4/5 max-w-prose text-lg md:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem laboriosam facere nesciunt suscipit tenetur iusto qui quasi nobis iure distinctio
    </p>
    <div v-if="!viewAll" class="flex flex-col items-center">
        <client-component :data="reviewers[0]"/>
        <div class="flex max-w-prose w-4/5 mx-auto justify-between items-center">
            <button
                @click="prev()" 
                class="text-gray-200 hover:text-gray-100 transform transition-all duration-200 hover:scale-110 text-3xl outline-none focus:outline-none">
                &lt;
            </button>
            <button
                @click="toggleView" 
                class="text-gray-300 uppercase font-primary hover:text-gray-200 text-sm outline-none focus:outline-none">
                view all
            </button>
            <button
                @click="next()" 
                class="text-gray-200 hover:text-gray-100 transform transition-all duration-200 hover:scale-110 text-3xl outline-none focus:outline-none">
                &gt;
            </button>
        </div>
    </div>
    <div v-else class="flex flex-col items-center">
        <div class="flex w-4/5 flex-wrap mx-auto">
            <client-component
                v-for="reviewer in reviewers"
                :key="reviewer.id" 
                :data="reviewer"/>
        </div>
        <button
            @click="toggleView" 
            class="text-gray-300 uppercase font-primary hover:text-gray-200 text-sm outline-none focus:outline-none">
            show less
        </button>
    </div>
  </section>
</template>

<script>
import reviewData from '../assets/mockDB/reviews.json'
import ClientComponent from './ClientComponent.vue'
export default {
    components: { ClientComponent },
    data() {
        return {
            reviewers : reviewData,
            viewAll : false
        }
    },
    methods : {
        toggleView() {
            this.viewAll = ! this.viewAll;
        },
        prev() {
            let firstItem = this.reviewers.shift();
            this.reviewers.push(firstItem);
        },
        next() {
            let lastItem = this.reviewers.pop();
            this.reviewers.unshift(lastItem);
        }
    }
}
</script>
