<template>
  <el-row type="flex" justify="center" class="temps_content">
    <el-col :span="2" class="arrow_col">
      <img v-if="!redLeft"
           src="../../../assets/img/12.png"
           class="arrow"
           @mouseenter="redLeft=true">
      <img v-else
           src="../../../assets/img/15.png"
           class="arrow"
           @click="preSlide"
           @mouseout="redLeft=false">
    </el-col>

    <el-col :span="18" class="arrow_col red_bg">
      <el-button class="closeBtn"
                 type="text"
                 icon="close"
                 @click="tempsModalVisible"></el-button>
      <el-carousel ref="tempCarousel"
                   :interval="4000"
                   class="carousel-item pro_carousel"
                   indicator-position="outside"
                   arrow="never">
        <el-carousel-item v-for="(item, index) in $store.state.tempsArr">
          <div class="intro">{{$store.state.tempsIntro[index]}}</div>
          <img :src="item" alt="pic" class="img_size">
        </el-carousel-item>
      </el-carousel>
    </el-col>

    <el-col :span="2" class="arrow_col">
      <img v-if="!redRight"
           src="../../../assets/img/11.png"
           alt="pic"
           class="arrow"
           @mouseenter="redRight=true">
      <img v-else
           src="../../../assets/img/14.png"
           alt="pic"
           class="arrow"
           @click="nextSlide"
           @mouseout="redRight=false">
    </el-col>
  </el-row>
</template>

<script>
  export default{
    data() {
      return {
        redLeft: false,
        redRight: false
      };
    },
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
  .arrow, .image>img{
    cursor: pointer;
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
  .intro{
    text-align: left;
    font-size: 18px;
    color: #fff;
    padding: 0 0 8px 0;
  }
  .img_size{
    width:772px;
    height: 381px;
  }
</style>
