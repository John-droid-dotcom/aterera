<template>
  <div class="flex items-center justify-center">
    <div class="carousel w-10/12">
      <div
        id="slide1"
        class="carousel-item relative w-full flex items-center justify-center flex-col"
      >
        <img src="../assets/write_flashcards.svg" class="w-[50%]" />
        <h2
          class="text-primary font-bold text-3xl my-5 font-nunito tracking-wide"
          >Easy Studying</h2
        >
        <p class="text-neutral font-normal text-lg w-2/3 text-center"
          >Use Aterera to remember and challenge yourself about the things you
          learn in a fun and engaging manner</p
        >
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2"
        >
          <a href="#slide5" class="btn btn-circle">❮</a>
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div
        id="slide2"
        class="carousel-item relative w-full flex items-center justify-center flex-col"
      >
        <img src="../assets/add_flashcards.svg" class="w-[30%]" />
        <h2
          class="text-primary font-bold text-3xl my-5 font-nunito tracking-wide"
          >Create Flashcards</h2
        >
        <p class="text-neutral font-normal text-lg w-2/3 text-center"
          >Create easily memorable flashcards to grasp and remember terms and
          topics easily</p
        >
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2"
        >
          <a href="#slide1" class="btn btn-circle">❮</a>
          <a href="#slide3" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div
        id="slide3"
        class="carousel-item relative w-full flex items-center justify-center flex-col"
      >
        <img src="../assets/organize_flashcards.svg" class="w-[50%]" />
        <h2
          class="text-primary font-bold text-3xl my-5 font-nunito tracking-wide"
          >Organize Flashcards</h2
        >
        <p class="text-neutral font-normal text-lg w-2/3 text-center"
          >Organize your flashcards with the same topic into for easy access
        </p>
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2"
        >
          <a href="#slide2" class="btn btn-circle">❮</a>
          <a href="#slide4" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div
        id="slide4"
        class="carousel-item relative w-full flex items-center justify-center flex-col"
      >
        <img src="../assets/teach_yourself.svg" class="w-[30%]" />
        <h2
          class="text-primary font-bold text-3xl my-5 font-nunito tracking-wide"
          >Study Your Flashcards</h2
        >
        <p class="text-neutral font-normal text-lg w-2/3 text-center"
          >Study your flashcards with several games and quizzes that boosts your
          memory</p
        >
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2"
        >
          <a href="#slide3" class="btn btn-circle">❮</a>
          <a href="#slide5" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div
        id="slide5"
        class="carousel-item relative w-full flex items-center justify-center flex-col"
      >
        <img src="../assets/learn_with_friends.svg" class="w-[30%]" />
        <h2
          class="text-primary font-bold text-3xl my-5 font-nunito tracking-wide"
          >Share Flashcards</h2
        >
        <p class="text-neutral font-normal text-lg w-2/3 text-center"
          >Share your flashcards and have a fun study with your friends and
          peers
        </p>
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2"
        >
          <a href="#slide4" class="btn btn-circle">❮</a>
          <a href="#slide1" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeCarousel",
};
</script>
