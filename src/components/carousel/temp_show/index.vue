<template>
  <!-- 出品图片展示 -->
  <div class="modal-dialog temp_dialog" role="document">
    <div class="modal-content text-center">
      <div class="modal-body">
        <div class="temp_content">
          <!--左箭头-->
          <div class="col-md-1 arrow_div">
              <span @click="preSlide">
                  <img src="../../../assets/img/12.png">
              </span>
          </div>
          <!--图片展示-->
          <div class="col-md-10 red_bg">
            <button id="closeModal" type="button" class="close"
                    @click="closeModal">
              <span aria-hidden="true">&times;</span>
            </button>
            <!--轮播-->
            <div class="temp_wrap">
              <div id="temp-carousel" class="carousel slide temp-carousel"
                   data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators carousel_home">
                  <li data-target="#temp-carousel"
                      v-for="(item,index) in $store.state.tempsArr"
                      :data-slide-to="index"
                      :class="index===0?'active':''"></li>
                </ol>
                <!-- Wrapper for slides -->
                <div class="carousel-inner" role="listbox">
                  <div v-for="(item,index) in $store.state.tempsArr"
                       class="item" :class="index===0?'active':''">
                    <div class="intro">{{$store.state.tempsIntro[index]}}</div>
                    <img :src="item" class="imageInfo">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--右箭头-->
          <div class="col-md-1 arrow_div">
              <span @click="nextSlide">
                  <img src="../../../assets/img/11.png">
              </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  import {modalHide} from '../../../assets/js/modal';

  export default{
    methods: {
      preSlide: function() {
        $('#temp-carousel').carousel('prev');
      },
      nextSlide: function() {
        $('#temp-carousel').carousel('next');
      },
      closeModal: function() {
        var self = this;
        // 关闭模态框
        $('#temp-carousel').carousel('pause');
        self.$store.commit('TEMP_ARR', []);
        modalHide('#tempModal', 'zoomOut', function() {
          $('.content').removeClass('blur_bg');
          $('header').css('display', '');
        });
      }
    }
  };
</script>

<style scoped>
  .carousel_home{
    position: absolute;
    bottom: -90px;
  }
  .carousel_home li {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #ff1b1b;
    border: 1px solid #ff1b1b;
    border-radius: 100%;
    margin: 0 8px;
  }

  .carousel_home .active {
    width: 13px;
    height: 13px;
    background-color: transparent;
    border-radius: 0;
  }
  .temp_dialog{
    width: 90%;
  }
  .temp_dialog>.modal-content{
    box-shadow: none;
    border: none;
    background-color: transparent;
  }
  .red_bg{
    color: #fff;
    margin: 0;
    padding: 10px 20px;
    background-color: rgba(255, 29, 29, 0.4);
    text-align: center;
  }
  .temp_wrap{
    padding: 20px 20px 30px 20px;
    margin: 0;
  }
  img.imageInfo{
    width: 100%;
  }
  .close{
    position: absolute;
    right:13px;
    top:5px;
  }
  .close>span{
    color: #e30000;
    font-size: 60px;
    font-weight: normal;
  }
  .arrow_div{
    margin-top: 22.5%;
  }
  .temp_content .arrow_div img{
    cursor: pointer;
  }
  .intro{
    font-size: 22px;
    text-align: left;
  }
</style>
