<template>
  <v-card
    class="pt-4 donatesnow"
    :dark="dark"
    elevation="4"
    style="background: none"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">服务器网络开发进度</v-list-item-title>
        <v-list-item-subtitle>server web development progress</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      项目有对于官网内容的维护和对于审核系统的维护，以及新的机器人正在迭代过程中，
      有兴趣的朋友们可以参加到我们更多项目的开发当中。
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
