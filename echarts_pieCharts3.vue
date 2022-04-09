<template>
<div class="business_size_content">
  <div class="line"></div>
  <div class="ctn_box">
    <div class="chart_content">
      <div class="btn_box">
        <span>场景化渠道饱和度</span>
      </div>
      <div class="chart_model" ref="chartModel"></div>
    </div>
  </div>
  <div class="line line_rg"></div>
</div>
</template>

<script>
// 原
// import echarts from "echarts";
// 新
const echarts = require('echarts')
import {WebsiteCenterChart} from './pieConfig';
const colorArr = [
  '#FF6669',
  '#FFA940',
  '#FFEC3C',
  '#93E364',
  '#59B3FC',
  '#B982FF',
  '#FF7944',
  '#FFD63D',
  '#BAE636',
  '#36CFC9',
  '#7292FA',
  '#FB67B3',
  '#9D94F6',
  '#D6B208',
  '#64CAC0',
  '#89A0E7',
  '#EA9C66',
  '#62E4FF',
  '#FD6FFF',
  '#E6E551',
  '#A7B3D0',
]

export default {
  props: ['itemWidth'],
  data() {
    return {
      chartObject: null,
      showScene: false,
      typeList: [{
          id: '1',
          label: '渠道类型',
        },
        {
          id: '2',
          label: '星级渠道构成',
        },
        {
          id: '3',
          label: '渠道份额清空',
        },
      ],
      type: '3',
      totalNum: 0,
      noData: false
    }
  },
  computed: {
    // ...mapState("sandBox_regionModule", [
    //   "loginRegionCode",
    //   "currentRegion",
    //   "currentRegionCode",
    // ]),
    leftPx() {
      if (this.type == '3') {
        return '20.2%'
      }
      if (this.type == '2') {
        return '28%'
      }
      return '40%'
    }
  },
  mounted() {
    let dom = this.$refs.chartModel;
    this.chartObject = echarts.init(dom);
    const fun = () => {
      this.chartObject && this.chartObject.resize();
    };
    window.addEventListener("resize", fun);
     this.build([], []);
  },
  watch: {
    // currentRegionCode() {
    //   this.getData();
    // },
    // itemWidth() {
    //   this.chartObject && this.chartObject.resize();
    // }
  },
  methods: {
    build(arr, legendData) {
      let right = '10%';
      let horizontal = '28%';
      if (this.type == '2') {
        right = '15%'
        horizontal = '28%';
      } else if (this.type == '3') {
        right = '3%';
        horizontal = '20%';
      }
      let options = WebsiteCenterChart(arr, legendData, horizontal, right);
      this.chartObject.setOption(options);
      this.chartObject && this.chartObject.resize();
    },
    toggleType(t) {
      if (this.type === t.id) return;
      // this.showScene = flag;
      this.type = t.id;
    //   this.getData();
    this.build();
    },
  }
}
</script>

<style lang="less" scoped>
.business_size_content {
  width: 300px;
//   height: 100%;
height: 400px;

  .ctn_box {
    background:#fff;
    // box-shadow: 2px 3px 3px 0px rgba(0,0, 0, 0.4);
    border: 3px solid rgba(0,0,0,0.05);
    flex: 1;
    margin-top: 8px;
    margin-bottom: 2px;
    padding: 4px 8px 12px;
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 5px 5px  0 0 ;
    height: 200px;
    .chart_content {
      flex: 1;
      background: #fff;
      box-shadow: 0 0 3px 1px rgba(100, 100, 100, 0.1);
      border-top-left-radius: 10px;
      border-bottom-right-radius: 10px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .btn_box {
      margin-top: 5px;
      height: 30px;
      text-align: left;
      color: rgba(116, 124, 160);
      font-family:'Microsoft YaHei';
      overflow: hidden;
    }
    .chart_model {
      background: #fff;

      width: 100%;
      flex: 1;
    }
  }

  .line {
    width: 3px;
    margin-left: 6px;
    margin-right: 6px;
    background: linear-gradient(rgba(209, 227, 248, 0),
        rgba(209, 227, 248, 0) 20%,
        rgba(209, 227, 248, 1) 62%,
        rgba(209, 227, 248, 0));

  }

  .line_rg {
    margin-right: 15px;
  }
}
</style>
