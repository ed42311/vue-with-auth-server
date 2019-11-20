<template>
  <div class="view__login">
    <login-form />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
  name: 'login-view',
  components: {
    LoginForm
  }
}
</script>
