<template>
  <v-card
    class="pt-4 donatesnow"
    :dark="dark"
    elevation="4"
    style="background: none"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">公益服务器</v-list-item-title>
        <v-list-item-subtitle
          >non-profit public service server</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      本服务器的技术支持由服内成员Mc_yuwen提供，腐竹公益支持
      <br />我们目前是一个纯公益服务器，通过爱发电平台，给我交点电费钱以表支持（求求了3q3）。
    </v-card-text>
    <v-card-actions>
      <v-btn
        class="ma-2"
        elevation="0"
        :style="'background: ' + color + '; color: white;'"
        :href="link"
        v-text="text"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    color: "#7d61cd",
    link: "https://afdian.net/a/etherealcraft",
    text: "爱发电",
  }),
  props: {
    dark: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
<style>
.donatesnow {
  opacity: 0.8;
  z-index: 1;
}
</style>
