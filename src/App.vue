<template>
  <div class="container-fluid">
    <header-component></header-component>

    <!--正文-->
    <article class="row text-center content">
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
        <img src="./assets/img/13.jpg" alt="partners"/>
      </section>

      <!--联系我们-->
      <footer id="contact" class="contact">
        <contact-component></contact-component>
      </footer>
    </article>

    <!--图片展示轮播-->
    <div class="modal temp_modal" id="tempModal"
         data-show="false" aria-labelledby="myModalLabel">
      <temp-show></temp-show>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
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
      /* 模态框图片 */
      $('#tempModal').modal({
        backdrop: 'static',
        keyboard: false
      });
      $('#temp-carousel').carousel();
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
  .content {
    color: #000;
    background-color: #fff;
  }
  .home {
    padding-top: 130px;
  }
  .arrow {
    background-color: #cccccc;
    padding: 5px 0;
  }
  .arrow img {
    width: 30px;
  }
  .about {
    padding: 200px 0 60px 0;
  }
  .service {
    padding: 80px 0 80px 0;
  }
  .production{
    margin-bottom: 80px;
  }
  .partners img{
    width: 100%;
  }
  .temp_modal{
    /*background-color: rgba(0, 0, 0, 0.03);*/
  }
  /*模糊效果*/
  .blur_bg {
    -webkit-filter: blur(8px); /* Chrome, Opera */
    -moz-filter: blur(8px);
    -ms-filter: blur(8px);
    filter: blur(8px);
  }
</style>


