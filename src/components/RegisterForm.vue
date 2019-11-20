<template>
  <div>
    <v-form
      ref="form"
      @submit.prevent="register"
      v-model="valid"
      lazy-validation
    >
    <v-text-field
      v-model="givenName"
      :counter="10"
      :rules="nameRules"
      label="First Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="familyName"
      :counter="10"
      :rules="nameRules"
      label="Last Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :rules="passwordRules"
      label="Password"
      required
    ></v-text-field>
    <v-text-field
      v-model="passwordConfirmation"
      :rules="passwordRules"
      label="Password Confirmation"
      required
    ></v-text-field>
    <v-checkbox
      v-model="chillBox"
      :rules="[v => !!v || 'You must be chill to continue!!!!']"
      label="You gonna be chill?"
      required
    ></v-checkbox>
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      data-test="register-btn"
      @click="register"
    >
      Submit
    </v-btn>
    <v-btn
      color="error"
      class="mr-4"
      data-test="reset-btn"
      @click="reset"
    >
      Clear
    </v-btn>
    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    givenName: '',
    familyName: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 20) || 'Name must be less than 20 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    password: '',
    passwordConfirmation: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 8) || 'Password must be greater 8 characters'
    ],
    chillBox: false
  }),
  methods: {
    register () {
      const data = ({ givenName, familyName, email, password, chillBox }) => ({
        givenName,
        familyName,
        email,
        password,
        chillBox
      })
      this.$store.dispatch('register', data(this))
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    },
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    submit () {
      this.$refs.form.submit()
    }
  }
}
</script>
