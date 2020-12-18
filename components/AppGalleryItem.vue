<template>
  <NuxtLink
    :to="link"
    class="gallery-item  rounded h-40 sm:h-72 cursor-pointer overflow-hidden hover:shadow-xl transition duration-300"
  >
    <NuxtImage
      class="w-full h-full object-cover object-center"
      :src="img"
      alt=""
    />
  </NuxtLink>
</template>

<script>
export default {
  props: ['img', 'link']
}
</script>

<style lang="scss" scoped>
.gallery-item {
  &:nth-child(odd) {
  }
}
</style>
