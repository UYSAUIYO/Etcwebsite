<template>
  <div class="my-12 px-4 text-caption" style="opacity: 0.8; z-index: 1">
    <b>EtherealCraft's Website</b>
    <br />Created by Mc_yuwen with ♥ since 2022.<br />
    <p id="htmer_time"></p>
    <a href="https://beian.miit.gov.cn">苏ICP备2021048590号</a>
    <br />
    <br />&copy; 2021-{{ year() }} YuWen.
    <v-dialog v-model="dialog" max-width="768px" :dark="dark">
      <template v-slot:activator="{ on, attrs }">
        <a v-bind="attrs" v-on="on"> 隐私政策 Privacy Policy. </a>
      </template>
      <v-card :dark="dark">
        <f-privacy-policy :dark="dark"></f-privacy-policy>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> 我同意 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import FPrivacyPolicy from "./PrivacyPolicy";
export default {
  components: {
    FPrivacyPolicy,
  },

  data: () => ({
    dialog: false,
  }),

  props: {
    dark: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    year() {
      return new Date().getFullYear();
    },
  },
  mounted() {
    function secondToDate(second) {
      if (!second) {
        return 0;
      }
      const time = [0, 0, 0, 0, 0];
      if (second >= 365 * 24 * 3600) {
        time[0] = parseInt(second / (365 * 24 * 3600));
        second %= 365 * 24 * 3600;
      }
      if (second >= 24 * 3600) {
        time[1] = parseInt(second / (24 * 3600));
        second %= 24 * 3600;
      }
      if (second >= 3600) {
        time[2] = parseInt(second / 3600);
        second %= 3600;
      }
      if (second >= 60) {
        time[3] = parseInt(second / 60);
        second %= 60;
      }
      if (second > 0) {
        time[4] = second;
      }
      return time;
    }
    function setTime() {
      //mouth要少一个月不然会出问题
      const create_time = Math.round(
        new Date(Date.UTC(2022, 2, 11, 0, 0, 0)).getTime() / 1000
      );
      const timestamp = Math.round(
        (new Date().getTime() + 8 * 60 * 60 * 1000) / 1000
      );
      const currentTime = secondToDate(timestamp - create_time);
      const currentTimeHtml =
        currentTime[0] +
        "年" +
        currentTime[1] +
        "天" +
        currentTime[2] +
        "时" +
        currentTime[3] +
        "分" +
        currentTime[4] +
        "秒";
      if (document.getElementById("htmer_time") != null)
        document.getElementById("htmer_time").innerHTML =
          "EtherealCraft服务器已经运行" + currentTimeHtml;
    }
    //即时刷新
    setInterval(setTime, 1000);
  },
};
</script>
