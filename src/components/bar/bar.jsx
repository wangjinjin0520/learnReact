import React from 'react';
import './bar.less'
import {Menu, Icon, Avatar, Row, Col, Modal} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class Bar extends React.Component {
  state = {
    current: 'mail',
    infoVisible: false,
    pwsVisible: false
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div className="bar-component">
        <Menu className="menu" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Row>
            <Col span={4} offset={1}>
              <Menu.Item key="1" className="">
                <Icon type="smile"/> JINJIN
              </Menu.Item>
            </Col>
            <Col span={15}  />
            <Col span={4}>
              <Menu mode='horizontal'>
                <SubMenu title={
                  <div className="flex-center">
                    <div><Avatar size="large" icon="user"/></div>
                  </div>
                } className="avatar-menu">
                  <MenuItemGroup>
                    <Menu.Item key="2-1" onClick={() => {
                      this.setState({infoVisible: true})
                    }}>个人信息</Menu.Item>
                    <Menu.Item key="2-2">修改密码</Menu.Item>
                    <Menu.Item key="2-3">退出系统</Menu.Item>
                  </MenuItemGroup>
                </SubMenu>
              </Menu>
            </Col>
          </Row>
        </Menu>
        <Modal visible={this.state.infoVisible} onOk={() => {
          this.setState({infoVisible: false})
        }} onCancel={() => {
          this.setState({infoVisible: false})
        }} title="用户信息">
          <h2>用户信息</h2>
        </Modal>
      </div>


    )
  }
}