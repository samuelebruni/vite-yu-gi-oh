<script>
import NavbarComponents from './components/NavbarComponents.vue'
import MainComponents from './components/mainComponents.vue'
import { store } from './store.js'

export default {
  name: 'app',
  data() {
    return {
      store
    }
  },
  created() {
    store.fetchData()
  },
  components: {//inserire tutti gli import che voglio eseguire
    NavbarComponents,
    MainComponents
  }
}

</script>

<template>
  <NavbarComponents />
  <MainComponents />
</template>

<style scoped></style>
