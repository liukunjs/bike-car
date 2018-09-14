import React,{ Component } from "react"
import { Row , Col } from "antd"
import "./index.less"
import Utils from "../../utils/utils"
import Axios from "../../axios"
export default  class Header extends Component {
	constructor(props){
		super(props)
		this.state={
			username:"liukun",
			time:"",
			weatherImg:'',
			weather:""
		}
	}
	getWeatherAPIDate(){
		//定义城市和 百度天气的API
		let city = "北京" 
		let options = {
			url: 'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
		}
		let that = this
		//调用参数，并执行跨域请求
		Axios.jsonp(options)
		.then((res) =>{
			if(!res.error){
				that.setState({
					weatherImg:res.results[0].weather_data[0].dayPictureUrl,
					weather:res.results[0].weather_data[0].weather
				})
			}
		})
	}
	componentDidMount(){
		//定义事件的函数
			setInterval(() =>{
			let time = Utils.formateDate()
			this.setState({
				time : Utils.formateDate()
			})
			},1000)
		this.getWeatherAPIDate()
	}
	render(){
		return (
				<div className="Header">
					<Row  className="head" >
						<Col span="22"  className="welc">欢迎 {this.state.username}</Col>
						<Col className="leave" span="2"><a href="">推出</a></Col>
					</Row>
					<div className="bar"></div>
					<Row className="info">
						<Col className="type" span="19" 
						><span>首页</span><span className="sig"></span></Col>
						<Col className="day" span="3">
							{this.state.time}
						</Col>
						<Col 
							className="wether"
						 span ="2">
						 <img src={this.state.weatherImg} className="weatherImg"/>
						 <span className="weather">{this.state.weather}</span></Col>
					</Row>
					<div></div>
				</div>
			)
	}

}
