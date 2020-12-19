export const state = () => ({
  darkMode: true,
  popupImg: ''
})

export const mutations = {
  toggleDarkMode(state) {
    state.darkMode = !state.darkMode

    if (state.darkMode) {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  },
  setPopupImg(state, n) {
    state.popupImg = n
  }
}
