<template>
  <div>
    <div class="image" @mouseenter="previewVisible=true">
      <img :src="imgSrc">
    </div>
    <div class="preview"
         v-if="previewVisible"
         @mouseleave="previewVisible=false"
         @click="preview(temps, intro)">
      <div class="cover">
        <div class="cover_content">
          <p>{{title}}</p>
          <img src="../../assets/img/5.png" alt="arrow">
        </div>
      </div>
    </div>

    <!--图片展示-->
    <el-dialog title=""
               class="tempModal"
               v-model="tempsModalVisible"
               :close-on-click-modal="false"
               :close-on-press-escape="false"
               size="large">
      <el-row type="flex" justify="center" >
        <el-col :span="2" class="arrow_col">
          <img src="../../assets/img/12.png" alt="pic">
        </el-col>

        <el-col :span="18" class="arrow_col">
          <el-carousel class="carousel-item">
            <el-carousel-item v-for="item in temps">
              <div class="img-wrapper">
                <img :src="item" alt="pic">
              </div>
            </el-carousel-item>
          </el-carousel>
        </el-col>

        <el-col :span="2" class="arrow_col">
          <img src="../../assets/img/11.png" alt="pic">
        </el-col>
      </el-row>

    </el-dialog>
  </div>
</template>

<script>
  export default{
    props: {
      imgSrc: String,
      temps: Array,
      intro: Array,
      title: String
    },
    data() {
      return {
        previewVisible: false,
        tempsModalVisible: false
      };
    },
    methods: {
      /* 点击查看 */
      preview: function(temps, intro) {
        var self = this;
        self.$store.commit('TEMP_ARR', temps);
        self.$store.commit('TEMP_INTRO', intro);
//        document.getElementById("my").className = 'blur';
        self.tempsModalVisible = true;
      }
    }
  };
</script>

<style scoped>
  .image>img{
    cursor: pointer;
  }
  .preview {
    cursor: pointer;
    width: 100%;
    height: 100%;
    color: #fff;
    letter-spacing: 2px;
    font-size: 18px;
    position: absolute;
    top: 0;
  }
  .cover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: #ff1d1d;
    opacity: 0.5;
    filter: Alpha(opacity=50);
    display: table;
  }
  .cover_content {
    margin: auto;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  .cover_content > p {
    margin-top: 40px;
  }
  .cover_content > img {
    width: 36px;
  }
  .arrow_col{
    text-align: center;
  }
</style>
