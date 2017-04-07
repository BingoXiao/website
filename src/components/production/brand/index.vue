<template>
  <div>
    <table class="table">
      <tbody>
        <tr v-for="obj in items">
          <td v-for="item in obj.arr">
            <div v-if="item.src">
              <temp-component
                :imgSrc="item.src"
                :temps="item.temps"
                :intro="item.intro"
                :title="item.title">
              </temp-component>
            </div>
            <div v-else class="imageSample">
              <img src="../../../assets/img/10.jpg">
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
  import tempComponent from '../../carousel/tempShow/index';

  export default{
    data() {
      return {
        items: [
          {  // 第一行
            arr: [
              {
                title: '企业LOGO',
                src: require('../../../assets/img/brand/1.jpg'),
                intro: [
                  '深圳市金镖科技有限公司LOGO',
                  '深圳风标LOGO',
                  '深圳市南山广宇保安培训学校LOGO',
                  '深圳市近脉网络科技有限公司LOGO',
                  'T&G篮球LOGO'
                ],
                temps: [
                  require('../../../assets/img/brand/1/1.jpg'),
                  require('../../../assets/img/brand/1/2.jpg'),
                  require('../../../assets/img/brand/1/3.jpg'),
                  require('../../../assets/img/brand/1/4.jpg'),
                  require('../../../assets/img/brand/1/5.jpg')
                ]
              },
              {
                title: '品牌形象推广',
                src: require('../../../assets/img/brand/2.jpg'),
                intro: [
                  '心井ShinDon——logo设计',
                  '心井ShinDon——布包设计',
                  '心井ShinDon——菜单设计'
                ],
                temps: [
                  require('../../../assets/img/brand/2/1.jpg'),
                  require('../../../assets/img/brand/2/2.jpg'),
                  require('../../../assets/img/brand/2/3.jpg')
                ]
              },
              {
                src: ''
              }
            ]
          },
          {  // 第二行
            arr: [
              {
                src: ''
              },
              {
                src: ''
              },
              {
                src: ''
              }
            ]
          },
          {   // 第三行
            arr: [
              {
                src: ''
              },
              {
                src: ''
              },
              {
                src: ''
              }
            ]
          }
        ]
      };
    },
    components: {
      tempComponent
    }
  };
</script>

<style scoped>

</style>
