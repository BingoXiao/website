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
  import tempComponent from '../../carousel/temp_intro_carousel/index';

  export default{
    data() {
      return {
        items: [
          {  // 第一行
            arr: [
              {
                title: 'KK ONE酒吧节',
                src: require('../../../assets/img/theme/1.jpg'),
                intro: {
                  title: 'kkone酒吧嗨趴节',
                  content: '这是深圳众多商场极为罕见的一次闭馆派对，这里有音乐有艺术有酒水，' +
                  '更有实力大咖DJ冠军、Rapper冠军、暗哨冠军和潮男美女。舞台设计采用音乐元素，' +
                  '灯光效果呈现美轮美奂的视觉冲击，演唱会般的现场体验，跟着音乐的律动一起呐喊一起尖叫！'
                },
                temps: [
                  require('../../../assets/img/theme/1/1.jpg'),
                  require('../../../assets/img/theme/1/2.jpg'),
                  require('../../../assets/img/theme/1/3.jpg'),
                  require('../../../assets/img/theme/1/4.jpg'),
                  require('../../../assets/img/theme/1/5.jpg')
                ]
              },
              {
                title: '2016年南山美妆节',
                src: require('../../../assets/img/theme/2.jpg'),
                intro: {
                  title: '2016京基百纳美妆节系列',
                  content: '装置是伯符传媒为南山京基百纳花语风尚季活动全程策划、' +
                  '设计和制作的主题美陈装置。我们遵循活动主题，整体营造创意、自然、' +
                  '生态的艺术装置，倾力打造园林全景的“艺术花园”氛围，符合南山京基百纳' +
                  '广场的“都市后花园”定位。'
                },
                temps: [
                  require('../../../assets/img/theme/2/1.jpg'),
                  require('../../../assets/img/theme/2/2.jpg'),
                  require('../../../assets/img/theme/2/3.jpg'),
                  require('../../../assets/img/theme/2/4.jpg'),
                  require('../../../assets/img/theme/2/5.jpg')
                ]
              },
              {
                title: '2017年春节美陈',
                src: require('../../../assets/img/theme/3.jpg'),
                intro: {
                  title: '2017年春节美陈',
                  content: ''
                },
                temps: [
                  require('../../../assets/img/theme/3/1.jpg'),
                  require('../../../assets/img/theme/3/2.jpg'),
                  require('../../../assets/img/theme/3/3.jpg')
                ]
              }
            ]
          },
          {  // 第二行
            arr: [
              {
                title: '2016年KK MALL圣诞美陈',
                src: require('../../../assets/img/theme/4.jpg'),
                intro: {
                  title: '2016年圣诞主题美陈',
                  content: '伯符传媒首次携手昂驰动漫为京基集团旗下购物商场打造豆豆神奇之旅'
                },
                temps: [
                  require('../../../assets/img/theme/4/1.jpg'),
                  require('../../../assets/img/theme/4/2.jpg'),
                  require('../../../assets/img/theme/4/3.jpg'),
                  require('../../../assets/img/theme/4/4.jpg'),
                  require('../../../assets/img/theme/4/5.jpg')
                ]
              },
              {
                title: '2016年南山春节美陈',
                src: require('../../../assets/img/theme/5.jpg'),
                intro: {
                  title: '2016年南山春节美陈',
                  content: ''
                },
                temps: [
                  require('../../../assets/img/theme/5/1.jpg'),
                  require('../../../assets/img/theme/5/2.jpg')
                ]
              },
              {
                title: '2015年沙井圣诞装置',
                src: require('../../../assets/img/theme/6.jpg'),
                intro: {
                  title: '2015京基南山百纳圣诞装置',
                  content: '打造出以“缤纷百纳圣诞”为主题的圣诞美称，整个南山京基百纳幻化' +
                  '成为最为缤纷、浪漫的圣诞游乐园。中庭布置成了的大城堡为原型的圣诞城堡，整' +
                  '个场景缤纷梦幻；整个场内还首次采用玻璃钢制材质进行氛围布置，营造了炫彩夺' +
                  '目的圣诞氛围，让人叹为观止。'
                },
                temps: [
                  require('../../../assets/img/theme/6/1.jpg'),
                  require('../../../assets/img/theme/6/2.jpg'),
                  require('../../../assets/img/theme/6/3.jpg')
                ]
              }
            ]
          },
          {   // 第三行
            arr: [
              {
                title: '2015年南山圣诞装置',
                src: require('../../../assets/img/theme/7.jpg'),
                intro: {
                  title: '2015年南山圣诞装置',
                  content: ''
                },
                temps: [
                  require('../../../assets/img/theme/7/1.jpg'),
                  require('../../../assets/img/theme/7/2.jpg'),
                  require('../../../assets/img/theme/7/3.jpg')
                ]
              },
              {
                title: '2015年KK MALL春节装置',
                src: require('../../../assets/img/theme/8.jpg'),
                intro: {
                  title: '2015京基KKmall春节大型装置展',
                  content: 'kkmall商场中庭放置灯笼、桃花和牡丹花作新春装饰，' +
                  '一盏盏五彩缤纷千姿百态的花灯呈现热闹融融的春节氛围，装置中穿插' +
                  '有数枝非物质文化遗产传统的油纸伞，寓意为向到商场消费的顾客传递' +
                  '团团圆圆、阖家美满的新春祝福。'
                },
                temps: [
                  require('../../../assets/img/theme/8/1.jpg'),
                  require('../../../assets/img/theme/8/2.jpg'),
                  require('../../../assets/img/theme/8/3.jpg'),
                  require('../../../assets/img/theme/8/4.jpg'),
                  require('../../../assets/img/theme/8/5.jpg')
                ]
              },
              {
                title: '2014年KK MALL圣诞装置',
                src: require('../../../assets/img/theme/9.jpg'),
                intro: {
                  title: '14年kkmall圣诞装置',
                  content: '麋鹿印象:伯符传媒勾勒出kkmall商场顾客消费群心中的冬日雪景，' +
                  '在这个冬季，大地被厚厚的白雪覆盖，雪地上有几只栩栩如生的金色麋鹿，它们' +
                  '或奔跑，或嬉戏，或休憩，还有几棵被白雪覆盖的挺拔铁树。再配以巨大的拱形门饰，' +
                  '加上射灯映照，整个画面美轮美奂。活动期间数百位圣诞老人在中庭巡游、派送礼物、' +
                  '放声歌唱、邀你合照及与每一个陌生人拥抱'
                },
                temps: [
                  require('../../../assets/img/theme/9/1.jpg'),
                  require('../../../assets/img/theme/9/2.jpg'),
                  require('../../../assets/img/theme/9/3.jpg'),
                  require('../../../assets/img/theme/9/4.jpg'),
                  require('../../../assets/img/theme/9/5.jpg')
                ]
              }
            ]
          },
          {   // 第四行
            arr: [
              {
                title: '2014年南山圣诞装置',
                src: require('../../../assets/img/theme/10.jpg'),
                intro: {
                  title: '2014年南山圣诞装置',
                  content: ''
                },
                temps: [
                  require('../../../assets/img/theme/10/1.jpg'),
                  require('../../../assets/img/theme/10/2.jpg'),
                  require('../../../assets/img/theme/10/3.jpg')
                ]
              },
              {
                title: '2013年KK MALL球幕',
                src: require('../../../assets/img/theme/11.jpg'),
                intro: {
                  title: '2013年KK MALL球幕',
                  content: ''
                },
                temps: [
                  require('../../../assets/img/theme/11/1.jpg'),
                  require('../../../assets/img/theme/11/2.jpg')
                ]
              },
              {
                src: ''
              }
            ]
          },
          {   // 第五行
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
          {   // 第六行
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
