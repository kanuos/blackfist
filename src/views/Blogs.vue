<template>
<div class="relative overflow-x-hidden bg-gray-800">
    <navbar :scrolled="scrolled"></navbar>
    <go-to-top :scrolled="scrolled"></go-to-top>
    <jumbotron heading="our blogs" url="Blog"/>
    
    <form
        class="h-24 flex items-center justify-center mx-auto my-3 w-5/6 max-w-prose" 
        @submit.prevent="getSearchKeyword()">
        <input 
            type="text" 
            v-model="keyword" 
            placeholder="Search Blog"
            class="w-4/5 p-2 border-2 border-gray-400 bg-transparent outline-none rounded-md placeholder-current text-gray-400 font-primary">
    </form>

    <div class="flex flex-wrap justify-center">
        <blog-thumbail 
            class="w-full max-w-md m-2"
            v-for="blog in displayList"
            :key="blog.id"
            :image="blog.image"
            :title="blog.title"
            :id="blog.id"
            :date="blog.date | formatDate"
            />
    </div>
      <div class="h-24 flex justify-center items-center">
        <button @click="toggleShow()" class="font-bold uppercase font-primary text-lg text-gray-300 outline-none focus:outline-none hover:text-gray-100 transition-colors duration-500" v-if="showAll">
            Hide
        </button>
        <button @click="toggleShow()" class="font-bold uppercase font-primary text-lg text-gray-300 outline-none focus:outline-none hover:text-gray-100 transition-colors duration-500" v-else>
            More
        </button>
    </div>
    <footer-component />
</div>
</template>

<script>
import BlogThumbail from '../components/BlogThumbail.vue'
import FooterComponent from '../components/FooterComponent.vue'
import GoToTop from '../components/GoToTop.vue'
import Jumbotron from '../components/Jumbotron.vue'
import Navbar from '../components/Navbar.vue'
import blogData from '../assets/mockDB/blogs.json';
export default {
  components: { Navbar, GoToTop, FooterComponent, Jumbotron, BlogThumbail },
    name: "Blogs",
    props : ['scrolled'],
    data() {
        return {
            keyword : '',
            showAll : false,
            end : 4
        }
    },
    methods : {
        getSearchKeyword(event) {
            console.log(event);
        },
        toggleShow () {
            this.showAll = ! this.showAll;
            this.end = this.showAll ? this.blogs.length : 4;
        }
    },
    computed : {
        displayList() {
            return this.showAll ? this.blogs : this.blogs.slice(0, this.end);  
        },
        blogs() {
            if(this.keyword.trim().length > 0){
                return blogData.filter(blog => blog.title.toLowerCase().includes(this.keyword.trim().toLowerCase()))
            }
            return blogData;
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