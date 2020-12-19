export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Aji Surochman',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/vue2-animate/dist/vue2-animate.min.css'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&family=Satisfy&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff',
    height: '10px'
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/icons.js', '@/plugins/vue-js-modal.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxt/content',
    '@nuxt/image'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    transpile: ['vue-icon']
  },
  tailwindcss: {
    viewer: true
  },
  components: true
}
