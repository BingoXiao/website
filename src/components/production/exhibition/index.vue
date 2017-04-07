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
                title: '2014年ETIE展厅',
                src: require('../../../assets/img/exhibition/1.jpg'),
                intro: [
                  '2014年ETIE展厅',
                  '2014年ETIE展厅',
                  '2014年ETIE展厅',
                  '2014年ETIE展厅',
                  '2014年ETIE展厅'
                ],
                temps: [
                  require('../../../assets/img/exhibition/1/1.jpg'),
                  require('../../../assets/img/exhibition/1/2.jpg'),
                  require('../../../assets/img/exhibition/1/3.jpg'),
                  require('../../../assets/img/exhibition/1/4.jpg'),
                  require('../../../assets/img/exhibition/1/5.jpg')
                ]
              },
              {
                title: '2014年EYEMAX展厅',
                src: require('../../../assets/img/exhibition/2.jpg'),
                intro: [
                  '2014年EYEMAX展厅',
                  '2014年EYEMAX展厅',
                  '2014年EYEMAX展厅'
                ],
                temps: [
                  require('../../../assets/img/exhibition/2/1.jpg'),
                  require('../../../assets/img/exhibition/2/2.jpg'),
                  require('../../../assets/img/exhibition/2/3.jpg'),
                  require('../../../assets/img/exhibition/2/4.jpg'),
                  require('../../../assets/img/exhibition/2/5.jpg')
                ]
              },
              {
                title: '2014年大视觉婚博会展台',
                src: require('../../../assets/img/exhibition/3.jpg'),
                intro: [
                  '2014年大视觉婚博会展台',
                  '2014年大视觉婚博会展台',
                  '2014年大视觉婚博会展台'
                ],
                temps: [
                  require('../../../assets/img/exhibition/3/1.jpg'),
                  require('../../../assets/img/exhibition/3/2.jpg'),
                  require('../../../assets/img/exhibition/3/3.jpg'),
                  require('../../../assets/img/exhibition/3/4.jpg'),
                  require('../../../assets/img/exhibition/3/5.jpg')
                ]
              }
            ]
          },
          {  // 第二行
            arr: [
              {
                title: '2014年KKMALL橱窗展示',
                src: require('../../../assets/img/exhibition/4.jpg'),
                intro: [
                  '2014年KKMALL橱窗展示',
                  '2014年KKMALL橱窗展示',
                  '2014年KKMALL橱窗展示'
                ],
                temps: [
                  require('../../../assets/img/exhibition/4/1.jpg'),
                  require('../../../assets/img/exhibition/4/2.jpg'),
                  require('../../../assets/img/exhibition/4/3.jpg'),
                  require('../../../assets/img/exhibition/4/4.jpg')
                ]
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
