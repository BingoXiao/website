<template>
  <!--顶部导航-->
  <header>
    <nav class="navbar navbar-default navbar-fixed-top header" id="navbar-example">
      <div class="row nav_content">
        <div class="col-md-3 text-center nav_col_brand">
          <div class="nav_brand">
            <!--<img src="./img/logo.png" alt="Brand">-->
          </div>
        </div>

        <div class="col-md-9 nav_col">
          <ul id="navbar" class="nav navbar-nav">
            <li class="navItem active">
              <a href="#home"><span>首页/HOME</span></a>
            </li>
            <li class="navItem">
              <a href="#about"><span>关于/ABOUT</span></a>
            </li>
            <li class="navItem">
              <a href="#service"><span>服务/SERVICE</span></a>
            </li>
            <li class="navItem">
              <a href="#production"><span>出品/PRODUCTION</span></a>
            </li>
            <li class="navItem">
              <a href="#partners"><span>合作伙伴/PARTNERS</span></a>
            </li>
            <li class="navItem">
              <a href="#contact"><span>联系我们/CONTACT</span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default{};
</script>

<style scoped>
  /*导航头*/
  .header {
    width: 100%;
    height: 130px;
    text-align: center;
    font-family: "SimHei";
    font-size: 17px;
    background-color: #fff;
    border-bottom: 2px solid #bfbcbd;
  }

  .header .navbar-default {
    width: 100%;
    height: inherit;
    min-height: 100%;
    background-color: #ffffff;
    border: none;
    margin: auto;
  }

  .nav_content, .nav_col_brand, .nav_col {
    height: inherit;
  }

  /*logo*/
  .nav_col_brand {
    display: table;
  }

  .nav_col_brand .nav_brand {
    display: table-cell;
    vertical-align: middle;
  }

  .nav_brand img {
    /*width: 130px;*/
    vertical-align: middle;
  }

  /*导航选项*/
  .nav_col ul, .nav_col ul > li {
    height: inherit;
    position: relative;
  }

  .nav_col ul, .nav_col ul > li > a {
    height: inherit;
    display: table;
    color: #afadae;
  }

  .nav_col ul > li > a > span {
    display: table-cell;
    vertical-align: bottom;
  }

  .nav_col .navbar-nav > li > a:focus,
  .nav_col .navbar-nav > li > a:hover,
  .nav_col .navbar-nav > .active > a,
  .nav_col .navbar-nav > .active > a:focus,
  .nav_col .navbar-nav > .active > a:hover {
    color: #fff;
    background-color: #ff1b1b;
  }

</style>
