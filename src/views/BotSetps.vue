<template>
  <div style="background: none" :dark="dark">
  <v-stepper v-model="e1">
    <v-stepper-header :dark="dark" style="background: none">
      <v-stepper-step
          :complete="e1 > 1"
          step="1"
          style="background: none"
      >
        提交一审问卷
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
          :complete="e1 > 2"
          step="2"
      >
        添加审核人员
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">
        参加二审
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
            class="mb-12"
            height="auto"
            elevation="8"
        >
          <v-card-title>一审问卷</v-card-title>
          <v-card-subtitle>自搭建问卷系统</v-card-subtitle>
        <v-card-text><a class="retie" href="https://wj.etherealcraft.cn">一审问卷答题</a>是服务器审核的唯一途径,这是我们最快认识你的方式，服务器的审核总共分为三类后勤，红石和建筑。一审问卷在此基础上设计了一些简单的题目请大家认真作答。（请记得<a class="retie" href="https://wj.etherealcraft.cn/user/register">注册</a>，注册完成之后才能填写问卷。）
        一定要详细阅读审核要求，熟悉相关教程（后勤），知晓服务器的要求。
        </v-card-text>
          <v-card-actions>
            <v-btn @click="wj" color="#e3688b">审核入口</v-btn>
          </v-card-actions>
        </v-card>

        <v-btn
            color="#e3688b"
            @click="e1 = 2"
        >
          Next
        </v-btn>


      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
            class="mb-12"
            height="auto"
            elevation="8"

        >
          <v-card-title>审核机器人</v-card-title>
          <v-card-subtitle>菜鸟写的</v-card-subtitle>
          <el-image
              style="width: 100px; height: 200px;text-align: center; vertical-align: center"
              :src="url"
              :preview-src-list="srcList">
          </el-image>
          点击图片可放大
          <v-card-text>输入start开启程序，这是机器人，不要乱说话，后台有记录，请不要重复输入指令，我们会看的（的确）</v-card-text>
        </v-card>

        <v-btn
            color="#e3688b"
            @click="e1 = 3"

        >
          Next
        </v-btn>

      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
            class="mb-12"
            height="200px"
            elevation="8"

        >
          <v-card-title>二审</v-card-title>
          <v-card-subtitle>内部审核</v-card-subtitle>
        <v-card-text>进入审核群开始进一步的审核内容，要求：后勤模组要会，红石理解机器运行机制，会简单的改造机器，建筑，主观判断不做评价。</v-card-text>
        </v-card>

        <v-btn
            color="#e3688b"
            @click="e1 = 1"
        >
          Next
        </v-btn>


      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
  </div>
</template>

<script>
// import FhelpPages from "../views/helpPage";
export default {
  name: "BotSetps",
  components:{

  },
  data(){
    return{
      dialog:false,
      e1: 1,
      url:'http://api.etherealcraft.cn/picture/qrcode_1669105559469.jpg',
      srcList: [
        'http://api.etherealcraft.cn/picture/qrcode_1669105559469.jpg'
      ]
    }
  },
  methods:{
    wj(){
      window.open("https://wj.etherealcraft.cn/s/iWmBj1")
    }
  },
  props: {
    dark: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style scoped>
.retie{
  text-decoration: none;
}
</style>
