import React,{ Component } from "react"
import { Card } from "antd"
// 引入 echarts  
import ReactEcharts from "echarts-for-react"
// 引入主题,在百度下的主题要变成es6模式
import echartsTheme from "./theme.js"
// 引入主体模块
import echarts from "echarts/lib/echarts"
// 引入饼图和折现
import "echarts/lib/chart/bar"
import "echarts/lib/chart/pie"
// 引入提示框和标题组件
import "echarts/lib/component/tooltip"
// 引入原型图必须映入
import "echarts/lib/component/title"
import "echarts/lib/component/legend"
import "echarts/lib/component/markPoint"
export default class BaseEcharts extends Component {
		state=[]
		componentWillMount(){
			//必须在组件创建完前注入主题
		echarts.registerTheme("lk",echartsTheme)
		}
		getOptions(){
			// 定义图标信息
			let option = {
				title: {
					text: "用户骑行订单"
				},
				tooltip: {
					//悬浮显示信息
					trigger: "axis"
				},
				legend: {
					// 定义可选的小标题
					data:["ofo","mobie","blueBike"]
				},
				xAxis: {
					data:["周一","周二","周三","周四","周五","周六","周天"]
				},
				yAxis: {
					type: "value"
				},
				series: [
				// 每一个对象代表一个类型
				{
					name: "ofo",
					type: "bar",
					data: [
						500,
						1000,
						1500,
						2000,
						2200,
						2600,
						3000
					]
				},
				{
					name: "mobie",
					type: "bar",
					data: [
						1000,
						1500,
						2200,
						2800,
						3500,
						4000,
						4500
					]
				},
				{
					name: "blueBike",
					type: "bar",
					data: [
						1200,
						2500,
						3000,
						3600,
						3800,
						4300,
						4900
					]
				}
				]
			
			}
			return option
		}
		getOptions2() {
			let option = {
				title: {
					text: "用户骑行",
					// 控制标题显示在中间
					x: "center"
				},
				// 定义 小标题
				legend: {
					// 垂直显示
					orient: "vertical",
					// 定位
					 top: 20,
					 bottom: 20,
					 right: 20,
					 // 定义data
					 data: ["周一","周二","周三","周四","周五","周六","周天"]
				},
				// 定义点击触发的信息
				tooltip: {
					trigger: "item",
					// 按比例显示
					formater: "{a} <br/>{b} : {c} ({d}%)"
				},
				series: [
					{
						name: "订单量",
						// 定义类型
						type: "pie",
						// 定义比例
						radius: "70%",
						// 定义图形位置
						conter: ["50%","60"],
						data: [
							{
								value: 1000,
								name: "周一"
							},
							{
								value: 1000,
								name: "周二"
							},
							{
								value: 1000,
								name: "周三"
							},
							{
								value: 1000,
								name: "周四"
							},
							{
								value: 1000,
								name: "周五"
							},
							{
								value: 1000,
								name: "周六"
							},
							{
								value: 1000,
								name: "周七"
							}
						]
					}
				]
			}
			return option
		}
		// 圆圈图
		getOptions3(){
			let option = {
				title: {
					text: "用户骑行订单",
					// 标题沿着x居中
					x: "center"
				},
				// 小标题
				legend: {
					orient: "vertical",
					right: 20,
					botton: 20,
					top:20,
					data: ["周一","周二","周三","周四","周五","周六","周天"]
				},
				tooltip: {
					// 必须item
					trigger: "item",
					// 渲染百分数
					formater: '{a}<br/>{b} : {c} ({d}%)'
				},
				series: [
				{	name: "订单量",
					// 定义图形类型
					type: "pie",
					// 和圆形的唯一区别设置两个半径
					radius: ["50%","80%"],
					// 定义位置
					center: ["50%","50%"],
					data: [
					    {value: 1000,
                            name: '周一'
                        }, {
                            value: 1000,
                            name: '周二'
                        }, {
                            value: 2000,
                            name: '周三'
                        }, {
                            value: 1500,
                            name: '周四'
                        }, {
                            value: 3000,
                            name: '周五'
                        }, {
                            value: 2000,
                            name: '周六'
                        }, {
                            value: 1200,
                            name: '周日'
                        }
					]}
				]
			}
			return option
		}
		getOptions4(){
			let option = {
				title:{
					text: '用户骑行订单',
					x: "center"
				},
				legend:{
					orient: "vertical",
					right: 20,
					top: 20,
					bottom: 20,
					data: [
					"周一","周二","周三","周四","周五","周六","周天"
					]
				},
				tooltip: {
					title: 'item',
					formater: "{a}<br/>{b} {c}:({d}%)"
				},
				series: [
					{
						name: "订单量",
						type: "pie",
						radius: "60%",
						// 比 圆形多了一个属性
						roseType: "redius",
						center: ["50%","50%"],
						data: [
							  {
                            value: 1000,
                            name: '周一'
                        }, {
                            value: 1000,
                            name: '周二'
                        }, {
                            value: 2000,
                            name: '周三'
                        }, {
                            value: 1500,
                            name: '周四'
                        }, {
                            value: 3000,
                            name: '周五'
                        }, {
                            value: 2000,
                            name: '周六'
                        }, {
                            value: 1200,
                            name: '周日'
                        }
						].sort((a,b) =>{
							return a.value-b.value
						})
					}
				]
			} 
			return option
		}
		getOptions5(){
			let option = {
  			  xAxis: {
      		 	 type: 'category',
      			  boundaryGap: false,
      			  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
   					 },
   			tooltip:{
   				trigger: "axis"
   			},
   			legend:{
				orient: "vertical",
				right: 20,
				top: 20,
				bottom: 20,
				data: ['even1', "even2"]
   			},
   			 yAxis: {
        		type: 'value'
   				 },
   			 series: [
   			 		{
   			 			name:"even1",
      			  		data: [820, 932, 901, 934, 1290, 1330, 1320],
      			  		type: 'line',
       					areaStyle: {}
	   				 },
	   				 {
   			 			name:"even2",
      			  		data: [500, 602, 701, 1000, 1100, 1200, 2000],
      			  		type: 'line',
       					areaStyle: {}
	   				 }
	   				 ]
			};
			return option
		}
		getOptions6(){
			let option = {
  					xAxis: {
  					    type: 'category',
  					    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  					},
  					yAxis: {
  					    type: 'value'
  					},
  					legend: {
  						orient: "vertical",
  						top:20,
  						// left: 20,
  						// right: 20,
  						data: ["line","line1","line2"]
  					},
  					tooltip: {
  						trigger: "axis"
  					},
  					series: [
  					{
  						name:"line1",
  					    data: [120, 332, 501, 534, 890, 930, 2020],
  					    type: 'line'
  					},
  					{
  						name: "line2",
  					    data: [820, 932, 901, 934, 1290, 1330, 1320],
  					    type: 'line'
  					},
  					{
  						name: "line3",
  					    data: [500, 802, 1000, 1500, 2000, 2500, 4000],
  					    type: 'line'
  					}
  					]
				};
			return option
		}
		render(){
			return (
				<div className="chart1">
					<Card>
						<ReactEcharts 
						option={this.getOptions()} 
						theme="lk"
						notMerge= {true}
						lazyUpdate = {true}
						style = {{
							height:500,
							width:1200,
						}}
						></ReactEcharts>
					</Card>
					<Card>
						<ReactEcharts 
							option = {this.getOptions2()}
							theme = " lk"
							notMerge= {true}
							lazyUpdate = {true}
						></ReactEcharts>
					</Card>
					<Card>
						<ReactEcharts 
							option = { this.getOptions4() }
							theme = "lk"
							lazyUpdate = { true }
							notMerge = { true }
						></ReactEcharts>
					</Card>
					<Card>
						<ReactEcharts
							option = { this.getOptions5() }
							theme = "lk"
							lazyUpdate = {true}
							notMerge = { true } 
						></ReactEcharts>
					</Card>
					<Card>
						<ReactEcharts
							option = {this.getOptions6()}
							theme = "lk"
							lazyUpdate = { true }
							notMerge = { true } 
						>
						</ReactEcharts>
					</Card>
				</div>
				)
		}
}

