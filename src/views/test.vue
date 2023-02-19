<template>
  <v-card>
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

        <v-stepper-step :complete="e1 > 2" step="2">
          添加审核人员
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3"> 参加二审 </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12" height="auto" elevation="8">
            <v-card-title>一审问卷</v-card-title>
            <v-card-subtitle>自搭建问卷系统</v-card-subtitle>
            <v-card-text>
              <a class="retie" href="https://wj.etherealcraft.cn"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一审问卷答题</a
              >是服务器审核的唯一方法。一审问卷基于游戏机制设计了一些简单的题目，请大家认真作答。<br />
              服务器的审核总共分为三类后勤，红石和建筑以及技术类人员，从事自媒体行业，画师或有编程基础等人员，可以在一审的最后上传一些个人作品，如视频链接，原创画作，开源项目示例等，我们的审核员会更加感兴趣(为服务器宣传发展做铺垫)，希望对我们服务器有兴趣的人可以加入我们服务器。<br />
              （请记得<a
                class="retie"
                href="https://wj.etherealcraft.cn/user/register"
            >注册</a
            >，注册完成之后才能填写问卷。）
              一定要详细阅读审核要求，熟悉相关教程（后勤），知晓服务器的要求。
            </v-card-text>
            <v-card-actions>
              <v-btn @click="wj" color="#e3688b">审核入口</v-btn>
            </v-card-actions>
          </v-card>
          <v-btn color="#e3688b" @click="e1 = 2"> Next </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-12" height="auto" elevation="8">
            <v-card-title
            >审核机器人(目前暂停运行请人工联系QQ2110146041)</v-card-title
            >
            <v-card-subtitle>菜鸟写的</v-card-subtitle>
            <el-image
                style="
                        width: 100px;
                        height: 200px;
                        text-align: center;
                        vertical-align: center;
                      "
                :src="url"
                :preview-src-list="srcList"
            >
            </el-image>
            点击图片可放大
            <v-card-text
            >输入start开启程序，请不要重复输入指令，不要乱说话，后台有记录。审核员会根据个人简介及游戏理解进行问答</v-card-text
            >
          </v-card>

          <v-btn color="#e3688b" @click="e1 = 3"> Next </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-12" height="200px" elevation="8">
            <v-card-title>二审</v-card-title>
            <v-card-subtitle>内部审核</v-card-subtitle>
            <v-card-text
            >进入审核群开始进一步的审核内容
              二审为红石，后勤及建筑三选一，在限定时间内答题
              要求：后勤，会使用masa全家桶及投影mod；红石，理解机器运行机制，会简单的改造机器；建筑，目前主要看有没有原创作品，根据个人主观进行判断
              上传作品的人会根据上传内容分为剪辑，编程和运营三类，审核人员会对能力进行检测，能力足够的人二审可以降低难度或者免除二审（要求一审必须通过）
            </v-card-text>
          </v-card>

          <v-btn color="#e3688b" @click="e1 = 1"> Next </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-card>
</template>

<script>
export default {
  name: "test"
}
</script>

<style scoped>

</style>
