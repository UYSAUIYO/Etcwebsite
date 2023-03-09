<template>
  <v-app :class="dark ? 'f-dark' : ''">
    <v-app-bar
      app
      elevate-on-scroll
      clipped-left
      style="
        transition: 0s ease background-color,
          280ms cubic-bezier(0.4, 0, 0.2, 1) box-shadow;
      "
      :dark="dark"
      :color="dark ? '#121212' : '#fff'"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ header.title }}</v-toolbar-title>
      <el-divider direction="vertical"></el-divider>

      <v-spacer></v-spacer>
      <v-btn icon @click.stop="dark ? offDarkMode() : onDarkMode()">
        <v-icon>mdi-{{ header.icon.darkmode }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" floating app clipped :dark="dark">
      <f-navbar-list></f-navbar-list>
    </v-navigation-drawer>

    <v-main :dark="dark">
      <canvas id="canvas" class="snow"></canvas>
      <f-main-title></f-main-title>
      <v-container class="f-container">
        <f-main-about :dark="dark"></f-main-about>
        <f-main-chips :dark="dark"></f-main-chips>
        <f-contact
          style="display: block; opacity: 1; z-index: 1"
          :dark="dark"
        ></f-contact>
        <f-main-site :dark="dark"></f-main-site>
        <f-bot-steps :dark="dark"></f-bot-steps>
        <official-recommended-video :dark="dark"></official-recommended-video>
        <f-donate :dark="dark"></f-donate>
        <f-donates :dark="dark"></f-donates>
        <f-pick-show :dark="dark"></f-pick-show>
        <f-footer :dark="dark"></f-footer>
        <aplayer :audio="audio" :lrcType="3" fixed />
      </v-container>
      <el-backtop
        :dark="dark"
        visibility-height="150"
        :right="10"
        :bottom="100"
      >
        <div

          style="
             {
              height: 100%;
              width: 100%;
              box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
              text-align: center;
              line-height: 40px;
              color: #fb7299;
            }
          "
        >
          ↑
        </div>
      </el-backtop>
    </v-main>
  </v-app>
</template>

<script>
console.log("%c 邀请您加入我们的开发 %c ".concat("QQ2110146041", " ").concat("添加信息:开发路🐫", " %c"), 'background: #35495e; padding: 1px; border-radius: 3px 0 0 3px; color: #fff', 'background: #fb7299; padding: 1px; border-radius: 0 3px 3px 0; color: #fff', 'background: transparent');
import Darkmode from "./assets/darkmode";
// import Snow from  "./assets/snow"

import FNavbarList from "./components/NavbarList";
import FMainTitle from "./components/Title";
import FMainAbout from "./components/About";
import FMainChips from "./components/Chips";
import FContact from "./components/Contact";
import FMainSite from "./components/Site";
import FDonate from "./components/Donate";
import FFooter from "./components/Footer";
import FDonates from "./components/Donates";
// import FPicslide from "./components/Picslide";
import FPickShow from "./components/PickShow";
import FBotSteps from "./views/BotSetps";
import OfficialRecommendedVideo from "@/components/OfficialRecommendedVideo.vue";
// import FLinkPage from '/src/views/linkPage';


export default {
  name: "App",
  metaInfo: require("./data/meta.json"),
  components: {
    OfficialRecommendedVideo,
    // FMainNewYear,
    FNavbarList,
    FMainTitle,
    FMainAbout,
    FMainChips,
    FMainSite,
    FContact,
    FDonate,
    FDonates,
    FFooter,
    // FLinkPage,
    // FPicslide,
    FPickShow,
    FBotSteps,
  },

  data: () => ({
    onDarkMode() {},
    offDarkMode() {},
    header: require("./data/header.json"),
    audio: [
      {
        name: "1up",
        artist: " - F-777",
        url: "https://api.etherealcraft.cn/music/1up%20-%20F-777.mp3",
      },
      {
        name: "2U",
        artist: "Bad Computer",
        url: "https://api.etherealcraft.cn/music/2U%20-%20Bad%20Computer.flac",
      },
      {
        name: "8 Bit",
        artist: "Adhesive Wombat",
        url: "https://api.etherealcraft.cn/music/8%20Bit%20Adventure%20-%20Adhesive%20Wombat.flac",
      },
      {
        name: "A Little More Like You",
        artist: " Dropgun",
        url: "https://api.etherealcraft.cn/music/A%20Little%20More%20Like%20You%20-%20Dropgun.flac",
      },
      {
        name:"C418",
        artist: "C418 - Minecraft",
        url:"https://api.etherealcraft.cn/music/C418 - Minecraft.mp3"
      },
      {
        name:"ChakYoun9 - Keep Going - 继续前行",
        artist: "ChakYoun9 - Keep Going - 继续前行",
        url:"https://api.etherealcraft.cn/music/ChakYoun9 - Keep Going - 继续前行.mp3"
      },
      {
        name:"Drop Tower,Nyte - Pluto (Drop Tower Remix)",
        artist: "Drop Tower,Nyte - Pluto (Drop Tower Remix)",
        url:"https://api.etherealcraft.cn/music/Drop Tower,Nyte - Pluto (Drop Tower Remix).mp3"
      },
      {
        name:"Flowless - Coming Down",
        artist: "Flowless - Coming Down",
        url:"https://api.etherealcraft.cn/Flowless - Coming Down.mp3"
      },
      {
        name:"K-391 - Solstice",
        artist: "K-391 - Solstice",
        url:"https://api.etherealcraft.cn/music/K-391 - Solstice.mp3"
      },
      {
        name:"Kyle Xian - ODDTAXI（TV动画《奇巧出租车ODD TAXI》OP）",
        artist: "Kyle Xian - ODDTAXI（TV动画《奇巧出租车ODD TAXI》OP）",
        url:"https://api.etherealcraft.cn/music/Kyle Xian - ODDTAXI（TV动画《奇巧出租车ODD TAXI》OP）.mp3"
      },
      {
        name:"MT1990 - 点星（Point The Star）",
        artist: "MT1990 - 点星（Point The Star）",
        url:"https://api.etherealcraft.cn/music/MT1990 - 点星（Point The Star）.mp3"
      },
      {
        name:"Nyte - Flicker",
        artist: "Nyte - Flicker",
        url:"https://api.etherealcraft.cn/music/Nyte - Flicker.mp3"
      },
      {
        name:"Ooyy - Bottai",
        artist: "Ooyy - Bottai",
        url:"https://api.etherealcraft.cn/music/Ooyy - Bottai.mp3"
      },
      {
        name:"Organic Stereo - Seaway",
        artist: "Organic Stereo - Seaway",
        url:"https://api.etherealcraft.cn/music/Organic Stereo - Seaway.mp3"
      },
      {
        name:"Otokaze - 雨道",
        artist: "Otokaze - 雨道",
        url:"https://api.etherealcraft.cn/music/Otokaze - 雨道.mp3"
      },
      {
        name:"RADWIMPS - 夕霧",
        artist: "RADWIMPS - 夕霧",
        url:"https://api.etherealcraft.cn/music/RADWIMPS - 夕霧.mp3"
      },
      {
        name:"The Paragon Axis - Touch",
        artist: "The Paragon Axis - Touch",
        url:"https://api.etherealcraft.cn/music/The Paragon Axis - Touch.mp3"
      },
      {
        name:"Thomas Greenberg - Hopeful Hearts",
        artist: "Thomas Greenberg - Hopeful Hearts",
        url:"https://api.etherealcraft.cn/music/Thomas Greenberg - Hopeful Hearts.mp3"
      },
      {
        name:"Tim McMorris - Give Our Dreams Their Wings to Fly",
        artist: "Tim McMorris - Give Our Dreams Their Wings to Fly",
        url:"https://api.etherealcraft.cn/music/Tim McMorris - Give Our Dreams Their Wings to Fly.mp3"
      },
      {
        name:"陈致逸,HOYO-MiX - Moon in One's Cup 杯中明月",
        artist: "陈致逸,HOYO-MiX - Moon in One's Cup 杯中明月",
        url:"https://api.etherealcraft.cn/music/陈致逸,HOYO-MiX - Moon in One's Cup 杯中明月.mp3"
      },
      {
        name:"橘子海 (Orange Ocean) - 夏日漱石 (Summer Cozy Rock)",
        artist: "橘子海 (Orange Ocean) - 夏日漱石 (Summer Cozy Rock)",
        url:"https://api.etherealcraft.cn/music/橘子海 (Orange Ocean) - 夏日漱石 (Summer Cozy Rock).mp3"
      },
      {
        name:"吱吱吱小吱 - 【钢琴版】舞い落ちる花びら（Fallin' Flower）（翻自  SEVENTEEN）",
        artist: "吱吱吱小吱 - 【钢琴版】舞い落ちる花びら（Fallin' Flower）（翻自 SEVENTEEN）",
        url:"https://api.etherealcraft.cn/music/吱吱吱小吱 - 【钢琴版】舞い落ちる花びら（Fallin' Flower）（翻自 SEVENTEEN）.mp3"
      }
    ],
    dark: false,
    dialog: false,
    // snow:false,
    drawer: null,
  }),
  methods: {

  },
  mounted() {
    Darkmode(this);
    // Snow(this);

  },
};
</script>

<style src="./assets/global.css"></style>
