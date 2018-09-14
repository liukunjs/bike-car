import React,{Component} from "react"
import { Card ,Row , Col , Modal} from "antd"
export default class Gellery extends Component {
		state={
			visible:false,
			currentImg:""
		}
	openGallery=(a) =>{
		this.setState({
			visible:true,
			currentImg:"/gallery/"+a
		})
	}
	render(){
		//一行5列的图片所以得定5个数组在套数组
		const  imgs = [
				["1.png","2.png","3.png","4.png","5.png"],
				["6.png","7.png","8.png","9.png","10.png"],
				["11.png","12.png","13.png","14.png","15.png"],
				["16.png","17.png","18.png","19.png","20.png"],
				["21.png","22.png","23.png","24.png","25.png"]

		]
		//定义每列图片的dom,Card.Meta定义图片信息,cover定内容图片
		const imglist = imgs.map((item) =>{
				return item.map((value) =>
					<Card 
					style={{marginBottom:10}}
					cover={ <img src={"/gallery/"+value} onClick={() =>{this.openGallery(value)}} />}
					>
					<Card.Meta
						title="react-Amdin"
						decripttion="i love beautiful"
					/>
					</Card>
				)		
		})
		return (
				<div className="img" style={{height:" calc(78vh)",overflow:"auto"}}>
					<Row >
					<Col md={5}>
						{imglist[0]}
					</Col>
					<Col md={5}>
						{imglist[1]}
					</Col>
					<Col md={5}>
						{imglist[2]}
					</Col>
					<Col md={5}>
						{imglist[3]}
					</Col>
					<Col md={4}>
						{imglist[4]}
					</Col>
				</Row>
				<Modal 
				height={800}
				visible={this.state.visible}
				title="图片画廊"
				footer={null}
				onCancel={() =>
					this.setState({
						visible:false
					})}
				>
				{ <img src={this.state.currentImg} style={{width:"100%"}}/>}
				</Modal>

				</div>
			)
	}
}
