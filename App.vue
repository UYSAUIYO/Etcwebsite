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
      <!--          <f-main-new-year></f-main-new-year>-->
      <v-container class="f-container">
        <f-main-about :dark="dark"></f-main-about>
        <f-main-chips :dark="dark"></f-main-chips>
        <!--                <f-picslide :dark="dark"></f-picslide>-->
        <f-contact
          style="display: block; opacity: 1; z-index: 1"
          :dark="dark"
        ></f-contact>
        <f-main-site :dark="dark"></f-main-site>
        <f-bot-steps :dark="dark"></f-bot-steps>
        <f-donate :dark="dark"></f-donate>
        <f-donates :dark="dark"></f-donates>
        <f-pick-show :dark="dark"></f-pick-show>
<!--        <f-link-page :dark="dark"></f-link-page>-->
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
          :dark="dark"
          style="
             {
              height: 100%;
              width: 100%;
              box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
              text-align: center;
              line-height: 40px;
              color: #1989fa;
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
// import FLinkPage from '/src/views/linkPage';
// import FMainNewYear from '../src/views/mainNewYear'

export default {
  name: "App",
  metaInfo: require("./data/meta.json"),
  components: {
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
    ],
    dark: false,
    dialog: false,
    // snow:false,
    drawer: null,
  }),
  methods: {},
  mounted() {
    Darkmode(this);
    // Snow(this);

  },
};
</script>

<style src="./assets/global.css"></style>
