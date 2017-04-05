<template>
  <div>
    <div class="col-md-2 col-md-offset-1">
      <div class="text-center">
        <div>
          <span class="production_title">出品</span>
        </div>
        <ul id="production_nav" class="nav nav-pills nav-stacked production_nav">
          <li role="presentation" class="active">
            <a href="#brand" aria-controls="home"
               @click="showTag('brandComponent')">
              <span class="circle"></span>
              品牌策划
            </a>
          </li>
          <li role="presentation">
            <a href="#festivities"
               @click="showTag('festivitiesComponent')">
              <span class="circle"></span>
              活动庆典
            </a>
          </li>
          <li role="presentation">
            <a href="#theme"
               @click="showTag('themeComponent')">
              <span class="circle"></span>
              主题美陈
            </a>
          </li>
          <li role="presentation">
            <a href="#exhibition"
               @click="showTag('exhibitionComponent')">
              <span class="circle"></span>
              展览展示
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-md-8 tab-content">
      <!--品牌策划-->
      <!--活动策划-->
      <!--主题美陈-->
      <!--展览展示-->
      <component :is="currentView"></component>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  import brandComponent from './brand/index';
  import festivitiesComponent from './festivities/index';
  import themeComponent from './theme/index';
  import exhibitionComponent from './exhibition/index';

  export default{
    data() {
      return {
        currentView: 'brandComponent'
      };
    },
    methods: {
      showTag: function(name) {
        var self = this;
//        $(event.target).addClass('active').siblings().removeClass('active');
        self.currentView = name;
      }
    },
    components: {
      brandComponent,
      festivitiesComponent,
      themeComponent,
      exhibitionComponent
    }
  };
</script>

<style scoped>
  /*出品*/
  .production_nav {
    color: #000;
    font-size: 18px;
    font-family: "SimHei";
  }

  .production_nav > li > a {
    color: #929292;
    background-color: #fff;
  }

  .production_nav .circle {
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background-color: #929292;
    display: inline-block;
  }

  .production_nav > li > a:focus,
  .production_nav > li > a:hover {
    color: #000000;
    background-color: #fff;
  }

  .production_nav > li > a:focus > .circle,
  .production_nav > li > a:hover > .circle {
    background-color: #000;
  }

  .production_nav > li.active > a,
  .production_nav > li.active > a:focus,
  .production_nav > li.active > a:hover {
    color: #000;
    background-color: #fff;
  }

  .production_nav > li.active > a > .circle,
  .production_nav > li.active > a:focus.circle,
  .production_nav > li.active > a:hover.circle {
    background-color: #000;
  }

  .production_title {
    display: inline-block;
    font-size: 30px;
    letter-spacing: 2px;
    padding: 1px 15px;
    margin-top: 15px;
    margin-bottom: 10px;
    border-top: 1px dashed #6f6f6f;
    border-bottom: 1px dashed #6f6f6f;
  }
</style>
