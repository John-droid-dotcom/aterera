<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center gap-4 h-screen">
      <img
        src="../assets/aterera_logo_big.png"
        alt="Aterera Logo"
        class="w-1/2"
      />
      <h1 class="font-nunito text-4xl text-primary my-7 tracking-wider"
        >Learning have never been this fun</h1
      >
      <p class="text-neutral font-normal text-lg w-2/3 text-center"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolor
        dolore porro ullam quibusdam, pariatur incidunt eligendi quod impedit
        assumenda
      </p>
      <a class="btn btn-secondary my-5">Learn More</a>
    </div>
    <HomeCarousel></HomeCarousel>
    <HomeCards></HomeCards>
    <img src="../assets/create.svg" alt="Create your Flashcard" class="w-1/5" />
    <button class="btn btn-secondary my-5">Create Flashcard Now</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import HomeCarousel from "@/components/HomeCarousel.vue";
import HomeCards from "@/components/HomeCards.vue";

export default {
  name: "HomeView",
  components: {
    // HelloWorld,
    HomeCarousel,
    HomeCards,
  },
};
</script>
