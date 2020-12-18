<template>
  <div class="home-wrapper">
    <AppHeading />
    <div class="container px-28 my-12">
      <div class="w-full h-px bg-gray-500 opacity-20"></div>
    </div>

    <AppGallery>
      <AppGalleryItem v-for="item in doc" :key="item" img="item.cover" />
    </AppGallery>
  </div>
</template>

<script>
export default {
  transition: 'slideDown',
  async asyncData({ $content }) {
    const doc = await $content('projects').fetch()
    console.log(doc)
    return {
      doc
    }
  },
  mounted() {
    console.log(this.doc)
  }
}
</script>
