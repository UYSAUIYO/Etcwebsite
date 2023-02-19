<template>
  <aplayer :audio="audio" :lrcType="3" fixed />
</template>

<script>
import Vue from 'vue'
import {APlayer} from "@moefe/vue-aplayer";
Vue.use(APlayer)
export default {
  name: "AudioPlayer",
  data(){
    return{
      audio:[
        {
          name: '1up',
          artist: ' - F-777',
          url: 'https://api.etherealcraft.cn/music/1up%20-%20F-777.mp3',
          cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300',
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
