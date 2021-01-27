<template>
<section class="min-h-screen flex flex-col justify-center items-center">
    <form 
        @submit.prevent="handleSubmit()"
        class="h-96 flex flex-col justify-center items-center p-6">
        <h3 class="font-heading text-center uppercase text-5xl md:text-7xl my-8">
            <span class="text-gray-400 opacity-75">bmi&nbsp;</span>
            <span class="text-gray-100">calculator</span>
        </h3>
        <p class="text-gray-500 capitalize text-lg text-center max-w-prose md:text-xl mb-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, sapiente.
        </p>
        <div class="flex flex-col w-4/5">
            <input
            required 
            v-if="SIUnit"
            type="text" 
            max="250"
            min="50"
            v-model="cm"
            placeholder="Height / cm"
            class="text-gray-300 placeholder-gray-500 border-2 border-gray-600 bg-transparent w-full px-2 py-4 focus:border-gray-500 my-2 md:mr-2">
            <div v-else class="flex flex-row w-full">
                <input
                required 
                    type="text"
                    min="2"
                    max="10"
                    v-model="ft" 
                    placeholder="Height / ft"
                    class="text-gray-300 placeholder-gray-500 border-2 border-gray-600 bg-transparent w-full px-2 py-4 focus:border-gray-500 my-2 md:mr-2">
                <input
                required 
                    type="text" 
                    max="11"
                    min="0"
                    v-model="inch"
                    placeholder="Height / inches"
                    class="text-gray-300 placeholder-gray-500 border-2 border-gray-600 bg-transparent w-full px-2 py-4 focus:border-gray-500 my-2">
            </div>
            <input
            required
                v-if="SIUnit" 
                type="text" 
                min="1"
                v-model="kg"
                placeholder="Weight/kgs"
                class="text-gray-300 placeholder-gray-500 border-2 border-gray-600 bg-transparent w-full px-2 py-4 focus:border-gray-500 my-2 md:mr-2">
            <input
            required 
                v-else
                type="text"
                v-model="lb" 
                min="1"
                placeholder="Weight/lbs"
                class="text-gray-300 placeholder-gray-500 border-2 border-gray-600 bg-transparent w-full px-2 py-4 focus:border-gray-500 my-2 md:mr-2">
        </div>
        <div class="flex flex-col items-center justify-center">
            <button
                type="button"
                @click="toggleUnit()"
                class="text-gray-600 capitalize outline-none focus:outline-none p-2 border-2 border-current hover:text-gray-400 transition-all duration-300">
                change to {{SIUnit ? "Feet-Inches and Pounds" : "Cms and Kilograms"}}
            </button>
            <button
                v-if="!result"
                type="submit" 
                class="text-gray-500 border-2 border-gray-500 py-2 px-4 uppercase font-primary font-bold my-4 outline-none focus:outline-none hover:bg-gray-200 md:mr-2 hover:text-gray-700 transition-all duration-200">
            calculate
            </button>
            <button
                v-else
                @click="resetFields()"
                type="button" 
                class="text-gray-500 border-2 border-gray-500 py-2 px-4 uppercase font-primary font-bold my-4 outline-none focus:outline-none hover:bg-gray-200 md:mr-2 hover:text-gray-700 transition-all duration-200">
            reset
            </button>
        </div>
        <p class="flex flex-col w-4/5 mx-auto max-w-prose text-center text-gray-200 capitalize" v-if="result">
            <span class="text-center font-primary text-lg ">
                Your <strong>BMI</strong> is 
                <strong :class="bmi >= 18.5 && bmi <= 25 ? 'text-green-600' : 'text-red-600'">&nbsp;{{bmi}} %&nbsp;</strong>
            </span> 
            <span v-if="bmi < 18.5" class="font-heading capitalize p-2 text-red-600 bg-gray-100 text-lg text-center my-2">
                You are underweight.
            </span>
            <span v-else-if="bmi > 25 && bmi <= 29.9" class="font-heading capitalize p-2 text-red-600 bg-gray-100 text-lg text-center my-2">
                You are overweight.    
            </span>
            <span v-else-if="bmi > 30" class="font-heading capitalize p-2 text-red-600 bg-gray-100 text-lg text-center my-2">
                you are obese.</span>
            <span v-else class="font-heading capitalize p-2 text-green-600 bg-gray-100 text-lg text-center my-2">
                you are healthy and normal.</span>
        </p>
    </form>
</section>
</template>

<script>
export default {
    name : "BMI",
    data() {
        return {
            cm : null,
            kg : null,
            inch : null,
            ft : null,
            lb : null,
            SIUnit : true,
            result : false,
            bmi: 0
        }
    },
    methods : {
        toggleUnit() {
            this.clear();
            this.SIUnit = !this.SIUnit;
        },
        handleSubmit() {
            let m=0, h=0;
            if(this.SIUnit) {
                m = Number(this.kg);
                h = Number(this.cm / 100);
            }
            else {
                m = Number(this.lb *0.453592);
                h = ((Number(this.ft * 12) + Number(this.inch)) * 2.54) / 100;
            }
            this.bmi = (m / (h * h)).toFixed(2);
            this.result = true;
        },
        resetFields() {
            this.clear();
        },
        clear() {
            this.result = false;
            this.bmi = 0;
            this.cm = null;
            this.kg = null;
            this.inch = null;
            this.ft = null;
            this.lb = null;
        }
    },
    mounted() {
        this.clear();
    }
}
</script>

<style>

</style>