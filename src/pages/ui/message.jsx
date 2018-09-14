import React, { Component } from 'react';
import { Card , Button , message} from "antd"
class Message extends Component {
showMessage=(type) =>{
	message[type]("搞快点")
	
}

  render() {
    return (
      <div>
      		<Button type="primary" onClick={() =>this.showMessage("success")}>success</Button>
      		<Button type="primary" onClick={() =>this.showMessage("info")}>info</Button>
      		<Button type="primary" onClick={() =>this.showMessage("warning")}>warning</Button>
      		<Button type="primary" onClick={() =>this.showMessage("error")}>error</Button>
      		<Button type="primary" onClick={() =>this.showMessage("loading")}>loading</Button>
      </div>
    );
  }
}

export default Message;


