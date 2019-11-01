<template>
  <div>
    <h4>Register</h4>
    <form @submit.prevent="register">
      <label for="givenName">First Name</label>
      <div>
          <input id="givenName" type="text" v-model="givenName" required autofocus>
      </div>
      <label for="familyName">Last Name</label>
      <div>
          <input id="familyName" type="text" v-model="familyName" required autofocus>
      </div>
      <label for="email" >E-Mail Address</label>
      <div>
          <input id="email" type="email" v-model="email" required>
      </div>
      <label for="password">Password</label>
      <div>
          <input id="password" type="password" v-model="password" required>
      </div>
      <label for="password-confirm">Confirm Password</label>
      <div>
          <input id="password-confirm" type="password" v-model="password_confirmation" required>
      </div>
      <div>
          <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
// {
//  "firstName": "hello",
//  "lastName": "there",
//  "email": "test@test.coms",
//  "password": "12345678"
// }
// password confirmation ?
// check password agianst password and validate
// roles ?
export default {
  data () {
    return {
      givenName: '',
      familyName: '',
      email: '',
      password: '',
      password_confirmation: ''
      // is_admin: null
    }
  },
  methods: {
    register: function () {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password
        // is_admin: this.is_admin
      }
      this.$store.dispatch('register', data)
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    }
  }
}
</script>
