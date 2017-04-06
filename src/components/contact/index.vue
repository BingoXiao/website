<template>
    <el-col :span="24" class="wrapper">
      <el-row>
        <el-col :span="5" :offset="6">
          <img src="../../assets/img/er.png" class="erweima" alt="erweima">
        </el-col>
        <el-col :span="6" style="text-align: left;letter-spacing: 1.5px;">
          <el-row class="footer_title">
            <div style="font-size: 22px;">联系我们</div>
            <div style="font-size: 20px;">contact us</div>
          </el-row>
          <el-row class="footer_content">
            <p><b style="font-size: 16px;">深圳市伯符文化传媒有限公司</b></p>
            <address>
              <p>地址：深圳市南山区松坪山路源兴科技大厦南座1008</p>
              <p>电话：0755-86709996</p>
              <p>邮箱：bofu@chinabofu.com</p>
            </address>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
</template>

<script>
    export default{};
</script>

<style>
  .wrapper{
    background-color: #cccccc;
    padding: 80px;
    margin-top: -4px;
  }
  .contact_ul li{
    margin-right: 50px;
    vertical-align: middle;
  }
  .erweima{
    width: 200px;
  }
  .footer_title{
    border-bottom: 1px dashed #000;
    padding: 0 0 2px 0;
    text-align: left;
    margin-bottom: 25px;
    font-family: SimHei;
  }
  .footer_content{
    font-size: 14px;
    font-family: SimHei;
  }
</style>
