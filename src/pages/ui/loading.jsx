import React, { Component } from 'react';
import { Card , Button , Spin ,Icon ,Alert} from "antd"
class Loading extends Component {
  render() {
  	const icon = <Icon type="loading" style={{fontSize:"24px"}}></Icon>
  	const iconLoading =<Icon type="loading" style={{fontSize:"24px"}}></Icon>
    return (
      <div>
      	<Card title="spin用法">
      		<Spin size="small" style={{margin:20}}></Spin>
      		<Spin size="large" style={{margin:20}}></Spin>
      		<Spin indicator = {icon} style={{margin:20}} size="large">aaa</Spin>
      	</Card>
      	       <Card title="内容遮罩" className="card-wrap">
                    <Alert
                        message="React"
                        description="欢迎来到React高级实战课程"
                        type="info"
                        style={{ marginBottom: 10 }}
                    />
                    <Spin>
                        <Alert
                            message="React"
                            description="欢迎来到React高级实战课程"
                            type="warning"
                            style={{ marginBottom: 10 }}
                        />
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert
                            message="React"
                            description="欢迎来到React高级实战课程"
                            type="warning"
                            style={{ marginBottom: 10 }}
                        />
                    </Spin>
                    <Spin indicator={iconLoading}>
                        <Alert
                            message="React"
                            description="欢迎来到React高级实战课程"
                            type="warning"
                        />
                    </Spin>
                </Card>
      </div>
    );
  }
}

export default Loading;
//spin是小的旋转图标
// 而想换这个小的旋转图标使用 indicator 引入Icon 组件
//同时是span里面可以包裹Alert 而显示是Alert里面有旋转的span
//Alert message是定义在头部，description 是描描述的中间内容值
//type 有四种形式