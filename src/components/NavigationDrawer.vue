<template>
  <v-navigation-drawer
    :value="drawer"
    app
    clipped
    absolute
    src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
  >
    <v-list dense>
      <v-list-item
        link
        v-for="item in items"
        :key="item.text"
        :to="item.route"
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'navigation-drawer',
  data: () => ({
    items: [
      { text: 'Home', icon: 'mdi-view-dashboard', route: '/' },
      { text: 'About', icon: 'mdi-arrow-up-bold-circle', route: '/about' },
      { text: 'Register', icon: 'mdi-clipboard-account', route: '/register' }
    ]
  }),
  computed: {
    drawer: function () { return this.$store.getters.drawer },
    loggedIn: function () { return this.$store.getters.loggedIn }
  }
}
</script>
