<template>
    <router-view :scrolled="scrolled" class="relative min-h-screen h-full body" />
</template>

<script>
export default {
    data(){
        return {
        scrolled : false
        }
    },
    methods : {
        scrollOn(){
        const height = document.documentElement.scrollTop;
        this.scrolled = height > 500;
        }
    },
    mounted(){
            window.addEventListener('scroll', this.scrollOn);
        },
    watch : {
        "$route"(to) {
            document.title = to.meta.title || "BlackFist"
        }
    }
    }
</script>

<style>
    #detach-button-host {
        display: none;
    }
    * {
        box-sizing: border-box;
    }
    body::-webkit-scrollbar {
        background-color: black;
        width: 10px;
    }
    body::-webkit-scrollbar-thumb {
        background-color: white;
        transition: all .5s ease;
    }
    body::-webkit-scrollbar-thumb:hover {
        background-color: gray;
    }
</style>
