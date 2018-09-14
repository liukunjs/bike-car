import React,{ Component } from "react"
import "./home.less"
//导出Home
 export default class Home extends Component {
 	//渲染home视图
 	render(){
 		return (
 			<div className="home">
 				<div className="word">
 					欢迎来到ICKT后台管理系统
 				</div>
 			</div>
 		)
 	}
 }
