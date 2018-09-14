import React,{ Component } from "react"
import { Card , Button ,Modal } from "antd"
	
export default class Modals extends Component {
	state = {
		showmodal1:false,
		showmodal2:false,
		showmodal3:false,
		showmodal4:false
	}
	bandleOpen=(type) =>{
		this.setState({
			[type]:true
		})
	}
	handleConfim=(type) =>{
		Modal[type]({
			title:"确认？",
			content:"你确认了React",
			onOk(){
				console.log("ok")
			},
			onCencel(){
				console.log("can")
			}
		})
	}
	render(){
		return (
			<div className="modal">
				<Card title="基础模态框" >
					<Button type="primary" onClick={() =>this.bandleOpen("showmodal1")}>open</Button>
					<Button   type="primary" onClick={() =>this.bandleOpen("showmodal2")}>自定义页脚</Button>
					<Button  type="primary" onClick={() =>this.bandleOpen("showmodal3")}>顶部20px弹框</Button>
					<Button  type="primary" onClick={() =>this.bandleOpen("showmodal4")}>水平居中弹框</Button>
				</Card> 
				<Card title="信息确认框">
					<Button type="primary" onClick={() =>this.handleConfim("confirm")}>confirm</Button>
					<Button type="primary" onClick={() =>this.handleConfim("info")}>info</Button>
					<Button type="primary" onClick={() =>this.handleConfim("success")}>success</Button>
					<Button type="primary" onClick={() =>this.handleConfim("warning")}>warning</Button>
				</Card>
				<Modal 
				titel = "React"
				visible ={this.state.showmodal1}
				onCancel={
					() =>{
					this.setState({
						showmodal1:false
					})
					}
				}
				onOK={
					() =>{
					this.setState({
						showmodal1:false
					})
					}
				}
				>
				<p> p1</p>
				</Modal>
						<Modal 
					
				titel = "React"
				visible ={this.state.showmodal2}
				onCancel={
					() =>{
					this.setState({
						showmodal2:false
					})
					}
				}
				>
				<p> p2</p>
				</Modal>
					<Modal 
							
				titel = "React"
				visible ={this.state.showmodal3}
				onCancel={
					() =>{
					this.setState({
						showmodal3:false
					})
					}
				}
				>
				<p> p3</p>
				</Modal>
						<Modal 
						
				titel = "React"
				visible ={this.state.showmodal4}
				onCancel={
					() =>{
					this.setState({
						showmodal4:false
					})
					}
				}
				>
				<p> p4</p>
				</Modal>
			</div>

			)
	}
}
	{/*titel:定义模态框的标题,
				visible定时是否出现
				onCancel定义取消后的事件
				p 定义内容
				*/}	
//第一种是在 model里面定义
//第二种是在函数里面定义
