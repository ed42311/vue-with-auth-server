<template>
  <div class="hello">
    <h1>Hello World</h1>
    <p>
     {{ msg }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
