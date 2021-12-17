<template>
  <div class="home">
    <HelloWorld class="form" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style>
.form {
margin: 0 auto;
  width:80%
}

#white {
  margin: 0 auto;
  width: 70%;
  display: block;
}
#black{
  margin: 0 auto;
  width: 35%;
}
</style>