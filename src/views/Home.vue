<template>
  <v-row align="center" justify="space-around">
    <h2 class="display-3">
      Hello
    </h2>
    <v-img
      :src="src"
      lazy-src="https://picsum.photos/id/11/10/6"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width="500"
      max-height="300"
    ></v-img>
    <h3 class="display-3">
      ---->
    </h3>
    <a  href="https://commons.wikimedia.org/w/index.php?curid=75290349" class="">
      By FruitMonkey - Own work, CC BY-SA 4.0
    </a>
  </v-row>
</template>

<script>
import seasonsGreetings from '@/assets/static/images/banksySeasonsGreetings.jpg'
export default {
  name: 'home',
  data () {
    return {
      src: seasonsGreetings,
      carouselTranstion: 'fade-transition'
    }
  }
}
</script>
