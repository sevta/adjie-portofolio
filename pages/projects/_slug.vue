<template>
  <div class="projects-wrapper pt-5 sm:pt-12 min-h-screen">
    <div class="container">
      <NuxtLink to="/" class="text-white text-sm px-5 rounded py-1 bg-green-400"
        >kembali</NuxtLink
      >
      <div
        class="font-sans text-lg sm:text-xl text-gray-800 dark:text-gray-200 mt-8 prose-sm sm:prose"
      >
        <h3>
          {{ doc.judul }}
        </h3>
      </div>
      <div class="font-noto text-sm text-gray-400 mt-2 sm:mt-5">
        20 november 2020
      </div>
      <div
        class="projects-heading mt-5 sm:mt-10 w-full flex justify-center rounded-lg overflow-hidden"
      >
        <img
          class="w-full h-auto object-center object-cover"
          :src="doc.cover"
          alt=""
        />
      </div>
    </div>
    <div class="container">
      <AppSlider :images="doc.gambar" />
    </div>
    <div
      class="projects-content px-5 sm:px-0 mt-5 sm:mt-10 mx-auto prose prose-sm sm:prose-sm lg:prose-lg font-noto text-gray-600 dark:text-gray-300"
    >
      <p class="lead">{{ doc.title }}</p>
      <p>
        {{ doc.deskripsi }}
      </p>
      <nuxt-content :document="doc.body" />
    </div>
  </div>
</template>

<script>
export default {
  transition: 'slideUp',
  async asyncData({ $content, params }) {
    let { slug } = params
    console.log(slug)

    const doc = await $content(`projects/${slug}`).fetch()
    console.log(doc)
    return {
      doc
    }
  },
  mounted() {
    console.log(this.doc, new Date())
  }
}
</script>

<style lang="scss" scoped></style>
