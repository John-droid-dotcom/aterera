<template>
  <div class="flex items-center justify-center my-14">
    <div class="card w-96 bg-base-100 shadow-xl h-1/4">
      <figure class="px-10 pt-10"
        ><svg
          class="w-12 h-12 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          ></path></svg
      ></figure>
      <div class="card-body">
        <h2 class="card-title">Write Flashcards</h2>
        <p>You can write whatever and whenever you like with no limit</p>
        <div class="card-actions justify-end">
          <button class="btn btn-priamry text-base-100"
            >Write your first Flashcard</button
          >
        </div>
      </div>
    </div>
    <div class="card w-96 bg-base-100 shadow-xl h-1/4">
      <figure class="px-10 pt-10"
        ><svg
          class="w-12 h-12 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          ></path></svg
      ></figure>
      <div class="card-body">
        <h2 class="card-title">Organize Flashcards in Collections</h2>
        <p>Organize flashcards with the same topic</p>
        <div class="card-actions justify-end">
          <button class="btn btn-priamry text-base-100"
            >Go to your Collections</button
          >
        </div>
      </div>
    </div>
    <div class="card w-96 bg-base-100 shadow-xl h-1/4">
      <figure class="px-10 pt-10"
        ><svg
          class="w-12 h-12 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          ></path></svg
      ></figure>
      <div class="card-body">
        <h2 class="card-title">Teach Yourself</h2>
        <p>Play fun games to improve your memory</p>
        <div class="card-actions justify-end">
          <button class="btn btn-priamry text-base-100">Play Games</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCards",
};
</script>
