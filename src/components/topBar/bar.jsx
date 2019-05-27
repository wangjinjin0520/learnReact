import React from 'react';
import './bar.css'
import {Menu, Icon, Avatar,  Modal, Input, Form, Button} from 'antd';
// import FormItem from "antd/es/form/FormItem";

const SubMenu = Menu.SubMenu;
// const {FormItem} = Form;
const MenuItemGroup = Menu.ItemGroup;

class TopBar extends React.Component {
  state = {
    infoVisible: false,
    pwsVisible: false,
    oldPwd:'',
    newPwd:'',
    confirmPwd:'',
  };


  render() {
    return (
      <div className="top-bar-component">
        <div className="logo-box">
          <Icon type="smile"/> JINJIN
        </div>
        <div className="icon-box">
          <Menu mode='horizontal' className="flex-center">
            <SubMenu title={<Avatar className="center-avatar" size="large" icon="user"/>}>
              <MenuItemGroup>
                <Menu.Item key="1">
                  个人信息
                </Menu.Item>
                <Menu.Item
                  key="2"
                  onClick={() => {
                  this.setState({infoVisible: true})
                }}>修改密码</Menu.Item>
                <Menu.Item key="3">退出系统</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
          </Menu>
        </div>


      </div>
    )
  }

}

const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(TopBar);
export default WrappedNormalLoginForm;
