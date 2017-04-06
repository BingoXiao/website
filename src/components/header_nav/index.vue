<template>
  <el-row type="flex" justify="center"
          class="el-menu-demo">
    <el-col :span="24" class="hei">
      <el-row type="flex" justify="center" class="hei">
        <el-col :span="2" class="hei" style="display: table;">
          <div style="display:table-cell;vertical-align: middle">
            <img src="../../assets/img/logo.png" style="vertical-align: middle">
          </div>
        </el-col>

        <el-col :span="16" :offset="2" style="height: 100%">
          <el-menu id="menu"
                   class="hei"
                   :default-active="activeIndex"
                   mode="horizontal">
            <el-menu-item index="1" data-section="home">
              <a class="aa" href="#home">首页/HOME</a>
            </el-menu-item>

            <el-menu-item index="2">
              <a href="#about">关于/ABOUT</a>
            </el-menu-item>

            <el-menu-item index="3">
              <a href="#service">服务/SERVICE</a>
            </el-menu-item>

            <el-menu-item index="4">
              <a href="#production">出品/PRODUCTION</a>
            </el-menu-item>

            <el-menu-item index="5">
              <a href="#partners">合作伙伴/PARTNERS</a>
            </el-menu-item>

            <el-menu-item index="6">
              <a href="#contact">联系我们/CONTACT</a>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>


<script>
  export default{
    data() {
      return {
        activeIndex: '1'
      };
    }
  };
</script>

<style scoped>
  .el-menu-demo {
    width: 100%;
    position: fixed;
    z-index: 999;
    height: 100px;
    background-color: #fff;
    border-bottom: 2px solid #cccccc;
  }
  .el-menu-item.is-active a {
    color: #fff;
  }
  .hei{
    height: 100%;
  }
  .el-menu--horizontal .el-menu-item a,
  .el-menu--horizontal .el-menu-item a:hover{
    font-size: 18px;
    padding: 65px 20px 15px 20px;
  }
  .el-menu--horizontal .el-menu-item a:hover{
    color: #fff;
  }
</style>
