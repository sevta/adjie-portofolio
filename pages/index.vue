<template>
  <div class="home-wrapper">
    <AppHeading />
    <div class="container px-28 my-12">
      <div class="w-full h-px bg-gray-500 opacity-20"></div>
    </div>

    <AppGallery>
      <AppGalleryItem v-for="item in 10" :key="item" />
    </AppGallery>
  </div>
</template>

<script>
export default {
  transition: 'slideDown'
}
</script>
