<template>
  <div class="home-wrapper min-h-screen">
    <AppHeading />

    <div class="container mt-10 mb-10 sm:my-12">
      <div class="w-full h-px bg-gray-500 opacity-20"></div>
    </div>

    <div
      class="mb-12 container dark:text-white text-gray-800 font-intro font-bold text-xl mx-auto w-full flex"
    >
      Design by Aji Surochman
    </div>
    <AppGallery>
      <AppGalleryItem
        v-for="(item, index) in doc"
        :key="index"
        :img="item.cover"
        :title="item.judul"
        :link="'projects/' + item.slug"
      />
    </AppGallery>
  </div>
</template>

<script>
export default {
  transition: 'fadeDown',
  async asyncData({ $content }) {
    const doc = await $content('projects').fetch()
    console.log(doc)
    return {
      doc
    }
  }
}
</script>
