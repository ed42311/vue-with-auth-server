<template>

 <v-row
    align="center"
    justify="center"
    class="view__register"
  >
    <v-card
      class="mx-auto"
      height="600"
      width="40%"
      elevation="14"
    >
      <v-container fluid>
      <register-form/>
      </v-container>
    </v-card>
  </v-row>
</template>

<script>
import colors from 'vuetify/lib/util/colors'
import RegisterForm from '@/components/RegisterForm'

export default {
  name: 'register-view',
  components: {
    RegisterForm
  },
  data: () => ({
    end: colors.grey.lighten1,
    start: colors.grey.darken4
  })
}
</script>
