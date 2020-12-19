<template>
  <div class="projects-wrapper pt-10 sm:pt-12 min-h-screen">
    <div class="container">
      <NuxtLink
        to="/"
        class=" flex justify-start items-center text-base dark:text-white text-green-400 rounded py-1"
      >
        <v-icon name="arrow-left" class="w-5 h-5"></v-icon>
        <div class="-mt-1 ml-2 font-semibold">back</div>
      </NuxtLink>
      <div class="font-sans text-lg sm:text-xl  mt-8 prose-sm sm:prose">
        <h3 class="text-gray-800 dark:text-gray-200">
          {{ doc.judul }}
        </h3>
      </div>
      <div class="font-noto text-sm text-gray-400 mt-2 sm:mt-5">
        {{ doc.createdAt }}
      </div>
      <div
        class="projects-heading mt-5 sm:mt-10 w-full flex justify-center rounded-md smrounded-lg overflow-hidden"
      >
        <img
          class="w-full h-auto object-center object-cover"
          :src="doc.cover"
          alt=""
        />
      </div>
    </div>
    <div class="container">
      <AppSlider :images="doc.gambar" @onImgClick="onImgClick" />
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
import { mapMutations } from 'vuex'
export default {
  transition: 'fadeUp',
  async asyncData({ $content, params }) {
    let { slug } = params
    console.log(slug)

    const doc = await $content(`projects/${slug}`).fetch()
    console.log(doc)
    return {
      doc
    }
  },
  mounted() {},
  methods: {
    ...mapMutations(['setPopupImg']),
    onImgClick(item) {
      this.$modal.show('modal-img')
      this.setPopupImg(item)
    }
  }
}
</script>

<style lang="scss" scoped></style>
