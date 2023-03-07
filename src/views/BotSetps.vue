<template>
  <div style="background: none" class="bots" :dark="dark">
    <v-card style="background:none">
      <v-toolbar flat color="#fb7299" :dark="dark">
        <v-toolbar-title>审核单元</v-toolbar-title>
        <v-card-subtitle>Beta</v-card-subtitle>
      </v-toolbar>
      <v-tabs vertical :dark="dark">
        <v-tabs-slider color="#fb7299"></v-tabs-slider>
        <v-tab left>
          <v-icon>mdi-account-alert</v-icon>
          基础要求
        </v-tab>
        <v-tab>
          <v-icon left> mdi-chip </v-icon>
          红石
        </v-tab>
        <v-tab>
          <v-icon left> mdi-bank </v-icon>
          后勤
        </v-tab>
        <v-tab>
          <v-icon left> mdi-apps </v-icon>
          建筑
        </v-tab>

        <v-tab-item>
          <v-card flat :dark="dark">
            <v-card-title>审核规定</v-card-title>
            <v-card-subtitle>审核流程介绍</v-card-subtitle>
            <v-card-text>
              <v-card-actions>要求：</v-card-actions>
              <p>
                1.请确保提供的联系方式是正确的，是可以可以联系的，是您本人的账号。
              </p>
              <p>
                2.通过唯一渠道进行审核，审核玩家应需要填写一审问卷，先注册一个<a
                  @click="regsiter"
                  >审核平台账号</a
                >参与审核问卷，一审问卷内容会根据实际情况进行修改，以确保问卷没有问题。
              </p>
              <p>
                3.审核玩家请认真填写一审问卷,重复提交问卷会降低印象分，如果提交问卷在一个月内没有得到答复，则是未通过。
              </p>
              <p>
                4.单张问卷审核时间最多14个工作日，每周最多投卷一次，请勿重复提交。
              </p>
              <p>
                5.一审通过后，进入二审，二审通过后，有为期一周的<a plain @click="tftip">考察期</a>，主要是在线率和交流情况。
              </p>
              <p>
                6.有更多特长也许是个加分项，请好好写下您的个人情况简介，我们会更加在意。
              </p>
              <p>7.入服后请阅读<a @click="note">入服须知。</a></p>
              <div class="text-center">
                <v-dialog v-model="dialog">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="login"
                      color="#fb7299"
                      v-bind="attrs"
                      v-on="on"
                      :dark="dark"
                    >
                      <v-icon>mdi-login</v-icon>
                      注册
                    </v-btn>
                  </template>
                  <v-card :dark="dark" style="max-width: 450px; margin: 0 auto">
                    <v-card-title
                      style="background-color: #fb7299"
                      class="text-h5 lighten-2"
                    >
                      {{ botsetps.title }}
                    </v-card-title>
                    <v-card-text>
                      <p>
                        {{ botsetps.tipstext.one }}
                      </p>
                      <p>
                        {{ botsetps.tipstext.two }}
                      </p>
                      <p>
                        {{ botsetps.tipstext.three }}
                      </p>
                      <p>
                        {{ botsetps.tipstext.four }}
                      </p>
                      <p>
                        {{ botsetps.tipstext.five }}
                      </p>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="#fb7299" text @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                        关闭
                      </v-btn>
                      <v-btn :loading="loading3"
                             :disabled="loading3" color="#fb7299" text @click="loader = 'loading3'">
                        <v-icon>mdi-login</v-icon>
                        注册
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat :dark="dark">
            <v-card-title>红石</v-card-title>
            <v-card-subtitle>审核流程介绍</v-card-subtitle>
            <v-card-text>
              <v-card-actions>要求：</v-card-actions>
              <v-card-actions>
                <p>
                  对于Minecraft的游戏特性也有所了解，对于红石基础有足够的认知，协助或独自制造或者修改过
                  红石机器，游戏时间比较充裕，对于机器的原理能有所解释，能够擅长沟通解决问题。
                </p>
              </v-card-actions>
              <v-btn class="login" @click="mongily" color="#fb7299">
                <v-icon>mdi-upload</v-icon>
                填写问卷
              </v-btn>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat :dark="dark">
            <v-card-text>
              <v-card-title>后勤要求</v-card-title>
              <v-card-subtitle>审核流程介绍</v-card-subtitle>
              <v-card-text>
                <p>
                  1.熟悉各种mod的使用，熟练使用喷射合成台，详细内容请查看网站的相关教程列表。
                </p>
                <p>2.在线频率高，在线不强制要求，活跃度很高也算是加分项。</p>
                <p>3.长时间不在线请向任意管理员说明情况</p>
                <v-btn class="login" @click="mongily" color="#fb7299">
                  <v-icon>mdi-upload</v-icon>
                  填写问卷
                </v-btn>
              </v-card-text>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat :dark="dark">
            <v-card-text>
              <v-card-title>建筑</v-card-title>
              <v-card-subtitle>审核要求介绍 Beta</v-card-subtitle>
              <p>
                1.一审考理论性知识，有一个大概的知识方向没出错基本都能通过，（来卖授权和投影的可以走了）。
              </p>
              <p>
                2.二审是一些简单的交流和实操部分，如果有作品，请直接在一审问卷中上传您的作品视频或者是图片。
              </p>
              <p>3.这里的审核问卷是特指为建筑师的审核，如果没有一定的把握请尝试其他问卷。</p>
              <v-btn class="login" @click="build" color="#fb7299">
                <v-icon>mdi-upload</v-icon>
                填写问卷
              </v-btn>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
// import FhelpPages from "../views/helpPage";
export default {
  name: "BotSetps",
  components: {},
  data() {
    return {
      botsetps: require("../data/botsetps.json"),
      tab: null,
      items: ["红石", "后勤", "建筑"],
      loader:null,
      dialog: false,
      loading3:false,
      e1: 1,
      url: "http://api.etherealcraft.cn/picture/qrcode_1669105559469.jpg",
      srcList: ["http://api.etherealcraft.cn/picture/qrcode_1669105559469.jpg"],
    };
  },
  watch:{
    loader (){
      const l = this.loader
      this[l] = !this[l]
      setTimeout(() => (this[l] = false), 3000)
      setTimeout(function (){
        window.open("https://wj.etherealcraft.cn/user/register")
      },3000)
    }
  },
  methods: {
    tftip(){
      const tfttiph = this.$createElement;
      this.$notify({
        title:'考察期',
        message:tfttiph('i','考察期指的是新成员入服七天内的综合表现。'),
        type:'warning',
        position:'bottom-left',
        showClose:false,
        offset:100
      })
    },
    regsiter() {
      window.open("https://wj.etherealcraft.cn/user/register");
    },
    mongily() {
      // window.open("https://wj.etherealcraft.cn/s/iWmBj1");
      window.open("https://wj.etherealcraft.cn/s/HXNCc1");
    },
    build() {
      window.open("https://wj.etherealcraft.cn/s/RprmzU");
    },
    note() {
      window.open("https://docs.qq.com/doc/DZGFCZlBFY0htbHdh");
    },
  },
  props: {
    dark: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
/*.retie {*/
/*  text-decoration: none;*/
/*}*/
/* .bots{
  display: table-cell;
  max-width: 550px;
} */
.login {
  background-color: #fb7299;
}
</style>
