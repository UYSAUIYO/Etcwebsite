<template>
    <v-card class="pt-4" :dark="dark" elevation="4" style="background: none;">
<!--        <v-list-item>-->
<!--            <v-list-item-content>-->
<!--                <v-list-item-title class="headline">关于服务器</v-list-item-title>-->
<!--                <v-list-item-subtitle>About Server</v-list-item-subtitle>-->
<!--            </v-list-item-content>-->
<!--        </v-list-item>-->
        <v-card-text class="f-text" style="max-width: 650px;">
          <v-card
              class="mx-auto"
              max-width="auto"
          >
            <v-card
                dark
                flat
            >

              <v-card-title class="pa-2 pink accent-1">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="headline">关于服务器</v-list-item-title>
                    <v-list-item-subtitle>About Server</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card-title>

            </v-card>
            <v-card-text class="py-0">
              <v-timeline
                  align-top
                  dense
              >
                <v-timeline-item
                    color="pink accent-1"
                    small
                >
                  <v-row class="pt-1">
                    <v-col cols="4">
                      <strong>2022-12-1</strong>
                    </v-col>
                    <v-col>
                      <strong>新增问卷系统</strong>
                      <div class="text-caption">
                        V1.4.0
                      </div>
                    </v-col>
                  </v-row>
                </v-timeline-item>

                <v-timeline-item
                    color="pink accent-1"
                    small
                >
                  <v-row class="pt-1">
                    <v-col cols="4">
                      <strong>2022-10-31</strong>
                    </v-col>
                    <v-col>
                      <strong>官方网站技术升级</strong>
                      <div class="text-caption mb-2">
                        Vuetify Design
                      </div>
                    </v-col>
                  </v-row>
                </v-timeline-item>

                <v-timeline-item
                    color="pink accent-1"
                    small
                >
                  <v-row class="pt-1">
                    <v-col cols="4">
                      <strong>2022-02-11</strong>
                    </v-col>
                    <v-col>
                      <strong>服务器官方网站正式开发</strong>
                      <div class="text-caption mb-2">
                        ElementUI
                      </div>
                    </v-col>
                  </v-row>
                </v-timeline-item>

                <v-timeline-item
                    color="pink accent-1"
                    small
                >
                  <v-row class="pt-1">
                    <v-col cols="4">
                      <strong>2021-12-27</strong>
                    </v-col>
                    <v-col>
                      <strong>章鱼蛋正式立项 & BHBing提供技术支持</strong>
                      <div class="text-caption mb-2">
                        Maincraft
                      </div>
                    </v-col>
                  </v-row>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        props: {
            dark: {
                type: Boolean,
                required: true,
            },
        },
      data() {
        return {};
      }
    };
</script>
