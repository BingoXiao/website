<template>
  <el-row type="flex" justify="center">
    <el-col :span="4" class="production_nav">
      <h3 class="production_title">出品</h3>
      <ul>
        <li role="presentation" v-for="(item, index) in list" @click="select_list(index)">
          <a href="javascript:;" :class="activeIndex===index?'active':''">
            <span class="circle"></span> {{item.title}}</a>
        </li>
      </ul>
    </el-col>

    <el-col :span="16">
      <!--品牌策划-->
      <!--活动策划-->
      <!--主题美陈-->
      <!--展览展示-->
      <el-row class="tab-content">
        <component :is="list[activeIndex]['component']"></component>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
  import brandComponent from './brand/index';
  import festivitiesComponent from './festivities/index';
  import themeComponent from './theme/index';
  import exhibitionComponent from './exhibition/index';

  export default{
    data() {
      return {
        list: [
          {
            title: '品牌策划',
            component: 'brandComponent'
          },
          {
            title: '活动庆典',
            component: festivitiesComponent
          },
          {
            title: '主题美陈',
            component: themeComponent
          },
          {
            title: '展览展示',
            component: exhibitionComponent
          }
        ],
        activeIndex: 0
      };
    },
    methods: {
      select_list: function(index) {
        var self = this;
        self.activeIndex = index;
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
    font-size: 17px;
    font-family: SimHei;
    text-align: center;
  }
  ul {
    margin-top: 10px;
    list-style: none;
    padding-left: 0;
  }
  ul>li{
    padding: 8px;
  }
  ul>li>a, ul>li>a:hover, ul>li>a:active, ul>li>a:focus{
    color: #929292;
    text-decoration: none;
  }
  ul>li>a:hover, ul>li>a:active, ul>li>a:focus{
    color: #000000;
    font-size: 19px;
  }
  .active{
    color: #000000;
    font-size: 19px;
  }
  .circle{
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background-color: #929292;
    display: inline-block;
  }
  ul>li>a:hover>.circle, ul>li>a:active>.circle, ul>li>a:focus>.circle{
    background-color: #000000;
  }
  .active>.circle{
    background-color: #000000;
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
