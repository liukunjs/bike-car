import Jsonp from "jsonp"
import axios from "axios"
import { Modal } from "antd"
/*定义 Axios 封住函数  
  ****static 静态方法jsonp为跨域的方法
  ****ajax   为axios的方法
  **/
export default class Axios {
	static jsonp (options){
		return new Promise ((resolve,reject)=>{
			//jsonp的三个参数,第一个为url,第二个是，带的数据回调函数，第三是请求的回调函数
			Jsonp(options.url,{
				param: "callback"
			},(err,response)=>{
				if(response.status="success"){
					resolve(response)
				}else {
					reject(response.message)
				}
			})
		})
	}
	//封装axios方法
	static ajax (options){
		//定义全局的网络加载延迟特效
		let loading;
		//有的时候我们在请求的时候不需要进行延迟显示，则定义开关如果 options.data里面的isShowLoading=false是关闭
		//此时调用原生的方法实现
		if(options.data&&options.data.isShowLoading!==false){
			loading = document.getElementById("ajaxLoading")
			loading.style.display="block"
		}
		let baseApi =  "https://www.easy-mock.com/mock/5b7942577dee0d397d823125/lkapi"
		return new Promise ((resolve,reject) =>{
			axios({
				//地址
				url:options.url,
				//方式
				method:"get",
				//公共地址
				baseURL:baseApi,
				//请求时间
				time:5000,
				//如果options的data存在就将params导入否则是0
				params:(options.data&&options.data.params)||""
			}).then((response)=> {
				console.log(response)
				//当请求成功时执行回调函数,并关闭延迟特效
				if(options.data&&options.data.isShowLoading!==false){
					let loading = document.getElementById("ajaxLoading")
					loading.style.display="none"
				}
				if(response.status=="200"){
					resolve(response)
				}else{
					console.log(123)
				
					reject(response.data)
				}
			},()=>{
					Modal.info({
						tittle:'提示',
						content: "网络错误"
					})	
			})
		})
	}
}