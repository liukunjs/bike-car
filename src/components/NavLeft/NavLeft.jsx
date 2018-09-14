import React,{ Component } from "react"
import MemuConfig from "../../config/menuConfig.js"
import { Menu , Icon} from "antd"
import { NavLink } from "react-router-dom"
import "./NavLeft.less"
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class NavLeft extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
//  在componentWillMount请求数据
    componentWillMount(){
        const menuTreeNode = this.renderMenu(MemuConfig)
        this.setState({
            menuTreeNode
        })
    }
    //定义渲染函数
    renderMenu=(data) => {
        //map数组
        return data.map((item) =>{
        //使用递归思想如果有子节点就不停的遍历,
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
            
                    </SubMenu>
                    )
            }
            return <Menu.Item title={item.title} key={item.key}>
                   <NavLink to={item.key}>
                         {item.title}
                   </NavLink>
            </Menu.Item>
        })
    }
    render(){
        return (
            <div className="NavLeft">
                <div className="logo">
                    <img src="/favicon.ico"/>
                    <h1>ICKT</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
             </div>
            )
   
    }
}
