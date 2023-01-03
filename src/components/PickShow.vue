<template>
  <v-card class="pt-4" :dark="dark" elevation="4" style="background: none">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">急招人员</v-list-item-title>
        <v-list-item-subtitle>Urgently recruit people</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      目前服务器正在处于高速发展阶段，缺少肝帝大佬和一些开发人员、美术人员等，来作为我们服务器的高速发展做铺垫。
      <br />由于开发人员开发水平有限，所以<a class="retie">才找一些开发人员的。(别骂了w3w)</a>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    color: "#7d61cd",
    link: "https://afdian.net/@flyingsky",
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

</style>
