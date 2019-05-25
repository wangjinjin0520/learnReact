import React from 'react';
import { Tabs } from 'antd';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
import  'echarts/lib/chart/line';
import  'echarts/lib/chart/pie';

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

import './chartContainer.less'

const TabPane = Tabs.TabPane;


export default class ChartContainer extends React.Component{
    callback(key) {
        console.log(key);
    }

    componentDidMount () {
        // 基于准备好的dom，初始化echarts实例x`
        let myChart1 = echarts.init(document.getElementById('chart1'));
        // 绘制图表
        myChart1.setOption({
            title: {text: 'ECharts 入门示例'},
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
        let myChart2 = echarts.init(document.getElementById('chart2'));
        // 绘制图表
        myChart2.setOption({
            title: {text: 'ECharts 入门示例'},
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]

        });
        let myChart3 = echarts.init(document.getElementById('chart3'));
        // 绘制图表
        myChart3.setOption({
            title: {
                text: '某站点用户访问来源',
                subtext: '纯属虚构',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: 335, name: '直接访问'},
                        {value: 310, name: '邮件营销'},
                        {value: 234, name: '联盟广告'},
                        {value: 135, name: '视频广告'},
                        {value: 1548, name: '搜索引擎'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        })
    }
    render() {
        return(
            <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="bar" key="1" forceRender>
                   <div id="chart1" style={{ width: 400, height: 400 }}></div>
                </TabPane>
                <TabPane tab="line" key="2" forceRender>
                    <div id="chart2" style={{ width: 400, height: 400 }}></div>
                </TabPane>
                <TabPane tab="pei" key="3" forceRender>
                    <div id="chart3" style={{ width: 400, height: 400 }}></div>
                </TabPane>
            </Tabs>
        )
    }
}



