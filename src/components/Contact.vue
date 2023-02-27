<template>
  <v-card class="pt-4 mb-4" :dark="dark" elevation="4" style="background: none">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">联系我们</v-list-item-title>
        <v-list-item-subtitle>Contact</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <div class="px-2 pb-2">
      <v-row no-gutters>
        <v-col cols="6"  class="px-2">

            <div class="text-center">
              <v-dialog
              v-model="dialogVisible"
              width="500">
                <template v-slot:activator="{on,attrs}">
                  <v-card
                      class="contactsonw"
                      outlined
                      elevation="4"
                      style="background: none; "
                      :dark="dark"
                      v-bind="attrs"
                      v-on="on"
                  >
                  <v-card-title class="headline">腐竹</v-card-title>
                  <v-card-subtitle >章鱼蛋</v-card-subtitle>
                  </v-card>
                </template>
                <v-card>
                  <v-card-title>{{botsetps.title}}</v-card-title>
                  <v-card-text>{{botsetps.contact.one}}</v-card-text>
                </v-card>
              </v-dialog>
            </div>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
// import contact from "../data/contact.json";
export default {
  // data: () => contact,
  data() {
    return {
      dialogVisible: false,
      innerVisible0: false,
      innerVisible1: false,
      innerVisible2: false,
      dialogVisible3: false,
      botsetps:require("@/data/botsetps.json"),
      data: [
        {
          href: "tencent://message/?uin=2665405745&Site=&Menu=yes",
          key: "腐竹",
          value: "QQ联系",
        },
        {
          href: "https://wj.etherealcraft.cn/s/iWmBj1",
          key: "问卷审核",
          value: "审核要求",
        },
      ],
      urlrq: "http://api.etherealcraft.cn/picture/qrcode_1669105559469.jpg",
      srcList: ["http://api.etherealcraft.cn/picture/qrcode_1669105559469.jpg"],
    };
  },
  methods: {},
  props: {
    dark: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
<style scoped>
.contactsonw {
  z-index: 1;
  opacity: 0.8;
}
</style>
