<template>
  <div style="height: 100%">
    <XHeader title="医疗培训" :left-options="{showBack: false}" slot="header"></XHeader>
    <ViewBox>
      <swiper :list="img_list" auto></swiper>
      <divider><h3>康复培训物理治疗方向主要课程</h3></divider>
      <card :header="{title: '心肺系统疾病物理治疗'}" style="padding: 0 15px">
        <div slot="content" style="padding: 10px 0">
          <flexbox orient="vertical">
            <flexbox-item>
              <div class="flex-demo">
                <p>
                  心肺康复，作为现代呼吸病学不可分割的组成部分，针对性地采用个体化手段，旨在减轻患者症状、保持合适的肺功能状态、增强患者生活参与度、降低患者健康相关性费用，是基于循证医学、多学科和多方面治疗的有益于慢性肺疾病患者的临床活动。
                  肺康复的对象所涉极广，重可至术前准备的手术病人，轻可至稳定期慢性呼吸系统疾病患者。在肺康复中，其实有许多简便易行的物理治疗方法。</p>
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="flex-demo" style="text-align: center">
                <img src="../../assets/img/2.png" class="mob_homeimage" alt="">
              </div>
            </flexbox-item>
          </flexbox>
        </div>
      </card>

      <card :header="{title: '脑外伤疾病物理治疗'}" style="padding: 0 15px">
        <div slot="content" style="padding: 10px 0">
          <flexbox orient="vertical">
            <flexbox-item>
              <div class="flex-demo">
                <p>
                  脑出血患者一般发病后往往重视的是药物治疗，而忽视了后期的康复治疗，待病情平稳，一些不良情况形成了，再介入康复手段往往是事倍功半。患者肢体运动功能的康复训练也应在病情平稳后的48小时即开始，包括良肢位的设计、关节活动度的训练等，一步步的按照康复方案来进行恢复训练，每各阶段都很关键，不容小觑。</p>
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="flex-demo" style="text-align: center">
                <img src="../../assets/img/2.png" class="mob_homeimage" alt="">
              </div>
            </flexbox-item>
          </flexbox>
        </div>
      </card>

      <card :header="{title: '肌筋膜链疾病物理治疗'}" style="padding: 0 15px">
        <div slot="content" style="padding: 10px 0">
          <flexbox orient="vertical">
            <flexbox-item>
              <div class="flex-demo">
                <p>肌筋膜链理论是由美国著名物理治疗大师，罗夫治疗学派的创始人-Ida
                  Rolf提出，由其学生，同时也是国际著名的手法治疗大师-ThomasMyers通过解剖实践验证得出，并出版著作《解剖列车》一书，在物理治疗界引起了革命，让人们对于人体的构造又有了进一步的认识。
                  肌筋膜链康复技术在国际上已经普遍推广，并且成为了物理治疗师、手法治疗师、按摩师、整骨医师、私人教练、体能教练等必备的进阶课程，也成为了他们在工作中不可缺少的一部分。
                  在国内这个是由国内著名私人教练，同时也是中国第一个博士私人教练-毕义明博士引入，并融合了多年的运动经验和康复理论，形成了“评估诊断-手法治疗-功能训练”三维一体的治疗与康复模式。</p>
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="flex-demo" style="text-align: center">
                <img src="../../assets/img/2.png" class="mob_homeimage" alt="">
              </div>
            </flexbox-item>
          </flexbox>
        </div>
      </card>

      <card :header="{title: '肢体康复物理治疗'}" style="padding: 0 15px">
        <div slot="content" style="padding: 10px 0">
          <flexbox orient="vertical">
            <flexbox-item>
              <div class="flex-demo">
                <p>
                  康复中心开展的运动治疗是通过被动运动疗法、主动运动疗法和抗阻力、运动疗法，对病人身体的功能障碍和功能低下起到预防、改善和恢复作用的一种特殊疗法。主要治疗对象有脑血管病、骨科疾病等所导致的中枢性瘫痪病人、关节挛缩、关节强直、软组织损伤，肩周炎、颈、腰椎病病人。在手法治疗的同时配以一些器械如:站立床、肩关节施转训练器、下肢功率车、减重步态训练装置、踝关节训练器等的辅助治疗，以加快肢体功能的恢复速度，减少残疾程度。</p>
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="flex-demo" style="text-align: center">
                <img src="../../assets/img/2.png" class="mob_homeimage" alt="">
              </div>
            </flexbox-item>
          </flexbox>
        </div>
      </card>
      <card>
        <div slot="content" style="padding: 0 20px;text-align: center">
          <h4>关注公众号</h4>
          <img src="../../assets/img/qr.png" class="mob_homeimage" alt="">
        </div>
      </card>
    </ViewBox>
  </div>
</template>

<script>
  import {XHeader, Swiper, ViewBox, Card, Divider, Flexbox, FlexboxItem} from 'vux'

  const img_list = [{
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
    title: '送你一朵fua'
  }, {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/5.jpg', // 404
    title: '送你一次旅行',
    fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
  }]
  export default {
    components: {
      XHeader,
      Swiper,
      ViewBox,
      Card,
      Divider,
      Flexbox,
      FlexboxItem
    },
    props: {},
    data() {
      return {
        img_list: img_list
      }
    },
    watch: {},
    computed: {},
    methods: {},
    created() {
    },
    mounted() {
    }
  }

</script>
<style>

</style>
