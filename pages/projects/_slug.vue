<template>
  <div class="projects-wrapper pt-5 sm:pt-12 min-h-screen">
    <div class="container">
      <NuxtLink to="/" class="text-pink-500">back</NuxtLink>

      <div class="projects-heading mt-5 sm:mt-10 w-full flex justify-center">
        <img
          class="w-full h-auto object-center object-cover"
          :src="doc.cover"
          alt=""
        />
      </div>
    </div>
    <div
      class="projects-content px-5 sm:px-0 mt-5 sm:mt-10 mx-auto prose prose-sm sm:prose-sm lg:prose-lg font-noto text-gray-600 dark:text-gray-300"
    >
      <p class="lead">{{ doc.title }}</p>
      <p>
        {{ doc.deskripsi }}
      </p>
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
  }
}
</script>

<style lang="scss" scoped>
.lead {
}
</style>
