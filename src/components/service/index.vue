<template>
  <el-row type="flex" justify="center">
    <el-col :span="20" class="service_col">
      <el-row>
        <el-col :span="6">
          <img src="../../assets/img/6.png" alt="品牌策划">
          <h2 class="service_h2">品牌策划</h2>
                    <pre class="service_content">
    企业LOGO、品牌理念手册、
    品牌主打形象广告、营销推广。
                    </pre>
        </el-col>

        <el-col :span="6">
          <img src="../../assets/img/7.png" alt="活动庆典">
          <h2 class="service_h2">活动庆典</h2>
                    <pre class="service_content">
    可根据客户需求，策划并组织各类型活动，
    包括各种会议、晚会、演出、礼仪庆典，
    以及产品展示、促销与发布，企业公益活动。
                    </pre>
        </el-col>

        <el-col :span="6">
          <img src="../../assets/img/8.png" alt="主题美陈">
          <h2 class="service_h2">主题美陈</h2>
                    <pre class="service_content">
    通过艺术设计打造主题鲜明、
    形式新颖的景观，优化场地环境、
    提升品牌形象、吸引顾客消费。
                    </pre>
        </el-col>

        <el-col :span="6">
          <img src="../../assets/img/9.png" alt="展览展示">
          <h2 class="service_h2">展览展示</h2>
                    <pre class="service_content">
    展会展示策划设计、企业展厅、
    展示专柜的设计和制作安装。
                    </pre>
        </el-col>
      </el-row>
    </el-col>
  </el-row>

</template>

<script>
    export default{};
</script>

<style scoped>
  .service_col{
    text-align: center;
  }

  .service_h2 {
    margin-top: 20px;
    margin-bottom: 0;
    font-family: SimHei;
  }

  .service_content {
    display: inline-block;
    font-family: SimHei;
    font-size: 15px;
    background-color: #fff;
    border: none;
    margin: 0;
    text-align: left;
  }
</style>
