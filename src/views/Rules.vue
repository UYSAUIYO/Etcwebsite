<template>
  <v-dialog v-model="dialog" max-width="768px" :dark="dark">
    <template v-slot:activator="{ on, attrs }">
      <a v-bind="attrs" v-on="on">帮助</a>
    </template>
    <v-card :dark="dark">
      <fhelp-pages :dark="dark"></fhelp-pages>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false"> 确定 </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Rules",
};
</script>

<style scoped></style>
