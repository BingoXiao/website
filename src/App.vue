<template>
  <el-row id="my">
    <header-component></header-component>

    <!--正文-->
    <article class="content">
      <section id="home" class="home">
        <top-carousel></top-carousel>
      </section>
      <div class="arrow">
        <img src="./assets/img/4.png" alt="down">
      </div>

      <!--关于-->
      <section id="about" class="about">
        <about-component></about-component>
      </section>

      <!--服务-->
      <section id="service" class="service">
        <service-component></service-component>
      </section>

      <!--出品-->
      <section id="production" class="production">
        <production-component></production-component>
      </section>

      <!--合作-->
      <section id="partners" class="partners">
        <img src="./assets/img/13.jpg" alt="partners" style="width: 100%"/>
      </section>

      <!--联系我们-->
      <footer id="contact" class="contact">
        <contact-component></contact-component>
      </footer>
    </article>
  </el-row>
</template>

<script>
  import topCarousel from './components/carousel/top_carousel/index.vue';
  import headerComponent from './components/header_nav/index.vue';
  import aboutComponent from './components/about/index.vue';
  import serviceComponent from './components/service/index.vue';
  import productionComponent from './components/production/index.vue';
  import contactComponent from './components/contact/index.vue';
  import tempShow from './components/carousel/temp_show/index';

  export default {
    name: 'app',
    mounted() {
      var self = this;
      window.onscroll = function() {
        let docTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        for (let i = 0; i < document.getElementsByTagName('section').length; i++) {
          let dom = document.getElementsByTagName('section')[i];
          let top = dom.offsetTop - 120;
          let bot = top + dom.clientHeight;
          let item = document.getElementById('menu').getElementsByTagName('li');
          if (docTop < bot && docTop >= top) {
            item[i].className = 'el-menu-item is-active';
          } else {
            item[i].className = 'el-menu-item';
          }
        }
      };
    },
    components: {
      topCarousel,
      headerComponent,
      aboutComponent,
      serviceComponent,
      productionComponent,
      contactComponent,
      tempShow
    }
  };
</script>

<style>
  .blur{
    -webkit-filter: blur(10px); /* Chrome, Opera */
    -moz-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);
  }
  .el-menu-item.is-active{
    color: #fff;
    background-color: #ff1b1b;
  }
  .el-menu-item.is-active a{
    color: #fff;
  }
  .content {
    font-family: "Microsoft YaHei";
  }

  .home{
    padding-top: 100px;
  }
  .arrow {
    background-color: #cccccc;
    padding: 6px 0;
    text-align: center;
  }

  .arrow img {
    width: 30px;
  }

  .about {
    padding: 200px 0 60px 0;
  }

  .service {
    padding: 80px 0 180px 0;
  }

  .production {
    margin-bottom: 80px;
  }

  /*模糊效果*/
  .blur_bg {
    -webkit-filter: blur(8px); /* Chrome, Opera */
    -moz-filter: blur(8px);
    -ms-filter: blur(8px);
    filter: blur(8px);
  }
</style>


