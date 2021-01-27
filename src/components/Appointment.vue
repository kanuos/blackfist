<template>
  <section class="relative w-11/12 md:w-3/4 flex flex-col items-center mx-auto">
      <div
        :class="modalOpen ? 'h-screen z-10' : 'h-0 z-0'"
        class="fixed bg-gray-700 top-0 left-0 w-full transition-all origin-top duration-300">
        <section :class="modalOpen ? 'absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center' : 'hidden'">
          <button @click="toggleModal()" class="text-gray-200 absolute top-4 right-4 text-2xl font-bold outline-none focus:outline-none">
            &times;
          </button>
          <h3 class="font-heading uppercase text-5xl mt-8">
            <span class="text-gray-400 opacity-75">get&nbsp;</span>
            <span class="text-gray-100">appointment</span>
          </h3>
          <p class="my-3 text-center font-primary text-gray-500 text-sm w-5/6 max-w-prose">
            If you need of a Personal Trainer, Fitness Instructor advice, or a healthy living product review, please feel free to contact us
          </p>
          <div class="flex-col md:flex-row w-4/5 max-w-prose">
            <input 
              type="text" 
              placeholder="Name"
              class="text-gray-300 placeholder-gray-500 border-2 border-gray-600 bg-transparent w-full px-2 py-4 focus:border-gray-500 my-2 md:mr-2">
            <input 
              type="text" 
              placeholder="Email"
              class="text-gray-300 placeholder-gray-500 border-2 border-gray-600 bg-transparent w-full px-2 py-4 focus:border-gray-500 my-2 md:mr-2">
          </div>
          <textarea
            placeholder="Message" 
            class="text-gray-300 placeholder-gray-500 border-2 border-gray-600 bg-transparent w-4/5 px-2 py-4 focus:border-gray-500 my-2 h-48 resize-none max-w-prose">
          </textarea>
          <div class="flex flex-col items-center justify-center">
            <button
              @click="toggleModal()" 
              class="text-gray-500 border-2 border-gray-500 py-2 px-4 uppercase font-primary font-bold my-4 outline-none focus:outline-none hover:bg-gray-200 md:mr-2 hover:text-gray-700 transition-all duration-200">
              submit
            </button>
            <span class="text-gray-500 text-xs capitalize font-primary">
              *personal data will be encrypted
            </span>
          </div>

        </section>
      </div>
      <button
        @click="toggleModal()" 
        class="text-gray-500 border-4 border-gray-500 py-2 px-4 uppercase font-primary font-bold my-4 outline-none focus:outline-none text-lg hover:bg-gray-200 hover:border-gray-200 md:mr-2 hover:text-gray-700 transition-all duration-200">
          free consultation
      </button>
    </section>
</template>

<script>
export default {
  data() {
    return {
      modalOpen : false
    }
  },
  methods : {
    toggleModal() {
      this.modalOpen = ! this.modalOpen;
    }
  }
}
</script>

<style>

</style>