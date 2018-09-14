import React,{ Component } from "react"
import { Card , Table , Modal , Button ,message } from "antd"
import Axios from "../../axios"
import Utils from "../../utils/utils"
export default class BaseTable extends Component {
	state = {
		dataSource:"",
		dataSource1:""
	}
	//定义页码
	params = {
		page:1
	}
	render(){
		// columns 是表头
		const columns  = [
				 {
				 	title:"id",
				 	dataIndex:"id"
				 },
				 {
				 	title: "用户名",
				 	dataIndex:"username"
				 },
				 {
				 	title: "性别",
				 	dataIndex: "sex",
				 	//定义字典
				 	render(sex){
				 		return sex==1?"男":"女"
				 	}
				 },
				 {
				 	title: "状态",
				 	dataIndex: "state",
				 	render(state){
				 		let config = {
				 				"1": "积极主动",
				 				"2": "表现一般",
				 				"3": "非常优秀",
				 				"4": "咸鱼一条",
				 				"5": "努力好学",
				 				"6": "无药可救"
				 		}
				 		return config[state]
				 	}
				 },
				 {
				 	title: "爱好",
				 	dataIndex: "interest",
				 	render(interest){
				 		let config = {
				 			"1": "篮球",
				 			"2": "羽毛球",
				 			"3": "乒乓球",
				 			"4": "运动",
				 			"5": "死肥仔"
				 		} 
				 	return config[interest]
				 	}
				 },
				 {
				 	title: "生日",
				 	dataIndex: "birthday"
				 },
				 {
				 	title: "地址",
				 	dataIndex: "adress"
				 },
				 {
				 	title: "早起时间",
				 	dataIndex: "time"
				 }


		]
		/***rowSelection 给表格设定,选项的方法，type定义选择方式:单选 
		 ***onRow事件是控住选择的某一行，而selectedRowkeys；为点击的哪一个，
		 *我看可以通过点击整个行获取其信息然后赋值让其显示就和label 一样
		*/
		const rowSelection = {
					type:"radio",
					selectedRowKeys:this.state.selectedRowKeys

		}
		return (
			<div>
			<Card title="动态表格" style={{height:"calc(75vh)",overflow:"auto"}}>
				<Table
				bordered
				rowSelection={rowSelection}
				columns ={columns}
				dataSource ={this.state.dataSource1}
				onRow={(record,index) => {
  					  return {
   						   onClick: () => {
   						   	//record为点击的一项的属性，index为选中的id
   						   	//存储信息
   						   	this.setState({
   						   		selectedRowKeys:[index],
   						   		selectedItems: record
   						   	})
   						   	Modal.info({
   						   		title:record.username
   						   	})
   						   },       // 点击行
  						  };
  }}			pagination={this.state.pagination}	
				>

				</Table>
			</Card>

			</div>

			)
	}
		componentDidMount(){
			this.request()
		}
		request = () =>{
					Axios.ajax({
			url:"/table/list",
			data:{
				params:{
					page:this.params
				}
			}
		})
		.then((data) =>{
			data.data.result.list.map((v,k) =>{
				v.key=k
			} )
				if(data.status==200){
					let that = this
					this.setState({
					dataSource1:data.data.result.list,
					//使用 pagination方法，传输数据,和跳转的回调函数,
					//回到函数，当点击页眉或则第几页 时会触发这个函数，
					pagination:Utils.pagination(data.data,(current) =>{
								//改变请求数据中的params中的page属性
								that.params.page= current
								this.request()
					})
				 	})
				}
			} )
		}
} 