<template>
  <div class="hello">
PGNNNN
<form>
<label> Event </label>
<input v-model="event" type="text">

<label> Site </label>
<input v-model="site" type="text">



<label> Date </label>
<input v-model="date" type="text">

<label> Round </label>
<input v-model="round" type="text">

<label> White </label>
<input v-model="white" type="text">

<label> Black </label>
<input v-model="black" type="text">

<label> Result </label>
<input v-model="result" type="text">

    <div id="board"></div>

</form>
<button v-on:click="onclick"> Submit </button>
  </div>

</template>

<script>
import { pgnEdit } from '@mliebelt/pgn-viewer';
import { createPGN } from '../../firebase'
export default {

  name: 'ViewPgn',
  data() {
    return {
      event: '?',
      date: '',
      site: '?',
      round: '?',
      white: '?',
      black: '?',
      result: '*',
      boar: null

    }
  },
  mounted() {
   this.boar = pgnEdit('board', {width: '400px' });
  },
  props: {
    msg: String
  },
  methods: {
    onclick(){
    console.log("submit")
    this.generatePGNTop()
    console.log(process.env.VUE_APP_APIKEY)
    
    },
    generatePGNTop(){
      var x = "[Event \"" + this.event + "\"]\n"  + "[Site \"" + this.site + "\"]\n"  + "[Date \"" + this.event + "\"]\n"  + "[Round \"" + this.event + "\"]\n"  + "[White \"" + this.white + "\"]\n"  + "[Black \"" + this.black + "\"]\n" + "[Result \"" + this.event + "\"]\n" + this.boar.base.getPgn().writePgn() 
      createPGN(x)
      console.log(x)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
