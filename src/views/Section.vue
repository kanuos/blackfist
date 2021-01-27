<template>
<div class="relative overflow-x-hidden bg-gray-800">
    <navbar :scrolled="scrolled"></navbar>
    <go-to-top :scrolled="scrolled"></go-to-top>
    <jumbotron :heading="section.title" :url="`Articles >>${section.title}`"/>
    <div class="flex flex-col lg:flex-row lg:items-start w-full">
        <section
            v-cloak 
            class="flex min-h-screen flex-col w-full lg:w-3/4" :key="section.id">
            <div class="p-4 max-w-8xl mx-auto">
                <h3 class="font-heading uppercase text-5xl md:text-7xl my-8 text-center">
                    <span class="text-gray-400 opacity-75">topic : &nbsp;</span>
                    <span class="text-gray-100">{{section.title}}</span>
                </h3>
                <img v-if="section.image"
                    class="w-full h-auto object-cover block my-4 lg:object-contain lg:w-1/2 mx-auto"
                    :src="section.image" alt="">
                <dummy-body />
                <dummy-quote />
                <p class="font-primary text-gray-500 mx-auto max-w-2xl md:text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, modi rem. Odio pariatur in distinctio eum magnam voluptatem nobis nisi laborum iure cum necessitatibus, labore libero nemo facilis quasi. Aspernatur id fugiat dolorem atque vitae exercitationem laborum architecto recusandae sapiente fuga ratione praesentium rerum libero blanditiis sunt culpa placeat quam quidem, harum soluta aperiam modi est perspiciatis deleniti. 
                </p>
                <video-component class="mt-4 max-w-4xl mx-auto"/> 
            </div>
        </section>
        <aside class="flex justify-center items-center flex-col w-full lg:w-1/3 my-4">
            <h3 class="font-heading uppercase text-4xl my-8">
                <span class="text-gray-400 opacity-75">related&nbsp;</span>
                <span class="text-gray-100">posts</span>
            </h3>
            <section-thumbnail 
                class="w-full lg:w-1/4"
                :key="item.id" 
                :image="item.image"
                :title="item.title"
                :id="item.id"
                v-for="item in related" />
        </aside>
    </div>
    <footer-component />
</div> 
</template>


<script>
import sectionData from '../assets/mockDB/homeSections.json'
import DummyBody from '../components/DummyBody.vue';
import DummyQuote from '../components/DummyQuote.vue';
import FooterComponent from '../components/FooterComponent.vue';
import GoToTop from '../components/GoToTop.vue';
import Jumbotron from '../components/Jumbotron.vue';
import Navbar from '../components/Navbar.vue';
import SectionThumbnail from '../components/SectionThumbnail.vue';
import VideoComponent from '../components/VideoComponent.vue';
export default {
    name : "Section",
    props : ['scrolled'],
    components : {
        FooterComponent,
        DummyBody,
        DummyQuote,
        Navbar,
        GoToTop,
        Jumbotron,
        VideoComponent,
        SectionThumbnail,
    },
    data() {
        return {
            url : this.$route.params.name,
            section : {},
            related : []
        }
    },
    methods : {
        computedSection() {
            const validSection = sectionData.filter(el => el.title.toLowerCase() === this.url.toLowerCase());

            if(!validSection.length) {
                this.$router.replace({
                    name : "Error"
                })
                return;
            }

            this.section = validSection[0];
        },
        computedRelated() {
            this.related = sectionData.filter(el => el.title.toLowerCase() !== this.url.toLowerCase());
        }
    },
    mounted() {
        this.computedSection();
        this.computedRelated();
        document.documentElement.scrollTo(0,0);
    },
    watch : {
        '$route'() {
            let sectionName = this.$route.params.name;
            if(!sectionName){
                this.$router.replace({
                    name : 'Home'
                })
            }
            this.url = sectionName;
            this.computedSection();
            this.computedRelated();
            document.documentElement.scrollTo(0,0);
        }
    }
}
</script>