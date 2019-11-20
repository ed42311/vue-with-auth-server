<template>
  <v-app id="app">
    <navigation-drawer/>
    <nav-bar/>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
      <router-view/>
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavigationDrawer from '@/components/NavigationDrawer'
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavigationDrawer,
    NavBar
  },
  created () {
    this.$vuetify.theme.dark = true
  }
}
</script>
