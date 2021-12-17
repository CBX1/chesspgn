<template>
  <div class="hello">
<form>
<label for="event"> Event </label>
<input id="event" v-model="event" type="text">

<label for="site"> Site </label>
<input id="site" v-model="site" type="text">



<label for="date"> Date </label>
<input id="date" v-model="date" type="date">

<label> Round </label>
<input v-model="round" type="number" min="0">

<label style="text-align:center"> Players </label>
<input v-model="white" id="black" type="text">


<input v-model="black" id="white" type="text">
<br>
    
<label> Result </label>
<select v-model="result">
  <option value="*">Select a Result</option>
  <option>1-0</option>
  <option>1/2-1/2</option>
  <option>0-1</option>
</select>
<div id="board"></div>
<br>

</form>
<div style="text-align:center">
<button  v-on:click="onclick"> Generate PGN </button>
</div>
  </div>

</template>

<script>
  import { pgnEdit } from '@mliebelt/pgn-viewer';
  import { createPGN } from '../../firebase'
  export default {

    name: 'HelloWorld',
    data() {
      return {
        event: '?',
        date: '????.??.??',
        site: '?',
        round: '?',
        white: '?',
        black: '?',
        result: '*',
        boar: null

      }
    },
    mounted() {
    this.boar = pgnEdit('board', );
    },
    props: {
      msg: String
    },
    methods: {
      onclick(){
      console.log("submit")
      this.generatePGNTop()

      
      },
     async generatePGNTop(){
        var x = "[Event \"" + this.event + "\"]\n"  + "[Site \"" + this.site + "\"]\n"  + "[Date \"" + this.date.split("-").join(".") + "\"]\n"  + "[Round \"" + this.round + "\"]\n"  + "[White \"" + this.white + "\"]\n"  + "[Black \"" + this.black + "\"]\n" + "[Result \"" + this.result + "\"]\n" + this.boar.base.getPgn().writePgn() 
       const v =  await createPGN(x)
        this.$router.push({path: v, params:{name: v} })
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#board{
      margin: 0 auto
}
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
#white {
 margin: 0 auto;
width:40%;
  margin-right:-10%;
 display: block;

}
form {
  margin-bottom: 0
}
#black {
 margin: 0 auto;
 width: 40%;

 display: block;
 float: left;
}
</style>
