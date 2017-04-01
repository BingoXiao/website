<template>
    <div>
      <div class="col-md-2 col-md-offset-1">
        <div class="text-center">
          <div>
            <span class="production_title">出品</span>
          </div>
          <ul id="production_nav" class="nav nav-pills nav-stacked production_nav">
            <li role="presentation" class="active">
              <a href="#brand" aria-controls="home" data-toggle="tab">
                <span class="circle"></span>
                品牌策划
              </a>
            </li>
            <li role="presentation">
              <a href="#festivities" aria-controls="festivities" data-toggle="tab">
                <span class="circle"></span>
                活动庆典
              </a>
            </li>
            <li role="presentation">
              <a href="#theme" aria-controls="theme" data-toggle="tab">
                <span class="circle"></span>
                主题美陈
              </a>
            </li>
            <li role="presentation">
              <a href="#exhibition" aria-controls="exhibition" data-toggle="tab">
                <span class="circle"></span>
                展览展示
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-8 tab-content">
        <!--品牌策划-->
        <table role="tabpanel" class="tab-pane active brand_table" id="brand">
          <tbody>
          <tr>
            <td>
              <div class="image">
                <img src="../../assets/img/brand/1.jpg" alt="temp1">
              </div>
              <div class="preview" style="display:none;">
                <div class="cover">
                  <div class="cover_content">
                    <p>企业LOGO</p>
                    <img src="../../assets/img/5.png" alt="arrow">
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="image">
                <img src="../../assets/img/brand/2.jpg" alt="temp1">
              </div>
            </td>
            <td>
              <div class="image">
                <img src="../../assets/img/10.jpg" alt="temp1">
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="image">
                <img src="../../assets/img/10.jpg" alt="temp1">
              </div>
            </td>
            <td>
              <div class="image">
                <img src="../../assets/img/10.jpg" alt="temp1">
              </div>
            </td>
            <td>
              <div class="image">
                <img src="../../assets/img/10.jpg" alt="temp1">
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="image">
                <img src="../../assets/img/10.jpg" alt="temp1">
              </div>
            </td>
            <td>
              <div class="image">
                <img src="../../assets/img/10.jpg" alt="temp1">
              </div>
            </td>
            <td>
              <div class="image">
                <img src="../../assets/img/10.jpg" alt="temp1">
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
    export default{};
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

  .brand_table{
    border-collapse: separate;
    border-spacing: 15px;
  }
  .brand_table>tbody>tr>td{
    position: relative;
  }

  .brand_table .image>img {
    width: 320px;
    height: 240px;
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
    top:0;
  }
  .cover{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    background-color: #ff1d1d;
    opacity: 0.5;
    filter:Alpha(opacity=50);
    display: table;
  }
  .cover_content{
    margin: auto;
    display: table-cell;
    vertical-align: middle
  }
  .cover_content>p{
    margin-top:40px;
  }
  .cover_content>img{
    width: 36px;
  }
  /*图片展示*/
  .blur_bg{
    -webkit-filter: blur(8px); /* Chrome, Opera */
    -moz-filter: blur(8px);
    -ms-filter: blur(8px);
    filter: blur(8px);
  }
  .temp_dialog{
    width: 85%;
  }
  .temp_dialog>.modal-content{
    box-shadow: none;
    border: none;
    background-color: transparent;
  }
  .red_bg{
    color: #fff;
    margin: 0;
    padding: 10px;
    background-color: rgba(255, 29, 29, 0.4);
    text-align: center;
    padding-bottom: 40px;
  }
  .temp_wrap{
    width: 98%;
    padding: 0;
    margin: auto;
  }
  .close>span{
    color: #ff0000;
    font-size: 40px;
    font-weight: normal;
    text-shadow: none;
  }
  .temp_content{
    /*position: relative;*/
  }
  .temp_content .arrow_div{
    margin-top: 17%;
  }
  .temp_content .arrow_div img {
    cursor: pointer;
  }
</style>
