<template>
  <el-row>
    <el-col :span="24">
      <el-carousel class="carousel-item">
        <el-carousel-item v-for="item in images">
          <div class="img-wrapper">
            <img :src="item" alt="pic">
          </div>
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
</template>

<script>
  export default{
    data() {
      return {
        images: [
          require('../../../assets/img/1.jpg'),
          require('../../../assets/img/2.jpg'),
          require('../../../assets/img/3.jpg')
        ]
      };
    }
  };
</script>

<style scoped>
  .carousel-item, .el-carousel__item{
    width: 100%;
  }

  .carousel-item img{
    width: 100%;
  }
</style>
