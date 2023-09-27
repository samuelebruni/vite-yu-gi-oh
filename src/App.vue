<script>
import NavbarComponents from './components/NavbarComponents.vue'
import MainComponents from './components/mainComponents.vue'

export default {
  name: 'app',
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
