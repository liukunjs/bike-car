import React,{ Component } from "react";
import Axios from '../../axios';
import { Card , Table } from "antd"
import  Utils from "../../utils/utils"
export default class Order extends Component {
	state = {
			list: [],
			pagination: ""
		}
	params = {
		page: 1
	}
	componentDidMount(){
		this.request()	
	}
	request=() =>{
		let that = this
		let options = {
				url:"/bike",
				data: {
					params: this.params
				}
		}
		Axios.ajax(options)
		.then(({data}) =>{
			console.log(data.result.item_list)
			// 遍历 list 加key属性
			let list = data.result.item_list.map((v) =>{
				v.key = v.id 
				return v
			})
			that.setState({
				list,
				//第一参数为res,第二个为onChange函数当在变页时执行
				pagination: Utils.pagination(data,(current) =>{
					//更新页面的值，并发请求
					that.params.page = current
					that.request()
				})
			},() =>{
				console.log(that.state.list,222222)
			})
		})
	}
	render(){
	const columns = [
			{
				title: "订单编号",
				dataIndex: "order_sn" 
			},
			{
				title: "车辆编号",
				dataIndex: "bike_sn"
			},
			{
				title: "用户名",
				dataIndex: "user_name"
			},
			{
				title: "手机号",
				dataIndex: "mobile"
			},
			{
				title: "里程",
				dataIndex: "distance",
				 render(distance){
				 	return distance/1000+"km"
				 }
			},
			{
				title: "行驶时长",
				dataIndex: "total_time"
			},
			{
				title: "状态",
				dataIndex: "status"
			},
			{
				title: "开始时间",
				dataIndex: "start_time"
			},
			{
				title: "结束时间",
				dataIndex: "end_time"
			},
			{
				title: "订单金额",
				dataIndex: "total_fee"
			},
			{
				title: "实付金额",
				dataIndex: "user_pay"
			}
	]
	return (
		<Card>
			<Table
				bordered
				columns={ columns }
				dataSource = {this.state.list }
				pagination = { this.state.pagination }
			>

			</Table>
		</Card>
		)

	}

} 