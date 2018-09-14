import React,{ Component } from "react"
import { Card , Button , Radio} from "antd"
export default class Buttons extends Component {
	constructor(props){
		super(props)
		this.state={
			loading:true,
			size:"default"
		}
	}
	handleCloseLoading=() =>{
		let sta = this.state.loading
		this.setState({
			loading:!sta
		})
	}
	handleChange=(e) =>{
		this.setState({
			size:e.target.value
		})
	}
	render(){
		return (
			<div className="button" style={{height:"cacl(75vh)",overFlow:"hidden"}}>
			{/*Card是名片 title是卡片标题 type定义按钮的类型 disabled*/}
			<Card title="基础按钮" className="card-wrap">
				<Button type="primary">button1</Button>
				<Button>button2</Button>
				<Button type="dashed">button3</Button>
				<Button type="danger">button4</Button>
				<Button disable>button5</Button>
			</Card> 
			<Card title="图形按钮">
		{/* 通过icon 来使用图形 shape定义图形外形*/}
				<Button icon ="plus" style={{marginRight:"20px"}}>创建</Button>
				<Button icon="edit" style={{marginRight:"20px"}}>编辑</Button>
				<Button icon="delete" style={{marginRight:"20px"}}>删除</Button>
				<Button icon="search" shape="circle" style={{marginRight:"40px"}}>搜素</Button>
				<Button icon="search" type="primary" style={{marginRight:"20px"}}></Button>
				<Button icon="download" type="primary" style={{marginRight:"20px"}}></Button>
			</Card>
			{/* 通过loading=true 来确定是否旋转 */}
			<Card title="loading按钮">
				<Button type="primary" loading={this.state.loading}></Button>
				<Button type="primary" shape="circle" loading={this.state.loading}></Button>
				<Button loading={this.state.loading}>点击加载</Button>
				<Button loading={this.state.loading} shape="circle"></Button>
				<Button loading={this.state.loading} type="danger" shape="circle"></Button>
				<Button type="primary" onClick={this.handleCloseLoading}></Button>
			</Card>
			<Card title="按钮组">
				<Button.Group>
					<Button type="primary" icon="left">返回</Button>
					<Button type="danger" icon="right">前进</Button>
				</Button.Group>
			</Card>
			<Card title="按钮尺寸" size={this.state.size}>
				<Radio.Group onChange={this.handleChange}>
					<Radio value="small">小</Radio>
					<Radio value="default">中</Radio>
					<Radio value="large">大</Radio>
				</Radio.Group>
				<Button type="primary" size={this.state.size}>button1</Button>
				<Button type="danger" size={this.state.size}>button2</Button>
				<Button loading={true} icon="plus" type="danger" size={this.state.size}></Button>
				<Button shape="circle" loading={true} size={this.state.size} type="dashed"></Button>
			</Card>
			</div>
			)
	}
}