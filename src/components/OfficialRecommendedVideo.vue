<template>
  <v-card
    class="pt-4 donatesnow"
    :dark="dark"
    elevation="4"
    style="background: none"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">官方视频推荐</v-list-item-title>
        <v-list-item-subtitle>Official recommended video</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      <el-empty description="暂无内容"></el-empty>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "OfficialRecommendedVideo",
  props: {
    dark: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped></style>
