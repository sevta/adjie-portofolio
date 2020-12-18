<template>
  <NuxtLink
    to="/projects/cat"
    class="gallery-item  rounded h-40 sm:h-72 cursor-pointer overflow-hidden hover:shadow-xl transition duration-300"
  >
    <img
      class="w-full h-full object-cover object-center"
      src="https://cdn.dribbble.com/users/1615584/screenshots/14782285/media/9508181b0467e94066b9300602aef185.jpg"
      alt=""
    />
  </NuxtLink>
</template>

<style lang="scss" scoped>
.gallery-item {
  &:nth-child(odd) {
  }
}
</style>
