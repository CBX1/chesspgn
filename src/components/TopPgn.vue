<template>
<div class="home">
    <div v-if="checker">
    <div style="text-align:center">


<table style="margin: 0 auto;width:80%">
  <tbody>
    <tr>
      <td>Event:  {{this.pgnarr[1].split("\"")[1]}} </td>
      <td> Date: {{this.pgnarr[3].split("\"")[1]}}</td>
    </tr>
    <tr>
      <td> Round: {{this.pgnarr[4].split("\"")[1]}}  </td>
      <td>Site: {{this.pgnarr[2].split("\"")[1]}}</td>
    </tr>
     <tr>
      <td> Result: {{this.pgnarr[7].split("]")[0].split("\"")[1]}}</td>

    </tr>
  </tbody>
</table>
<br>
  </div>
        <div style="margin: 0 auto" id="board" />
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import { getPGN } from '../../firebase'
import { pgnView } from '@mliebelt/pgn-viewer';

export default {
  name: 'Pgn',
  data() {
      return {
          pgnstr: "init",
          board:  ""
      }
  },
  props: {
      hh: String
  },
  computed: {
        checker: function(){
        return this.pgnstr != 'N/A'
     },
     pgnarr: function(){
         return this.pgnstr.split("[")
     }
    }, 
 
 methods: {
  
    async create(){
     await getPGN(this.hh).then(value => {
                this.pgnstr = value
                console.log(this.pgnstr)
            })
            if(this.pgnstr != 'N/A'){
                    this.board = pgnView('board', {pgn: this.pgnstr })
                    console.log("worked")
            }
     }
 },
 async mounted() {
       this.create()
  },
  
}
</script>
