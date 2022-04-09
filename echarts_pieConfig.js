// 最左侧的饼图
export const WebsiteLeftChart = function (dataList, legendData, horizontal, right) {
    let options = {
        // 中间的文字
        title: {
            text: '12345',
            subtext: '我司渠道',
            left: '20%',
            top: '40%',
            textStyle: {
                fontSize: 20,
                align: 'center',
                color: '#454c5c'
            },
            subtextStyle: {
                fontSize: 16,
                color: '#6c7a89'
            }
        },
        tooltip: {
            show: false,
            trigger: 'item'
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            top: 'center',
            right: right,
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
            formatter: function (name) {
                console.log(name)
                return name+'34'
            },
            textStyle:{
                rich:{
                    color:"#f00"
                }
            }
        },
        series: [{
            name: 'Access From',
            type: 'pie',
            center: ['33%', '50%'],
            radius: ['45%', '65%'],
            cursor: 'normal',
            silent: true,
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            // emphasis: {
            //   label: {
            //     show: true,
            //     fontSize: '40',
            //     fontWeight: 'bold'
            //   }
            // },
            labelLine: {
                show: false
            },
            data: [{
                    value: 335,
                    name: '直接访问 '
                },
                {
                    value: 310,
                    name: '邮件营销'
                },
                {
                    value: 234,
                    name: '联盟广告'
                },
                {
                    value: 135,
                    name: '视频广告'
                },
                {
                    value: 1548,
                    name: '搜索引擎----sf'
                }
            ]
        }]
    }
    return options
}
let datas = [{
    value: 23.65,
    name: '社区',
    itemStyle: {
        color: '#71c947'
    }
}, {
    value: 76.35,
    name: '社区2',
    itemStyle: {
        color: '#ececec'
    }
}];
let data1 = [{
    value: 23.65,
    name: '社区',
    itemStyle: {
        color: '#ffce2b'
    }
}, {
    value: 76.35,
    name: '社区2',
    itemStyle: {
        color: '#ececec'
    }
}];
let data2 = [{
    value: 23.65,
    name: '社区',
    itemStyle: {
        color: '#3087f2'
    }
}, {
    value: 76.35,
    name: '社区2',
    itemStyle: {
        color: '#ececec'
    }
}];
//  第三个饼图 几乎完结还差一点简单的小细节
export const WebsiteCenterChart = function (dataList, legendData, horizontal, right) {
    let options = {
        title: [{
            text: '23.65%',
            left: '15%',
            top: '45%',
            textAlign: 'center',
            textStyle: {
                fontSize: 12,
                color: '#3489f3',
                fontWeight: 'normal'
            }
        }, {
            text: '23.65%',
            left: '49%',
            top: '45%',
            textAlign: 'center',
            textStyle: {
                fontSize: 12,
                color: '#3489f3',
                fontWeight: 'normal'
            }
        }, {
            text: '23.65%',
            left: '82%',
            top: '45%',
            textAlign: 'center',
            textStyle: {
                fontSize: 12,
                color: '#3489f3',
                fontWeight: 'normal'
            }
        }, {
            subtext: '社区场景饱和度',
            left: '16.67%',
            top: '75%',
            textAlign: 'center'
        }, {
            subtext: '商圈场景饱和度',
            left: '50%',
            top: '75%',
            textAlign: 'center'
        }, {
            subtext: '高校场景饱和度',
            left: '83.33%',
            top: '75%',
            textAlign: 'center'
        }],
        legend: {
            show: false
        },
        tooltip: {
            show: false,
        },
        series: [{
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['55%', '85%'],
            label: {
                show: false
            },
            left: 0,
            right: '66.66%',
            top: 0,
            bottom: 0,
            data: datas
        }, {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['55%', '85%'],
            label: {
                show: false
            },
            left: '33.33%',
            right: '33.33%',
            top: 0,
            bottom: 0,
            data: data1
        }, {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['55%', '85%'],
            label: {
                show: false
            },
            left: '66.66%',
            right: 0,
            top: 0,
            bottom: 0,
            data: data2
        }]
    };
    return options
}
//   模拟数据
const centerData = [{
        title: '社区场景饱和度',
        subTitle: '23.65%',
        data: [{
            value: '23.65%',
            name: '社区'
        }]
    },
    {
        title: '商圈场景饱和度',
        subTitle: '23.65%',
        data: [{
            value: '23.65%',
            name: '社区'
        }]
    }
]
