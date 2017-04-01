<template>
  <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators carousel_home">
      <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-example-generic" data-slide-to="1"></li>
      <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <img src="../../../assets/img/1.jpg" alt="pic1">
      </div>
      <div class="item">
        <img src="../../../assets/img/2.jpg" alt="pic1">
      </div>
      <div class="item">
        <img src="../../../assets/img/3.jpg" alt="pic1">
      </div>
    </div>
  </div>
</template>

<script>
    export default{};
</script>

<style scoped>
  /*首页*/
  .home {
    padding-top: 130px;
  }

  .carousel_home li {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #ff1b1b;
    border: 1px solid #ff1b1b;
    border-radius: 100%;
  }

  .carousel_home .active {
    width: 13px;
    height: 13px;
    background-color: transparent;
    border-radius: 0;
  }
</style>
