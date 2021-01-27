<template>
  <header 
    class="h-screen relative flex items-end w-full pb-16 bg-gray-700">
    <video 
        @mouseover.prevent=""
        @contextmenu.prevent=""
        autoplay 
        muted 
        loop 
        class="pointer-events-none block object-cover absolute top-0 h-full w-full opacity-40">
        <source src="@/assets/hero.mp4" type="video/mp4">
    </video>
    <section class="z-0 flex flex-col items-center" :key="currentContent">
        <h1 class="flex flex-col items-center justify-center font-heading text-5xl sm:text-6xl xl:text-8xl">
            <span class="text-gray-400 uppercase opacity-60">
                {{currentMain}}
            </span>
            <span class="text-gray-100 uppercase">
                {{currentSub}}
            </span>
        </h1>
        <p class="w-5/6 mt-6 mx-auto text-gray-300 font-primary md:text-lg xl:text-2xl lg:text-center">
            <span class="uppercase">blackfit &mdash;</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minus architecto optio porro reprehenderit aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, possimus.
        </p>
        <button
            @click="showNextSection()" 
            class="outline-none animate-bounce text-gray-100 mt-8 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path></svg>
        </button>
    </section>
  </header>
</template>

<script>
export default {
    name: 'LandingHero',
    data(){
        return {
            currentContent : 0,
            content : [
                {
                    main : 'keep your body',
                    sub : 'fit & strong'
                },
                {
                    main : 'be the best',
                    sub : 'version of you'
                },
                {
                    main : 'no pain',
                    sub : 'no gain'
                },
            ]
        }
    },
    methods : {
        showNextSection(){
            const mainSection = document.getElementById("main");
            if(mainSection){
                mainSection.scrollIntoView();
            }
        },
        changeHero() {
            if(this.currentContent === this.content.length - 1){
                this.currentContent = 0;
            }
            else {
                this.currentContent ++;
            }
        }
    },
    computed : {
        currentImage(){
            return this.content[this.currentContent].img;
        },
        currentMain(){
            return this.content[this.currentContent].main;
        },
        currentSub(){
            return this.content[this.currentContent].sub;
        }
    },
    mounted(){
        setInterval(this.changeHero, 15000);
    }
}
</script>

<style scoped>
    header, img {
        animation: imgAppear 1s ease-out;
    }
    video {
        filter: grayscale(20%);
    }
    h1 {
        animation: textAppear 1.5s ease-in;
    }
    p {
        animation: textAppearFromBottom 2s linear;
    }

    @keyframes textAppear {
        from {
            opacity: 0;
            transform: translateY(-100%) scale(0);
        }
        to {
            opacity: 1;
            transform: translateY(0%) scale(1);
        }
    }

    @keyframes textAppearFromBottom {
        from {
            opacity: 0;
            transform: translateY(100%) scale(0);
        }
        to {
            opacity: 1;
            transform: translateY(0%) scale(1);
        }
    }
    
    @keyframes imgAppear {
        from {
            opacity: .5;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
</style>