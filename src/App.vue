<template>
  <el-row style="min-width: 1300px;">
    <header-component></header-component>

    <!--正文-->
    <article class="content" id="content">
      <section id="home" class="home">
        <top-carousel></top-carousel>
      </section>
      <div class="next_arrow">
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

    <!--模态框-->
    <el-dialog title=""
               class="tempModal"
               :show-close=false
               v-model="$store.state.tempsModalVisible"
               :close-on-click-modal="false"
               :close-on-press-escape="false"
               size="large">
      <modal-component v-if="$store.state.modalIndex===1"></modal-component>
      <modal-intro-component v-else></modal-intro-component>
    </el-dialog>
  </el-row>
</template>

<script>
  import topCarousel from './components/carousel/top_carousel/index.vue';
  import headerComponent from './components/header_nav/index.vue';
  import aboutComponent from './components/about/index.vue';
  import serviceComponent from './components/service/index.vue';
  import productionComponent from './components/production/index.vue';
  import contactComponent from './components/contact/index.vue';
  import modalComponent from './components/showModal/temps_modal/index';
  import modalIntroComponent from './components/showModal/temp_intro/index';

  export default {
    name: 'app',
    mounted() {
      window.onscroll = function() {
        let docTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let sections = document.getElementsByTagName('section');
        for (let i = 0; i < sections.length; i++) {
          let dom = sections[i];
          let top = dom.offsetTop - 40;
          let bot = top + dom.clientHeight;
          let item = document.getElementById('menu').getElementsByTagName('li');
          /* 到底 */
          if (document.body.scrollTop + document.body.clientHeight >= document.body.scrollHeight) {
            item[sections.length].className = 'el-menu-item is-active';
            if (i < sections.length) {
              item[i].className = 'el-menu-item';
            }
          } else {
            item[sections.length].className = 'el-menu-item';
            if (docTop < bot && docTop >= top) {
              item[i].className = 'el-menu-item is-active';
            } else {
              item[i].className = 'el-menu-item';
            }
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
      modalComponent,
      modalIntroComponent
    }
  };
</script>

<style>
  .el-menu-item.is-active{
    color: #fff;
    background-color: #ff1b1b;
  }
  .home_carousel .el-carousel__container{
    height: 772px;
  }
  .home_carousel .el-carousel__container img{
    height: 772px;
  }
  .pro_carousel .el-carousel__indicators--outside{
    margin-top: 20px;
  }
  .intro_carousel .el-carousel__indicators--outside{
    margin-left: 240px;
  }
  .el-menu-item.is-active a{
    color: #fff;
  }
  .content {
    font-family: "Microsoft YaHei";
  }
  .home{
    padding-top: 85px;
  }
  .next_arrow {
    background-color: #cccccc;
    padding: 6px 0;
    text-align: center;
  }
  .next_arrow img {
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
  .blur {
    -webkit-filter: blur(10px); /* Chrome, Opera */
    -moz-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);
  }
  div.v-modal{
    opacity: 0;
  }
  .table {
    border-collapse: separate;
    border-spacing: 15px;
  }
  .table > tbody > tr > td {
    position: relative;
  }
  .table .image>img, .table .imageSample>img, .image_wrapper{
    width: 320px;
    height: 240px;
  }
  .showTemp{
    width: 100%;
    height: 100%;
  }
</style>


