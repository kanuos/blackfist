<template>
  <div class="min-h-screen flex flex-col items-center md:justify-center">
    <h3 class="font-heading text-center uppercase text-5xl md:text-7xl my-8">
        <span class="text-gray-400 opacity-75">why&nbsp;</span>
        <span class="text-gray-100">choose us</span>
    </h3>
    <p class="font-primary text-gray-500 text-center w-4/5 max-w-prose text-lg md:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem laboriosam facere nesciunt suscipit tenetur iusto qui quasi nobis iure distinctio
    </p>
    <div class="flex flex-col mt-8 lg:flex-row">
        <div class="my-4 lg:mx-2 flex flex-col items-center justify-center">
            <strong class="mb-2 font-heading text-gray-200 text-5xl md:text-6xl font-light">
                {{program}}
            </strong>
            <span class="font-primary text-center md:text-xl text-gray-500 capitalize">
                training programs
            </span>
        </div>
        <div class="my-4 lg:mx-2 flex flex-col items-center justify-center">
            <strong class="mb-2 font-heading text-gray-200 text-5xl md:text-6xl font-light">
                {{experience}}
            </strong>
            <span class="font-primary text-center md:text-xl text-gray-500 capitalize">
                years experience
            </span>
        </div>
        <div class="my-4 lg:mx-2 flex flex-col items-center justify-center">
            <strong class="mb-2 font-heading text-gray-200 text-5xl md:text-6xl font-light">
                {{client}}
            </strong>
            <span class="font-primary text-center md:text-xl text-gray-500 capitalize">
                satisfied clients
            </span>
        </div>
        <div class="my-4 lg:mx-2 flex flex-col items-center justify-center">
            <strong class="mb-2 font-heading text-gray-200 text-5xl md:text-6xl font-light">
                {{trainer}}
            </strong>
            <span class="font-primary text-center md:text-xl text-gray-500 capitalize">
                best trainers
            </span>
        </div>

    </div>
  </div>
</template>

<script>
import trainerList from '../assets/mockDB/trainers.json' 
export default {
    data() {
        return {
            program : 0,
            maxProgram : 12,
            experience : 0,
            maxExperience : 14,
            client : 0,
            maxClient : 357,
            trainer : 0,
            maxTrainer : trainerList.length,

        }
    },
    mounted() {
        setInterval(()=> {
            if(this.trainer < this.maxTrainer) {
                this.trainer++;
            }
            if(this.client < this.maxClient) {
                this.client++;
            }
            if(this.program < this.maxProgram) {
                this.program++;
            }
            if(this.experience < this.maxExperience) {
                this.experience++;
            }
        }, 10)
    }
}
</script>

<style>

</style>