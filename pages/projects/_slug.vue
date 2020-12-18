<template>
  <div class="projects-wrapper pt-5 sm:pt-12">
    <div class="container">
      <NuxtLink to="/" class="text-pink-500">back</NuxtLink>

      <div class="projects-heading mt-5 sm:mt-10 w-full flex justify-center">
        <NuxtImage
          class="w-full h-auto object-center object-cover"
          src="https://cdn.dribbble.com/users/1615584/screenshots/14782285/media/9508181b0467e94066b9300602aef185.jpg"
          alt=""
        />
      </div>
    </div>
    <div
      class="projects-content px-5 sm:px-0 mt-5 sm:mt-10 mx-auto prose prose-sm sm:prose-sm lg:prose-lg font-noto text-gray-600 dark:text-gray-300"
    >
      <p class="lead">This is title</p>
      <p>
        Helpsters / created by Tim McKeon for Sesame Workshop and Apple TV+. /
        Cody and the Helpsters are a team of monsters who love to solve
        problems. Whether it's planning a party or mastering a magic trick, the
        Helpsters can figure anything out - because everything starts with a
        plan. "For years now, I have designed characters who have lived their
        lives amongst the pages of books, but now, I will watch as characters I
        have designed literally come to life on screen (Scatter performed by Tim
        Lagasse and Mr. Primm performed by Martin Robinson). Thanks to the
        incredible people at MonkeyBoys Productions, myself and Dan Cook were
        awarded the dream job of designing puppets for Tim McKeon’s Helpsters."
        — Jeremy Accolades: Nominated for 5 Emmys (2019), Parent's Choice Award
        (2020)
      </p>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'slideUp'
}
</script>

<style lang="scss" scoped>
.lead {
}
</style>
