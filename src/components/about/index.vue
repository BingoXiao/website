<template>
  <!--关于-->
  <el-row type="flex" justify="center">
    <el-col :span="16" style="text-align: center">
      <h1 class="about_h1">伯符传媒</h1>
      <span class="about_title">THE BEST OR NOTHING</span>

      <pre class="about_content">
　　深圳市伯符文化传媒有限公司，以下简称“伯符传媒”，于2015年11月成立，是一家专业致力于政府、企业领域的文化活动创意策划平台，业务范围涵盖商业美陈、空
间设计、活动策划、品牌推广。
　　作为伯符投资旗下唯一一家广告传媒公司，伯符传媒拥有一支年轻而富有才敢的超强团队，策划、设计、客服、媒介等各个部门，都深谙市场制胜之道，全球化思维，
本土化执行，确保创意策划的高水准。
　　从成立到发展，伯符传媒一支致力于与客户常遭互利共赢的合作关系，有效的策略，深邃的市场洞察，严谨的运作和快速的应变能力，塑造高度一致的品牌形象。经过
伯符的每一位传媒人的不懈努力与合作探索，伯符传媒如雨后春笋般成功进军传媒市场，走在中国传媒行业的最前沿，未来期待与所有合作伙伴一同杨帆前进、共创辉煌。
      </pre>
    </el-col>
  </el-row>
</template>

<script>
  export default{};
</script>

<style scoped>
  .about_row{
    text-align: center;
  }
  .about_h1{
    font-size: 30px;
    font-family: SimHei;
    margin-bottom: 13px;
  }
  .about_title {
    display: inline-block;
    font-size: 24px;
    font-family: "Impact";
    letter-spacing: 1.5px;
    padding: 1px 15px;
    border-top: 1px dashed #6f6f6f;
    border-bottom: 1px dashed #6f6f6f;
    transform: scale(1, 0.85);
    -ms-transform: scale(1, 0.85); /* IE 9 */
    -webkit-transform: scale(1, 0.85); /* Safari 和 Chrome */
    -o-transform: scale(1, 0.85); /* Opera */
    -moz-transform: scale(1, 0.85); /* Firefox */
  }

  .about_content {
    display: inline-block;
    font-family: SimHei;
    font-size: 14px;
    line-height: 2;
    background-color: #fff;
    border: none;
    text-align: left;
  }
</style>
