<template>
  <v-app-bar
    app
    clipped-left
  >
    <v-app-bar-nav-icon
      class="navbar__icon"
      data-test="toggle-drawer-icon"
      @click.stop="toggleDrawer"
    />
    <v-toolbar-title>The Auditorium</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'nav-bar',
  methods: {
    toggleDrawer: function () {
      this.$store.dispatch('toggleDrawer')
    }
  }
}
</script>
