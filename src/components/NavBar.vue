<template>
  <v-app-bar
    app
    clipped-left
  >
    <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    <v-toolbar-title>Standard Auth</v-toolbar-title>
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
