export const state = () => ({
  darkMode: true
})

export const mutations = {
  toggleDarkMode(state) {
    state.darkMode = !state.darkMode

    if (state.darkMode) {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }
}
