<template>
  <v-card>
    <div id="rightMenu">
      <ul>
        <li>影像图</li>
        <li>平面图</li>
      </ul>
    </div>
  </v-card>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import rightclick from '@/assets/rightclick'
export default {
  name: "RightClick",
  data : ()=>{
    rightclick=true
  }
};
</script>

<style scoped>
#rightMenu {
  position:absolute;
  width: 100px;
  background: white;
  box-shadow: 2px 2px 8px 1px #888888;
  display: none;
  /*top:-9999px;
  left:-9999px;
  background: #0a36e9;*/
}
#rightMenu ul {
  list-style: none;
  width: 100%;
  float: left;
  padding-left: 0px;
}
#rightMenu ul li{
  display: inline-block;
  text-decoration: none;
  color: #555;
  width: 100%;
  padding: 10px 0;
  text-align: center;
  cursor: pointer;
}
#rightMenu ul li:first-of-type {
  border-radius: 5px 5px 0 0;
}
#rightMenu ul li:hover{
  background: #eee;
  color: #CC1A1A;
}
</style>
