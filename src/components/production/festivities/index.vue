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
                title: '2016年Mr.J Diner餐厅开业仪式',
                src: require('../../../assets/img/festivals/1.jpg'),
                intro: {
                  title: '016MRJ梦想启动仪式',
                  content: 'Mr.J餐厅梦想启动典礼&媒体发布会，在熟悉的《双节棍》潮流街舞表演中拉开帷幕。' +
                  '天王巨星周杰伦、写词达人方文山、怪才黄俊郎、舞蹈大师麦蒸玮、御用化妆师杜国璋等一众文学界' +
                  '及音乐圈的好友空降kkone活动现场，全国各地的歌迷不远万里来到KK ONE，见证Mr.J餐厅梦想启动，' +
                  '活动现场也吸引了20多家主流媒体的争相报道。粉丝互动福利更是惊喜连连，周杰伦、方文山、黄俊郎、' +
                  '麦蒸玮和杜国璋与幸运粉丝亲密合影让现场气氛嗨到爆！'
                },
                temps: [
                  require('../../../assets/img/festivals/1/1.jpg'),
                  require('../../../assets/img/festivals/1/2.jpg'),
                  require('../../../assets/img/festivals/1/3.jpg'),
                  require('../../../assets/img/festivals/1/4.jpg'),
                  require('../../../assets/img/festivals/1/5.jpg')
                ]
              },
              {
                title: '2016年京基百纳圣诞豆趣巡游',
                src: require('../../../assets/img/festivals/2.jpg'),
                intro: {
                  title: '2016圣诞巡游',
                  content: '伯符承办京基百纳旗下四家购物中心，以及联动京基昂驰豆豆家族' +
                  '《豆福传》电影主角豆豆家族成员“豆福”，开展“京基百纳圣诞豆趣之100公里圣诞狂' +
                  '欢趴活动”。“神经豆”亲临现场，带领大批圣诞老人入侵深圳各区繁荣地带，途经宝安、' +
                  '南山、福田、罗湖，跨越半个深圳的圣诞狂欢巡游活动。走上街头、环游城市、互赠礼物、' +
                  '放声歌唱和每一个陌生人拥抱，一路6小时不间断地创造惊喜与感动。'
                },
                temps: [
                  require('../../../assets/img/festivals/2/1.jpg'),
                  require('../../../assets/img/festivals/2/2.jpg'),
                  require('../../../assets/img/festivals/2/3.jpg'),
                  require('../../../assets/img/festivals/2/4.jpg'),
                  require('../../../assets/img/festivals/2/5.jpg'),
                  require('../../../assets/img/festivals/2/6.jpg')
                ]
              },
              {
                title: '2016年京井商业晚会',
                src: require('../../../assets/img/festivals/3.jpg'),
                intro: {
                  title: '2016京基百纳商业新春晚会',
                  content: '神猴辞岁，金鸡迎春，伯符传媒团队承办的“10年同心同行“2016京' +
                  '基百纳商业新春晚会举办圆满成功。各路京基精英呈上了一段段精彩纷呈的节目，' +
                  '热舞、小品、歌唱等形式让大家目不暇接，充分展示了京基集团员工率性活泼积极向上的青春活力。'
                },
                temps: [
                  require('../../../assets/img/festivals/3/1.jpg'),
                  require('../../../assets/img/festivals/3/2.jpg'),
                  require('../../../assets/img/festivals/3/3.jpg'),
                  require('../../../assets/img/festivals/3/4.jpg'),
                  require('../../../assets/img/festivals/3/5.jpg')
                ]
              }
            ]
          },
          {  // 第二行
            arr: [
              {
                title: '2016年KK ONE答谢会',
                src: require('../../../assets/img/festivals/4.jpg'),
                intro: {
                  title: 'Kkone招商答谢会',
                  content: '伯符传媒团队倾力打造KKONE时尚潮流购物中心“NOE STAR携手共赢”' +
                  '招商答谢会在瑞吉酒店酒店盛大举行，星美国际影城、东方健身、优瑞卡儿童乐园等数百' +
                  '位商家媒体记者出席了本次由京基百纳商业公司主办的招商答谢会。'
                },
                temps: [
                  require('../../../assets/img/festivals/4/1.jpg'),
                  require('../../../assets/img/festivals/4/2.jpg'),
                  require('../../../assets/img/festivals/4/3.jpg'),
                  require('../../../assets/img/festivals/4/4.jpg'),
                  require('../../../assets/img/festivals/4/5.jpg')
                ]
              },
              {
                title: '2016年伯符年会',
                src: require('../../../assets/img/festivals/5.jpg'),
                intro: {
                  title: '伯符投资年会',
                  content: '伯符投资年会在瑞吉酒店圆满落下帷幕，本次年会以“厚积伯发赢战2017”为主题，' +
                  '伯符投资总裁程总携员工与百余位投资人共同见证这狂欢时刻。现场座无虚席，不仅有互动游' +
                  '戏与音乐表演，感受节目的欢愉之时，一轮轮抽奖环节为在场来宾不断送来惊喜大奖，引爆全场' +
                  '热情。全程的精彩也通过斗鱼网络直播本次年会的盛况。'
                },
                temps: [
                  require('../../../assets/img/festivals/5/1.jpg'),
                  require('../../../assets/img/festivals/5/2.jpg'),
                  require('../../../assets/img/festivals/5/3.jpg'),
                  require('../../../assets/img/festivals/5/4.jpg'),
                  require('../../../assets/img/festivals/5/5.jpg')
                ]
              },
              {
                title: '2016KK MALL时尚风暴',
                src: require('../../../assets/img/festivals/6.jpg'),
                intro: {
                  title: '2015京基KK MALL时尚风暴',
                  content: '伯符传媒于2012年及13年连续为kkmall成功举办两届“时尚风暴”秋冬流行趋势发布会，' +
                  '迅速成为城中最耀眼的时尚盛事，有力地诠释了KK MALL作为“时尚的高端，潮流的前沿”的品牌定位。' +
                  '2015年金秋季节，KK MALL再度华丽出击，隆重推出——KK MALL2015年“时尚风暴”秋冬流行趋势发布会。' +
                  '展示品牌个性，提高品牌知名度和美誉度，通过活动吸引消费者，增加商场内部的人气，并让更多的消费者' +
                  '切身感受到商场优质ed产品和服务，在购物的同时享受活动带来的乐趣。'
                },
                temps: [
                  require('../../../assets/img/festivals/6/1.jpg'),
                  require('../../../assets/img/festivals/6/2.jpg'),
                  require('../../../assets/img/festivals/6/3.jpg'),
                  require('../../../assets/img/festivals/6/4.jpg'),
                  require('../../../assets/img/festivals/6/5.jpg')
                ]
              }
            ]
          },
          {   // 第三行
            arr: [
              {
                title: '2015年沙井京基跨年晚会',
                src: require('../../../assets/img/festivals/7.jpg'),
                intro: {
                  title: '沙井京基百纳2015跨年倒数狂欢趴',
                  content: '沙井京基百纳广场重金打造的“2015跨年倒数狂欢趴”拉开了激情大幕，' +
                  '狂欢晚会从31日晚8点持续到凌晨12点左右，共有120多名表演者参加表演，沙井百纳' +
                  '成为西部最为人气爆棚的地方，吸引了近300位市民参与。'
                },
                temps: [
                  require('../../../assets/img/festivals/7/1.jpg'),
                  require('../../../assets/img/festivals/7/2.jpg'),
                  require('../../../assets/img/festivals/7/3.jpg'),
                  require('../../../assets/img/festivals/7/4.jpg'),
                  require('../../../assets/img/festivals/7/5.jpg')
                ]
              },
              {
                title: '2015年沙井歌唱比赛',
                src: require('../../../assets/img/festivals/8.jpg'),
                intro: {
                  title: '2015年沙井歌唱比赛',
                  content: ''
                },
                temps: [
                  require('../../../assets/img/festivals/8/1.jpg'),
                  require('../../../assets/img/festivals/8/2.jpg'),
                  require('../../../assets/img/festivals/8/3.jpg')
                ]
              },
              {
                title: '2015年南山秋季走秀',
                src: require('../../../assets/img/festivals/9.jpg'),
                intro: {
                  title: '2015年南山秋季走秀',
                  content: ''
                },
                temps: [
                  require('../../../assets/img/festivals/9/1.jpg'),
                  require('../../../assets/img/festivals/9/2.jpg'),
                  require('../../../assets/img/festivals/9/3.jpg'),
                  require('../../../assets/img/festivals/9/4.jpg')
                ]
              }
            ]
          },
          {   // 第四行
            arr: [
              {
                title: '2015年KK MALL情人节',
                src: require('../../../assets/img/festivals/10.jpg'),
                intro: {
                  title: '015京基KK MALL全城致爱',
                  content: '全城致爱”情人节系列装置&活动——白色情人节和你心爱的TA“吻”亮LOVE！' +
                  '现场吸引了大量情侣围观驻足，并亲身体验。'
                },
                temps: [
                  require('../../../assets/img/festivals/10/1.jpg'),
                  require('../../../assets/img/festivals/10/2.jpg'),
                  require('../../../assets/img/festivals/10/3.jpg')
                ]
              },
              {
                title: '2013年南山周年庆',
                src: require('../../../assets/img/festivals/11.jpg'),
                intro: {
                  title: '2015京基南山百纳7周年庆',
                  content: '南山京基百纳广场7周年庆典以“大牌驾到”为主题，从会场' +
                  '签到处的扑克卫兵、“赌王”拍照区，到花园中的园艺雕塑，都贯穿着扑克牌' +
                  '的造型元素，而每位受邀来宾都在入口处领取了一张扑克牌，其神秘又充满新意。' +
                  '现场空降大牌嘉宾亲临现场与商户、顾客共同为广场七周岁生日喝彩，并为广场的未来祝福。'
                },
                temps: [
                  require('../../../assets/img/festivals/11/1.jpg'),
                  require('../../../assets/img/festivals/11/2.jpg'),
                  require('../../../assets/img/festivals/11/3.jpg'),
                  require('../../../assets/img/festivals/11/4.jpg'),
                  require('../../../assets/img/festivals/11/5.jpg')
                ]
              },
              {
                title: '2015年afloat理发店开业',
                src: require('../../../assets/img/festivals/12.jpg'),
                intro: {
                  title: '2015 AFLOAT美发店开业活动',
                  content: '在商业领域营造商圈话题舆论热点，激起全民关注 AFLOAT商圈的热潮，' +
                  '实现品牌管理层高效曝光率，通过此次活动造势宣传，为AFLOAT美发店的完美开业做好铺垫。'
                },
                temps: [
                  require('../../../assets/img/festivals/12/1.jpg'),
                  require('../../../assets/img/festivals/12/2.jpg'),
                  require('../../../assets/img/festivals/12/3.jpg')
                ]
              }
            ]
          },
          {   // 第五行
            arr: [
              {
                title: '2014年沙井一周年庆典',
                src: require('../../../assets/img/festivals/13.jpg'),
                intro: {
                  title: '2014沙井京基百纳一周年庆典',
                  content: '沙井京基百纳一周年庆典，以“一周年庆，一见倾心”为主题，' +
                  '晚上现场领导嘉宾商户、顾客共同为沙井京基百纳庆生1周岁生日喝彩，并为广场的未来祝福。'
                },
                temps: [
                  require('../../../assets/img/festivals/13/1.jpg'),
                  require('../../../assets/img/festivals/13/2.jpg'),
                  require('../../../assets/img/festivals/13/3.jpg'),
                  require('../../../assets/img/festivals/13/4.jpg')
                ]
              },
              {
                title: '2014年沙井金蚝节',
                src: require('../../../assets/img/festivals/14.jpg'),
                intro: {
                  title: '2014沙井京基百纳宝安区第十一届沙井金蚝节',
                  content: '宝安区第十一届“沙井金蚝节”暨首届沙井购物嘉年华正式开幕，蚝节开幕式设置' +
                  '在沙井京基百纳门前广场，场面布置得简单而隆重。本届金蚝节主推“购物嘉年华、金蚝美食周、' +
                  '粤剧粤曲文化节”三大主题活动，38大项88小项特色主题活动，为市民群众打造一个“文化盛宴、' +
                  '百姓节日、旅游盛会、商业平台”，让广大游客和市民群众体会蚝乡之美，品味蚝乡文化。'
                },
                temps: [
                  require('../../../assets/img/festivals/14/1.jpg'),
                  require('../../../assets/img/festivals/14/2.jpg')
                ]
              },
              {
                title: '2014年沙井活动',
                src: require('../../../assets/img/festivals/15.jpg'),
                intro: {
                  title: '2014年沙井活动',
                  content: ''
                },
                temps: [
                  require('../../../assets/img/festivals/15/1.jpg'),
                  require('../../../assets/img/festivals/15/2.jpg'),
                  require('../../../assets/img/festivals/15/3.jpg'),
                  require('../../../assets/img/festivals/15/4.jpg')
                ]
              }
            ]
          },
          {   // 第六行
            arr: [
              {
                title: '2014年KK MALL跨年晚会',
                src: require('../../../assets/img/festivals/16.jpg'),
                intro: {
                  title: '2014沙井京基百纳跨年晚会',
                  content: '013年12月31日晚22：30，沙井京基百纳广场在古榕广场举行2013-2014“MALL时代，' +
                  '新生活”跨年倒数狂欢夜晚会，并将营业时间延续到2点，带来震撼跨年限时大抢购，上演最HIGH最火' +
                  '爆的跨年盛宴。'
                },
                temps: [
                  require('../../../assets/img/festivals/16/1.jpg'),
                  require('../../../assets/img/festivals/16/2.jpg'),
                  require('../../../assets/img/festivals/16/3.jpg'),
                  require('../../../assets/img/festivals/16/4.jpg'),
                  require('../../../assets/img/festivals/16/5.jpg')
                ]
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
