<template>
  <div class="image_wrapper">
    <div class="image"
         @mouseenter="showTips">
      <img :src="imgSrc" class="showTemp">
    </div>
    <div class="preview"
         v-if="previewVisible"
         @mouseleave="previewVisible=false"
         @click="preview(temps, intro)">
      <div class="cover">
        <div class="cover_content">
          <p v-if="separateFlag">
            {{year}}<br/>{{event}}
          </p>
          <p v-else>{{title}}</p>
          <img src="../../../assets/img/5.png" alt="arrow">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      imgSrc: String,
      temps: Array,
      intro: Object,
      title: String
    },
    data() {
      return {
        separateFlag: true,
        previewVisible: false
      };
    },
    computed: {
      year: function() {
        var self = this;
        var str = self.title;
        return str.substr(0, 5);
      },
      event: function() {
        var self = this;
        var str = self.title;
        return str.substr(5);
      }
    },
    methods: {
      showTips: function() {
        var self = this;
        self.previewVisible = true;
        if (!/^\d{4}/.test(self.title)) {
          self.separateFlag = false;
        } else {
          self.separateFlag = true;
        }
      },
      /* 点击查看 */
      preview: function(temps, intro) {
        var self = this;
        self.$store.commit('TEMP_ARR', temps);
        self.$store.commit('TEMP_INTRO', intro);
        self.$store.commit('VISIBLE', true);
        document.getElementById('content').className = 'blur';
        document.getElementById('header').style.display = 'none';
      }
    }
  };
</script>

<style scoped>
  .showTemp{
    width: 100px;
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
    bottom: 0;
    left: 0;
    right: 0;
  }
  .cover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: rgba(255, 29, 29, 0.51);
    filter: Alpha(opacity=50);
    display: table;
  }
  .cover_content {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-family: SimHei;
  }
  .cover_content > p {
    margin-top: 40px;
  }
  .cover_content > img {
    width: 36px;
  }
</style>
