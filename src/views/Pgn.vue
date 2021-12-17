<template>
  <div class="home">

<TopPgn :hh="name" />

</div>
</template>

<script>
// @ is an alias to /src

import TopPgn from '@/components/TopPgn.vue'

export default {
  name: 'Pgn',
  components: {
      TopPgn
  },
  props: {
      name: {
          type: String,
          default: "",
      }
  }
 
}
</script>
