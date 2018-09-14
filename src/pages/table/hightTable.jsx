import React,{ Component } from "react"
import { Card , Table , Modal , Button ,message ,Badge} from "antd"
import Axios from "../../axios"
import Utils from "../../utils/utils"
export default class HeightTable extends Component {
	state = {
		dataSource:"",
		dataSource1:"",
		dataSource3:''
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
				 	dataIndex:"id",
				 	width:80,
				 	key:1
				 },
				 {
				 	title: "用户名",
				 	dataIndex:"username",
				 	width:80,
				 	key:2
				 },
				 {
				 	title: "性别",
				 	dataIndex: "sex",
				 	//定义字典
				 	render(sex){
				 		return sex==1?"男":"女"
				 	},
				 	width:80,
				 	key:3
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
				 	},
				 	width:120,
				 	key:4
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
				 	},
				 	width:120,
				 	key:5
				 },
				 {
				 	title: "生日",
				 	dataIndex: "birthday",
				 	width:120,
				 	key:6
				 },
				 {
				 	title: "地址",
				 	dataIndex: "adress",
				 	width:120,
				 	key:7
				 },
				 {
				 	title: "早起时间",
				 	dataIndex: "time",
				 	width:120,
				 	key:8
				 }


		]
				const columns2  = [
				 {
				 	title:"id",
				 	dataIndex:"id",
				 	width:80,
				 	fixed:"left",
				 	key:9
				 },
				 {
				 	title: "用户名",
				 	dataIndex:"username",
				 	width:80,
				 	fixed:"left",
				 	key:10
				 },
				 {
				 	title: "性别",
				 	dataIndex: "sex",
				 	//定义字典
				 	render(sex){
				 		return sex==1?"男":"女"
				 	},
				 	width:80,
				 	key:11
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
				 	},
				 	width:120,
				 	key:12
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
				 	},
				 	width:120,
				 	key:13
				 },
				 {
				 	title: "生日",
				 	dataIndex: "birthday",
				 	width:120,
				 	key:14
				 },
				  {
				 	title: "生日",
				 	dataIndex: "birthday",
				 	width:120,
				 	key:15
				 },
				  {
				 	title: "生日",
				 	dataIndex: "birthday",
				 	width:120,
				 	key:16
				 },
				  {
				 	title: "生日",
				 	dataIndex: "birthday",
				 	width:120,
				 	key:17
				 },
				  {
				 	title: "生日",
				 	dataIndex: "birthday",
				 	width:120,
				 	key:18
				 },
				  {
				 	title: "生日",
				 	dataIndex: "birthday",
				 	width:120,
				 	key:19
				 },
				  {
				 	title: "生日",
				 	dataIndex: "birthday",
				 	width:120,
				 	key:20
				 },
				  {
				 	title: "生日",
				 	dataIndex: "birthday",
				 	width:120,
				 	key:21
				 },
				  {
				 	title: "生日",
				 	dataIndex: "birthday",
				 	width:120,
				 	key:22
				 },
				  {
				 	title: "生日",
				 	dataIndex: "birthday",
				 	width:120,
				 	key:23
				 },
				  {
				 	title: "生日",
				 	dataIndex: "birthday",
				 	width:120,
				 	key:24
				 },
				  {
				 	title: "生日",
				 	dataIndex: "birthday",
				 	width:120,
				 	key:25
				 },
				  {
				 	title: "生日",
				 	dataIndex: "birthday",
				 	width:120,
				 	key:26
				 },
				  {
				 	title: "生日",
				 	dataIndex: "birthday",
				 	width:120,
				 	key:27
				 },
				  {
				 	title: "生日",
				 	dataIndex: "birthday",
				 	width:120,
				 	key:28
				 },
				 {
				 	title: "地址",
				 	dataIndex: "adress",
				 	width:120,
				 	key:29
				 },
				 {
				 	title: "早起时间",
				 	dataIndex: "time",
				 	width:120,
				 	key:30
				 }


		]
		const columns3  = [
				 {
				 	title:"id",
				 	dataIndex:"id",
				 	key:31
				 },
				 {
				 	title: "用户名",
				 	dataIndex:"username",
				 	key:32
				 },
				  {
				 	title: "年龄",
				 	dataIndex:"age",
				 	//sorter  根据返回值和sort类似
				 	sorter(a,b){
				 		return a.age-b.age
				 	},
				 	//因为第一次是升序 在点一次为降序，所以的定义不同的量
				 	sortOrder:this.state.sortOrder,
				 	key:33
				 },
				 {
				 	title: "性别",
				 	dataIndex: "sex",
				 	//定义字典
				 	render(sex){
				 		return sex==1?"男":"女"
				 	},
				 	key:34
				 },
				 {
				 	title: "状态",
				 	dataIndex: "state",
				 	render(state){
				 		let config = {
				 				"1": <Badge text="积极主动" status="success"></Badge>,
				 				"2": <Badge text="表现一般" status="processing"></Badge>,
				 				"3": <Badge text="非常优秀" status="success"></Badge>,
				 				"4":  <Badge text="咸鱼一条" status="warning"></Badge>,
				 				"5": <Badge text="努力好学" status="processing"></Badge>,
				 				"6": <Badge text="无药可救" status="error"></Badge>
				 		}
				 		return config[state]
				 	},
				 	key:35
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
				 	},
				 	key:36
				 },
				 {
				 	title: "生日",
				 	dataIndex: "birthday",
				 	key:37
				 },
				 {
				 	title: "地址",
				 	dataIndex: "adress",
				 	key:38
				 },
				 {
				 	title: "操作",
				 	render(){
				 		return <Button type="primary">删除</Button>
				 	},
				 	key:39
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
			<div style={{height:"calc(75vh)",overflow:"auto"}}>
		{/*	<Card title="基础表格">
				<Table
					bordered
					pagination={false}
					columns = {columns}
					dataSource = {this.state.dataSource}>
				</Table>
			</Card>*/}
			<Card title="头部固定表格" >
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
  }}			
  				pagination={this.state.pagination}

  				scroll={{y:240}}	
				>

				</Table>
			</Card>


			<Card title="左侧固定表格">
				<Table
				bordered
				rowSelection={rowSelection}
				columns ={columns2}
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
  }}			
  				pagination={this.state.pagination}

  				scroll={{x:2530}}	
				>

				</Table>
			</Card>
			<Card

			title="排序表格"
			> 
			<Table 
				bordered
				columns={columns3}
				dataSource = {this.state.dataSource3}
				scroll = {300} 
				onChange={(pagination, filters, sorter) => {
									//用来 定义分页，排序和赛选状态时出发
									this.setState({sortOrder:sorter.order})
									console.log(123)
								}}
			></Table>
			</Card>
			</div>

			)
	}
		//定义横向信息 dataIndex 的属性值对应 横向的信息
		componentDidMount(){
			// const dataSource = [
			// 			{
			// 				id: 0,
			// 				key:0,
			// 				username: "jeck",
			// 				sex: "男",
			// 				state: "1",
			// 				interest: "打球",
			// 				birthday: "2018-01-08",
			// 				adress: "北京昌平区",
			// 				time: "09:00"
			// 			},
			// 			{	
			// 				key:1,
			// 				id: 0,
			// 				username: "lk",
			// 				sex: "男",
			// 				state: "1",
			// 				interest: "打球",
			// 				birthday: "2018-01-08",
			// 				adress: "北京昌平区",
			// 				time: "09:00"
			// 			},
			// 			{	
			// 				key:2,
			// 				id: 0,
			// 				username: "ck",
			// 				sex: "男",
			// 				state: "1",
			// 				interest: "打球",
			// 				birthday: "2018-01-08",
			// 				adress: "北京昌平区",
			// 				time: "09:00"
			// 			}

			// ] 
			// this.setState({
			// 	dataSource
			// })
			// let that = this
		// axios.get("https://www.easy-mock.com/mock/5b7942577dee0d397d823125/lkapi/table/list")
		// .then((data) =>{
		// 	if(data.status===200){
		// 			that.setState({
		// 		dataSource1:data.data.result
		// 	})
		// 	}
		// })
		this.request()
				Axios.ajax({
 		url:"/list",

 		})
 	.then( ({data}) =>{
 		data.result.list.map((v,k) =>{
 		 			v.key = k+40
 		 		})
 		this.setState({
 			dataSource3: data.result.list
 		})
 	})
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
// 横向滚动
// 控制页面的滚动  240必须是数字不鞥是字符串   scroll={{y:240}}
// bug:每个宽度不一致了， 设置表头宽度
//  在横向混动的时候 x = 上面设置表头的总宽度之和加10 固定某一列用fixed：left/rigth/