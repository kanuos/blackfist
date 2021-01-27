<template>
<div class="relative overflow-x-hidden bg-gray-800">
    <navbar :scrolled="scrolled"></navbar>
    <go-to-top :scrolled="scrolled"></go-to-top>
    <jumbotron heading="our blogs" url="Blog"/>
    <div class="flex flex-col lg:flex-row h-auto">
        <section
            v-cloak
            v-if="Object.keys(blog).includes('id')" 
            class="flex min-h-screen flex-col w-full lg:mb-16" :key="blog.id">
            <div class="p-4 max-w-6xl mx-auto">
                <h1 class="uppercase font-heading font-light text-4xl text-gray-300 leading-normal text-center lg:text-5xl">
                    {{blog.title}}
                </h1>
                <img 
                    class="w-full h-auto object-cover block mt-4 lg:w-4/5 mx-auto"
                    :src="blog.image" alt="">

                <ul class="my-6 flex flex-wrap w-full max-w-2xl justify-between items-center mx-auto lg:flex-nowrap">
                    <li class="w-full lg:w-max flex justify-between lg:justify-start">
                        <strong class="font-primary text-gray-400 capitalize text-lg">by:</strong>
                    <router-link :to="`/trainers?t_id=${blog.author.id}`" >
                        <span class="text-lg font-primary capitalize text-gray-600 hover:text-gray-200 lg:ml-2 cursor-pointer">
                            {{blog.author.name}}
                        </span>
                    </router-link>
                    </li>
                    <li class="w-full lg:w-max flex justify-between lg:justify-start">
                        <strong class="font-primary text-gray-400 capitalize text-lg">date:</strong>
                        <span class="text-lg font-primary capitalize text-gray-600 lg:ml-2">{{blog.date}}</span>
                    </li>
                    <li class="w-full lg:w-max flex justify-between lg:justify-start">
                        <strong class="font-primary text-gray-400 capitalize text-lg">category:</strong>
                        <div class="flex justify-center items-center ml-auto">
                            <span 
                                v-for="cat in blog.category"
                                :key="cat"
                                class="text-lg font-primary capitalize text-gray-600 lg:ml-2">{{cat}}</span>
                        </div>
                    </li>
                </ul>
                <dummy-body />
                <dummy-quote />
                <p class="font-primary text-gray-500 mx-auto max-w-2xl md:text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, modi rem. Odio pariatur in distinctio eum magnam voluptatem nobis nisi laborum iure cum necessitatibus, labore libero nemo facilis quasi. Aspernatur id fugiat dolorem atque vitae exercitationem laborum architecto recusandae sapiente fuga ratione praesentium rerum libero blanditiis sunt culpa placeat quam quidem, harum soluta aperiam modi est perspiciatis deleniti. 
                </p>
            </div>
        </section>
        <aside class="w-full  justify-center items-center lg:w-1/3">
            <h3 class="font-heading uppercase text-5xl md:text-4xl my-8 text-center">
                <span class="text-gray-400 opacity-75">related&nbsp;</span>
                <span class="text-gray-100">blogs</span>
            </h3>
            <div class="px-6">
                <blog-thumbail 
                    :key="item.id" v-for="item in relatedPosts" 
                    :id="item.id"
                    :image="item.image"
                    :title="item.title"
                    :date="item.date"/>
            </div>
            <router-link to="/blogs" class="text-gray-500 border-4 border-gray-500 hover:text-gray-800 hover:bg-gray-300 hover:border-gray-300 uppercase font-primary font-bold text-sm py-2 px-6 w-max mx-auto my-8 block">
                Go to Blogs
            </router-link>
        </aside>
    </div>
    <footer-component />
</div>
</template>

<script>
import DummyBody from '../components/DummyBody.vue';
import DummyQuote from '../components/DummyQuote.vue';
import FooterComponent from '../components/FooterComponent.vue';
import GoToTop from '../components/GoToTop.vue';
import Jumbotron from '../components/Jumbotron.vue';
import Navbar from '../components/Navbar.vue';
import blogData from '../assets/mockDB/blogs.json'
import trainerData from '../assets/mockDB/trainers.json'
import BlogThumbail from '../components/BlogThumbail.vue';

export default {
    components: { GoToTop, Navbar, Jumbotron, FooterComponent, DummyBody, DummyQuote, BlogThumbail },
    name : "BlogDetailView",
    props : ['scrolled'],
    data() {
        return {
            blog: {}
        }
    },
    methods : {
        getBlog() {
            const query = this.$router.history.current.params.blog;
            const blog =  blogData.find(el => el.id.toString() === query)
            if(!blog) {
                this.$router.replace({
                    name : "Error"
                })
                return
            }
            else {
                const author = trainerData.find(el => el.id === blog.author);
                blog.author = author;
                this.blog = blog;
            }
        }
    },
    mounted() {
        document.documentElement.scrollTo(0,0);
        this.getBlog();
    },
    filters : {
        formatDate(date) {
            const months = [
                "jan", "feb", "mar", "apr", "may", "june", "july","aug","sep",
                "oct", "nov","dec"
            ]
            return new Date(date).getDate() + " " + months[new Date(date).getMonth()]
        }
    },
    computed : {
        relatedPosts() {
            const query = this.$router.history.current.params.blog;
            const blogs = blogData.filter(item => item.id.toString() !== query);
            return blogs.slice(0,3);
        }
    },
    watch : {
        '$route'() {
            document.documentElement.scrollTo(0,0);
            this.getBlog();
        }
    }
}
</script>
