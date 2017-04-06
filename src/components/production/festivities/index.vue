<template>
  <div>
    <table class="brand_table">
      <tbody>
      <tr v-for="obj in items">
        <td v-for="item in obj.arr">
          <div v-if="item.src">
            <div class="image" @mouseenter="showInfo">
              <img :src="item.src">
            </div>
            <div class="preview" style="display:none;"
                 @mouseleave="hideInfo" @click="preview(item.temps)">
              <div class="cover">
                <div class="cover_content">
                  <p>{{item.title}}</p>
                  <img src="../../../assets/img/5.png" alt="arrow">
                </div>
              </div>
            </div>
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
  export default{
    data() {
      return {
        items: [
          {  // 第一行
            arr: [
              {
                title: '2016年Mr.J Diner餐厅开业仪式',
                src: require('../../../assets/img/festivals/1.jpg'),
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
                temps: [
                  require('../../../assets/img/festivals/2/1.jpg'),
                  require('../../../assets/img/festivals/2/2.jpg'),
                  require('../../../assets/img/festivals/2/3.jpg'),
                  require('../../../assets/img/festivals/2/4.jpg'),
                  require('../../../assets/img/festivals/2/4.jpg'),
                  require('../../../assets/img/festivals/2/5.jpg')
                ]
              },
              {
                title: '2016年京井商业晚会',
                src: require('../../../assets/img/festivals/3.jpg'),
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
                temps: [
                  require('../../../assets/img/festivals/8/1.jpg'),
                  require('../../../assets/img/festivals/8/2.jpg'),
                  require('../../../assets/img/festivals/8/3.jpg')
                ]
              },
              {
                title: '2015年南山秋季走秀',
                src: require('../../../assets/img/festivals/9.jpg'),
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
                temps: [
                  require('../../../assets/img/festivals/10/1.jpg'),
                  require('../../../assets/img/festivals/10/2.jpg'),
                  require('../../../assets/img/festivals/10/3.jpg')
                ]
              },
              {
                title: '2013年南山周年庆',
                src: require('../../../assets/img/festivals/11.jpg'),
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
                temps: [
                  require('../../../assets/img/festivals/14/1.jpg'),
                  require('../../../assets/img/festivals/14/2.jpg')
                ]
              },
              {
                title: '2014年沙井活动',
                src: require('../../../assets/img/festivals/15.jpg'),
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
    methods: {
      /* 鼠标移入图片 */
      showInfo: function(event) {
        console.log();
      },
      /* 移出图片 */
      hideInfo: function(event) {
        console.log();
      },
      /* 点击查看 */
      preview: function(temps) {
        var self = this;
        console.log();
      }
    }
  };
</script>

<style>
  .brand_table {
    border-collapse: separate;
    border-spacing: 15px;
  }
  .brand_table > tbody > tr > td {
    position: relative;
  }
  .brand_table .image>img, .brand_table .imageSample>img{
    width: 320px;
    height: 240px;
  }
  .brand_table .image>img{
    cursor: pointer;
  }
  .preview {
    cursor: pointer;
    width: 100%;
    height: 100%;
    color: #fff;
    letter-spacing: 2px;
    font-size: 18px;
    position: absolute;
    top: 0;
  }
  .cover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: #ff1d1d;
    opacity: 0.5;
    filter: Alpha(opacity=50);
    display: table;
  }
  .cover_content {
    margin: auto;
    display: table-cell;
    vertical-align: middle
  }
  .cover_content > p {
    margin-top: 40px;
  }
  .cover_content > img {
    width: 36px;
  }
</style>
