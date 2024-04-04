<template>
  <section>
    <div class="bg-white">
      <div class="container flex flex-col mx-auto">
        <div class="relative flex flex-wrap items-center justify-between w-full bg-white group py-7 shrink-0">
          <div>
            <img class="h-8" src="../assets/image/logo.png" alt="logo">
          </div>
          <div class="items-center justify-between hidden gap-12 text-primary md:flex">
            <a class="text-sm font-normal">Home</a>
            <a class="text-sm font-normal">Category</a>
            <a class="text-sm font-normal">About</a>
            <a class="text-sm font-normal">Contact</a>
          </div>
          <div class="items-center hidden gap-8 md:flex">
            <button class="flex items-center text-sm font-normal text-gray-800 hover:text-gray-900 transition duration-300">Log In</button>
            <button class="flex items-center px-4 py-2 text-sm font-bold rounded-xl bg-purple-blue-100 text-purple-blue-600 hover:bg-purple-blue-600 hover:text-white transition duration-300">
              Sign Up
            </button>
          </div>
          <button @click="toggleMenu" class="flex md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z" fill="black"></path>
            </svg>
          </button>
          <div :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" class="absolute flex md:hidden transition-all duration-300 ease-in-out flex-col items-start shadow-main justify-center w-full gap-3 overflow-hidden bg-white max-h-0 top-full">
            <a class="text-sm font-normal">Home</a>
            <a class="text-sm font-normal">Category</a>
            <a class="text-sm font-normal">About</a>
            <a class="text-sm font-normal">Company</a>
            <button class="flex items-center text-sm font-normal text-black">Log In</button>
            <button class="flex items-center px-4 py-2 text-sm font-bold rounded-xl bg-purple-blue-100 text-purple-blue-600 hover:bg-purple-blue-600 hover:text-white transition duration-300">Sign Up</button>
          </div>
        </div>     
      </div>
    </div>
  </section>

  <section style="background-image: linear-gradient(to bottom right, #FCEED5 0%, #FCEED5 100%, #FFE7BA 100%);">
      <div class="grid w-full grid-cols-1 my-auto m-20 md:grid-cols-2 xl:gap-14 md:gap-5 text-primary">
      <div class="flex flex-col justify-center col-span-1 text-center lg:text-start">
        <h1 class="mb-8 text-4xl font-extrabold leading-tight">One more friend</h1>
        <h2 class="mb-8 text-4xl font-extrabold leading-tight">Thousands more fun!</h2>
        <p class="mb-6 text-base font-normal leading-7 lg:w-3/4">
          Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
        </p>
        <div class="flex flex-col items-center gap-4 lg:flex-row text-white">
          <button class="rounded-xl bg-primary p-4">
            View Intro
          </button> 
          <button class="rounded-xl bg-primary p-4">
            Explore Now
          </button>
        </div>
      </div>
    </div>
    </section>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      isMenuOpen,
      toggleMenu
    };
  }
};
</script>

<style scoped>
/* Add your scoped styles here */
.bg-banner {
  background-image: url('../assets/image/banner.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
}
</style>
