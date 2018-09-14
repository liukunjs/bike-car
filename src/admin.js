import React from 'react'
import { Row,Col } from 'antd';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer'
import { connect } from 'react-redux'
import NavLeft from './components/NavLeft/NavLeft.jsx'
import './style/common.less'
import Home from "./pages/home/home"
import "./style/common.less"
export default class Admin extends React.Component{
    render(){
        return (
          <Row>
            <Col span="3">
                <NavLeft></NavLeft>
            </Col>
            <Col span="21" className="main">
                <Header></Header>
                   <div className="mian">
                         {this.props.children}
                   </div>
                <Footer></Footer>
            </Col>
          </Row>
        );
    }
}
