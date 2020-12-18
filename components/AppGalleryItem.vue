<template>
  <NuxtLink
    :to="link"
    class="gallery-item relative rounded h-32 sm:h-72 cursor-pointer overflow-hidden hover:shadow-xl transition duration-300"
  >
    <div
      class="overlay absolute p-5 text-center translate-y-1/2 opacity-0 top-0 left-0 w-full h-full bg-green-500 z-10 flex items-center justify-center text-white font-noto "
    >
      {{ title }}
    </div>
    <img class="w-full h-full object-cover object-center" :src="img" alt="" />
  </NuxtLink>
</template>

<script>
export default {
  props: ['title', 'img', 'link']
}
</script>

<style lang="scss" scoped>
.gallery-item {
  &:nth-child(odd) {
  }
}
.gallery-item:hover {
  .overlay {
    @apply translate-y-0 opacity-90 transition duration-300;
  }
}
</style>
