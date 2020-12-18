<template>
  <div class="w-full mt-5 sm:mt-12">
    <div
      class="swiper-container w-full h-32 sm:h-auto "
      ref="swiperContainer"
      v-if="images.length > 4"
    >
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div
          class="swiper-slide bg-red-600 overflow-hidden rounded"
          v-for="(item, i) in images"
          :key="i"
        >
          <img
            class="w-full h-full object-cover object-top"
            :src="item"
            alt=""
          />
        </div>
        ...
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>

      <!-- If we need navigation buttons -->
      <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->

      <!-- If we need scrollbar -->
      <div class="swiper-scrollbar"></div>
    </div>
    <div v-else class="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12">
      <div
        v-for="(item, i) in images"
        class="col-span-1 rounded-md h-auto sm:h-64 overflow-hidden"
        :key="i"
        :class="[item === 3 ? 'col-span-3 sm:col-span-1' : '']"
      >
        <img
          class="w-full h-full object-top object-cover"
          :src="images"
          alt=""
        />
      </div>
    </div>
  </div>
  <!-- Slider main container -->
</template>

<script>
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

export default {
  props: ['images'],
  data: () => ({
    mySwiper: null
  }),
  mounted() {
    this.initSlider()
  },
  methods: {
    initSlider() {
      this.mySwiper = new Swiper(this.$refs['swiperContainer'], {
        // Optional parameters

        loop: true,
        freeMode: true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination'
        },

        slidesPerView: 2,
        spaceBetween: 18,
        breakpoints: {
          640: {
            slidesPerView: 4,
            spaceBetween: 60
          }
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
}
</style>
