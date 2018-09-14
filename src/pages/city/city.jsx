import React,{ Component } from "react"
import Axios from '../../axios'
import Utils from "../../utils/utils"
import { Row , Card , Button , Table , Form , Select , Modal , Message} from "antd"
 let FormItem = Form.Item
export default class City extends Component {
	state = {
		list:[],
		pagination:"",
        showModal: false
	}
	//定义请求的分页
	params = {
		page:1
	}
    handleSubmit=() => {
        let cityInfo = this.cityForm.props.form.getFieldsValue();
        this.setState({
            showModal:false
        })
       let  a  =  {
                "id": 1,
                "name": "襄阳市",
                "model": 2,
                "op_model": 2,
                "franchisee_id": 77,
                "franchisee_name": "松子自营",
                "city_admins": [
                  {
                    "user_name": "刘坤",
                    "user_id": 10001
                  }
                ],
                "open_time": "1976-11-10 22:27:13",
                "sys_user_name": "姚刚",
                "update_time": 1520476737000}
               let  list = this.state.list
               list.unshift(a)
        this.setState({
            list
        })
    }
	componentDidMount(){
		this.request()
	}
	request=() =>{
		let that = this
		Axios.ajax({
			url:"/opencity",
			data:{
				params:{
					page:this.params.page
				}
			}
		}).then(({data}) =>{
			let list = data.result.item_list.map((v,k) =>{
				v.key = k
				return v;
			})
		that.setState({
			list,
			// 定义分页信息 
			// 第二个是点击分页的回调函数，更改页码，并且从新请求
			pagination:Utils.pagination(data,(current) =>{
				that.params.page = current;
				that.request()
			})
		},() =>{
			})
		})
	}
    opencity=() =>{
        this.setState({
            showModal:true
        })
    }
	render(){
		// 定义表格的表头
	const columns = [
				{
					title:"城市ID",
					dataIndex:"id"
				},
				{
					title:"城市名字",
					dataIndex:"name"
				},
				{
					title: "用车模式",
					dataIndex: 'mode',
					//定义字典如果是1就是停车点
					render(mode){
						return mode===1?"停车点":"禁停区"
					}
				},
				{
					title: "运营模式",
					dataIndex: "op_mode",
					render(op_mode){
						return op_mode===1?"自营":"加盟"
					}
				},
				{
					title: "授权加盟",
					dataIndex: "franchisee_name"
				},
				{
					title: "城市管理员",
					dataIndex: "city_admins",
					//应为这里返回的是一个对象，所以的转化处理,并且之获取名字
					render(arr){
						return arr.map((item) =>{
							return item.user_name
						}).join(",")

					}
				},
				{
					title:"城市开通时间",
					dataIndex:"open_time"
				},
				{
					title: "操作时间",
					dataIndex: "update_time",
					render:Utils.formateDate
				},
				{
					title: "操作人",
					dataIndex: 'sys_user_name'
				}
	]
		return(
				<div className="city">
                <Button type="primary" onClick={this.opencity}>开通城市</Button>
					<Card 
						title="城市管理"
					>
					<Table 
					bordered
					columns = { columns }
					dataSource = { this.state.list }
					pagination = { this.state.pagination }
					></Table>
					</Card>	
                    <Modal 
                    title = "卡通城市"
                    visible = { this.state.showModal }
                    onCancel ={() =>{
                        this.setState({
                            showModal:false,

                        })
                    }}
                    onOk = {
                        //确认后执行的任务
                        this.handleSubmit
                    }
                    >
                    < OpencityForm  wrappedComponentRef={(inst) =>{this.cityForm = inst;}}/>
                    </Modal>
				</div>
			)
	}
} 
class OpencityForm extends Component {
    // 
    render(){
        // 通过 formItemlay 定义栅格系统
        const formItemLayout = {
            labelCol:{
                span: 5
            },
            wrapperCol:{
                span:10
            }
        }
        // 定义每个数据的连接实现双向绑定
        const   { getFieldDecorator } = this.props.form;
        return (
            <Form layout="horizontal">
                <FormItem label="选择城市" {...formItemLayout}>
                        {
                            getFieldDecorator("city_id",{
                                initialValue: "1"
                            })(
                                <Select>
                                    <Option value="1">北京</Option>
                                    <Option value="2">天津</Option>
                                </Select>
                            )
                        }
                </FormItem>
                <FormItem label="运营模式" {...formItemLayout}>
                       {
                         getFieldDecorator("op_mode",{
                            initialValue:1
                         })(
                            <Select >
                                <Option value="">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                            </Select>
                         )
                       }
                </FormItem>
                <FormItem label="用车模式" {...formItemLayout}>
                     {
                        getFieldDecorator("use_mode",{initalValue:1})(
                            <Select>
                                    <Option value="5">禁止停</Option>
                                    <Option value="6">骑行</Option>
                            </Select>   
                            )
                     }
                </FormItem>
            </Form>

            )
    }
}
//表单：创建实例化，然公form.create 实现表单的数据绑定
 OpencityForm = Form.create({})(OpencityForm);
 // 表单的双向绑定
 // 第一步是 class 定义表单
                        //  const   { getFieldDecorator } = this.props.form;
 // 第二部是  定义 getFieldDecorator = this.props.from
 // 第三步 在每一个formItem里面定义  {
                       //   getFieldDecorator("op_mode",{
                       //      initialValue:1
                       //   })(
                       //      <Select >
                       //          <Option value="">全部</Option>
                       //          <Option value="1">北京市</Option>
                       //          <Option value="2">天津市</Option>
                       //      </Select>
                       //   )
                       // }  
                       // 
// 第四部在定义的Form组件里面设置数据   
// OpencityForm  wrappedComponentRef={(inst) =>{this.cityForm = inst;}}/>
        
// 第五步 通过 
// let cityInfo = this.cityForm.props.form.getFieldsValue();获取数据           