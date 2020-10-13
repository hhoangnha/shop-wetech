<template>
  <div id="app">
    <notifications></notifications>
    <router-view/>
  </div>
</template>
<script>
import {socket,} from './main'
import Notiflix from "notiflix";
export default {
  data(){
    return{
      dataEvent:null
    }
  },
  created(){
    Notiflix.Notify.Init({fontSize:'15px',timeout:4000,messageMaxLength:200,position:'right-bottom'});
    this.notifSocketOrder()
  },
  methods:{
    notifSocketOrder(){
      socket.on("return-request-order",(data)=>{
        Notiflix.Notify.Success(
          `Đơn hàng mới từ ${data.username}`,
          function(){
            window.location.href=`http://localhost:8080/#/order-list`
          },
        )
      })

    },
  }
}
</script>