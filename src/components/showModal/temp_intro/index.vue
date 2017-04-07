<template>
  <el-row type="flex" justify="center" class="temps_content">
    <el-col :span="2" class="arrow_col">
      <img src="../../../assets/img/12.png" alt="pic"
           class="arrow" @click="preSlide">
    </el-col>

    <el-col :span="18" class="arrow_col red_bg">
      <el-button class="closeBtn"
                 type="text"
                 icon="close"
                 @click="tempsModalVisible"></el-button>
      <el-row type="flex" justify="center">
        <el-col :span="14">
          <el-carousel ref="tempCarousel"
                       :interval="4000"
                       class="carousel-item pro_carousel intro_carousel"
                       indicator-position="outside"
                       arrow="never">
            <el-carousel-item v-for="(item, index) in $store.state.tempsArr">
              <img :src="item" alt="pic" class="temps_img">
            </el-carousel-item>
          </el-carousel>
        </el-col>

        <el-col :span="10" class="temps_content">
          <div class="intro_img">
            <img src="../../../assets/img/b.png">
            <div class="intro">
              <div class="intro_content">
                <h2>{{$store.state.tempsIntro.title}}</h2>
                <p>{{$store.state.tempsIntro.content}}</p>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>

    <el-col :span="2" class="arrow_col">
      <img src="../../../assets/img/11.png"
           alt="pic"
           class="arrow"
           @click="nextSlide">
    </el-col>
  </el-row>
</template>

<script>
  export default{
    methods: {
      tempsModalVisible: function() {
        var self = this;
        self.$store.commit('VISIBLE', false);
        document.getElementById('content').className = '';
        document.getElementById('header').style.display = '';
      },
      preSlide: function() {
        var self = this;
        self.$refs.tempCarousel.prev();
      },
      nextSlide: function() {
        var self = this;
        self.$refs.tempCarousel.next();
      }
    }
  };
</script>

<style scoped>
  .red_bg{
    background-color: rgba(227, 0, 0, 0.39);
    padding: 30px;
    padding-bottom: 20px;
    height: 480px;
    position: relative;
  }
  .closeBtn{
    color: #e30000;
    font-size: 20px;
    position: absolute;
    right: 20px;
    top: 10px;
  }
  .closeBtn:hover, .closeBtn:active{
    color: #c60000;
  }
  .arrow_col{
    text-align: center;
  }
  .temps_content{
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items:center;
    align-items:center;
  }
  .temps_img{
    height: 410px;
    padding-top: 10px;
  }
  .intro{
    text-align: left;
    color: #fff;
    padding: 0 0 8px 0;
  }
  .intro_img{
    width: 100%
  }
  .intro_img img{
    display: inline-block;
    width: 180px;
    margin:0 auto;
  }
  .intro_content{
    padding: 20px 0 0 30px;
    margin-bottom: 50px;
  }
  .intro_content>p{
    font-size: 13px;
    line-height: 1.9;
  }
  .arrow, .image>img{
    cursor: pointer;
  }
</style>
