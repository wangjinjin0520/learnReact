import React from 'react';
import {Tabs} from 'antd';
import ReactEcharts from 'echarts-for-react';
import './chartContainer.css'

const TabPane = Tabs.TabPane;

export default class ChartContainer extends React.Component {
  state = {
    activeKey: '1',
  };

  changeChart = (e) => {
    this.setState({
      activeKey: e
    })
  };

  getOptions(index) {
    let op1 = {
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
    };
    let op2 = {
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

    };
    let op3 = {
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
    };
    if (index === 1) {
      return op1;
    }else if (index === 2) {
      return op2;
    }else {
      return op3;
    }
  }

  render() {

    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={this.changeChart}>
          <TabPane tab="bar" key="1" forceRender/>
          <TabPane tab="line" key="2" forceRender/>
          <TabPane tab="pie" key="3" forceRender/>
        </Tabs>
        <div className="chart-wrapper" style={{width: 400, height: 400}}>
          <ReactEcharts notMerge={true} option={this.getOptions(parseInt(this.state.activeKey))}/>
        </div>
      </div>
    )
  }
}



