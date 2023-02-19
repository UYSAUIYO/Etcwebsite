<template>
  <v-card class="pt-4 mb-4" :dark="dark" elevation="4" style="background: none;">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">友情链接</v-list-item-title>
        <v-list-item-subtitle>Link</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
      <v-btn text @click="isOpen=!isOpen" v-on:click="isop =! isop" plain>{{word}}</v-btn>
    <collapse>
    <v-card>
      <div v-show="isop">
        <v-card
            class=" people"
            max-width="100"
            max-height="100"
        >
          <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="50"
                indeterminate
            ></v-progress-linear>
          </template><v-img height="50" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
          <v-card-title style="text-align: center">ETC</v-card-title>
        </v-card>
        <v-card
            class=" people"
            max-width="100"
            max-height="100"
        >
          <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="50"
                indeterminate
            ></v-progress-linear>
          </template><v-img height="50" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
          <v-card-title style="text-align: center">ETC</v-card-title>
        </v-card>
        <v-card
            class=" people"
            max-width="100"
            max-height="100"
        >
          <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="50"
                indeterminate
            ></v-progress-linear>
          </template><v-img height="50" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
          <v-card-title style="text-align: center">ETC</v-card-title>
        </v-card>
      </div>
    </v-card>

    </collapse>
  </v-card>
</template>

<script>
import collapse from "../assets/collapse";
export default {
  name: "linkPage",
  components:{
    collapse
  },
  data() {
    return{
      isop:false,
      isOpen:false,
    }
  },
  computed:{
    // eslint-disable-next-line vue/return-in-computed-property
    word (){
      if (this.isOpen ===false){
        return '展开'
      }else if (this.isOpen === true){
        return '收起'
      }
    }
  },
  props: {
    dark: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style scoped>
.people{
  padding: 15px;

}
</style>