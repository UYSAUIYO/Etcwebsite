<template>
  <v-card class="pt-4" :dark="dark" elevation="4" style="background: none">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">急招人员</v-list-item-title>
        <v-list-item-subtitle>Urgently recruit people</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      目前服务器正在处于高速发展阶段，缺少肝帝大佬和一些开发人员、美术人员等，来加速服务器的发展。
      <br />由于开发人员开发水平有限，所以<a class="retie"
        >希望热爱游戏的开发者加入服务器</a
      >
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
<style></style>
