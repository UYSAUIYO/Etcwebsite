<template>
  <v-card class="pt-4" :dark="dark" elevation="0" style="background: none">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">公告</v-list-item-title>
        <v-list-item-subtitle>Notice</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <div class="container">
      <el-button v-on:click="isActive = !isActive" plain>展开/折叠</el-button>
      <!--      <button v-on:click="isActive = !isActive">展开/折叠</button>-->
      <collapse>
        <div v-show="isActive" :dark="dark">
          <div class="block">
            <el-timeline :dark="dark">
              <el-timeline-item
                :dark="dark"
                timestamp="2022/12/4"
                placement="top"
              >
                <el-card :dark="dark">
                  <h4 :dark="dark" class="el-ph4">
                    <el-link
                      :underline="false"
                      href="https://baike.baidu.com/item/%E9%9D%9E%E6%B3%95%E8%8E%B7%E5%8F%96%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%BF%A1%E6%81%AF%E7%B3%BB%E7%BB%9F%E6%95%B0%E6%8D%AE%E7%BD%AA/4277594"
                      >非法获取计算机信息系统数据罪</el-link
                    >
                  </h4>
                  <p :dark="dark" class="el-pp">
                    Crime of illegally obtaining computer information system
                    data
                  </p>
                  <p :dark="dark" class="el-pp">
                    Verbrechen des illegalen Erwerbs von
                    Computerinformationssystemdaten
                  </p>
                  <p :dark="dark" class="el-pp">
                    コンピュータ情報システムのデータを不正に取得する罪
                  </p>
                  <p :dark="dark" class="el-pp">
                    Преступление в виде незаконного получения данных
                    компьютерной информационной системы
                  </p>
                  <p :dark="dark" class="el-pp">
                    Délit d'obtention illégale de données du système
                    d'information informatique
                  </p>
                  <p :dark="dark" class="el-pp">
                    جريمة الحصول بشكل غير قانوني على بيانات نظام معلومات
                    الكمبيوتر
                  </p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item
                :dark="dark"
                timestamp="2018/4/3"
                placement="top"
              >
                <el-card :dark="dark">
                  <h4 :dark="dark" class="el-ph4">更新 Github 模板</h4>
                  <p :dark="dark" class="el-pp">王小虎 提交于 2018/4/3 20:46</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item
                :dark="dark"
                timestamp="2018/4/2"
                placement="top"
              >
                <el-card :dark="dark">
                  <h4 :dark="dark" class="el-ph4">更新 Github 模板</h4>
                  <p :dark="dark" class="el-pp">王小虎 提交于 2018/4/2 20:46</p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </collapse>
    </div>
    <el-divider></el-divider>
  </v-card>
</template>
<script>
import collapse from "../assets/collapse";

export default {
  data() {
    return {
      isActive: false,
    };
  },
  components: {
    collapse,
  },
  props: {
    dark: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
<style scoped lang="scss">
.block {
  padding-top: 10px;
}
.el-card {
  background: none;
  border: none;
}
.el-button {
  background: none;
  border: none;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
