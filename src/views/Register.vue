<template>
  <div class="home">
    Hello
    <register-form />
  </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm'

export default {
  name: 'register',
  components: {
    RegisterForm
  }
}
</script>
