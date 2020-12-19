<template>
  <div
    class="layout-wrapper dark:bg-gray-900 transition duration-300 w-full min-h-screen relative overflow-hidden"
  >
    <v-modal
      name="modal-img"
      :adaptive="true"
      height="auto"
      shiftY=".3"
      styles="background-color: transparent; padding: 20px;"
    >
      <div class="rounded-lg overflow-hidden">
        <img class="w-full h-full" :src="popupImg" alt="" />
      </div>
    </v-modal>
    <AppBorderLayout />
    <transition name="fade">
      <AppLoadingPage v-if="loading" />
    </transition>
    <AppBorderLayout class="hidden" />
    <nuxt />
    <AppFooter />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['popupImg'])
  },
  data: () => ({
    loading: true
  }),
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1000)

    if (this.$store.state.darkMode) {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }
}
</script>

<style>
.vm--overlay {
  background: rgba(0, 0, 0, 0.8);
}
</style>
