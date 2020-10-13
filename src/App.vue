<template>
  <div id="app">
    <notifications></notifications>
    <router-view/>
  </div>
</template>
<script>
import {socket,} from './main'
export default {
  data(){
    return{
      dataEvent:null
    }
  },
  created(){
    this.notifSocketOrder()
  },
  methods:{
    notifSocketOrder(){
      socket.on("return-request-order",(data)=>{
        console.log(data)
      })
    } 
  }
}
</script>