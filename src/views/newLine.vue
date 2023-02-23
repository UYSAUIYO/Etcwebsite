<template>
  <div class="test-subtitle-1" id="activityText">{{ count }}</div>
</template>

<script>
export default {
  name: "newLine",
  data() {
    return {
      count: "",
      second: 4579200,
    };
  },
  mounted() {
    this.countDown();
  },
  methods: {
    countDown() {
      function addZero(i) {
        return i < 10 ? "0" + i : i;
      }
      let timer = null;
      const startTime = new Date("2022-02-11 00:00:00");
      const endTime = new Date("2023-03-11 23:59:59");
      const nowTime = new Date();
      const beginDiff = parseInt(
        (startTime.getTime() - nowTime.getTime()) / 1000
      );
      //当前时间距离活动结束时间的差值
      const endDiff = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);
      const leftTime = beginDiff > 0 ? beginDiff : endDiff;
      let day = parseInt(leftTime / (24 * 60 * 60));
      let hour = parseInt((leftTime / (60 * 60)) % 24);
      let minute = parseInt((leftTime / 60) % 60);
      let second = parseInt(leftTime % 60);
      day = addZero(day);
      hour = addZero(hour);
      minute = addZero(minute);
      second = addZero(second);

      if (beginDiff > 0) {
        this.count = day + "天" + hour + "时" + minute + "分" + second + "秒";
        timer = setTimeout(this.countDown, 1000);
      } else if (leftTime <= 0) {
        this.count = "接下来时服务器的第二年";
        clearTimeout(timer);
      } else {
        this.count = day + "天" + hour + "时" + minute + "分" + second + "秒";
        timer = setTimeout(this.countDown, 1000);
      }
    },
  },
};
</script>

<style scoped></style>
