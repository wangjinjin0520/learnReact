import React from 'react';
import {Form, Icon, Input, Modal} from "antd";


export default class MenuBar extends React.Component {

    render() {
        return (
          <div>
              <Modal
                visible={this.state.infoVisible}
                onOk={(e) => {
                    this.handleSubmit(e);
                }}
                onCancel={() => {
                    this.setState({infoVisible: false})
                }}
                title="修改密码"
              >
                  <Form className="login-form">
                      <Form.Item label="旧密码">
                          {this.state.oldPwd = getFieldDecorator('oldPwd', {
                              rules: [{ required: true, message: 'Please input your Password!' }],
                          })(
                            <Input
                              prefix={<Icon type="lock"/>}
                              type="password"
                              placeholder="Password"
                            />,
                          )}
                      </Form.Item>
                      <Form.Item label="新密码">
                          {this.state.newPwd = getFieldDecorator('newPwd', {
                              rules: [{ required: true, message: 'Please input your Password!',min:8 }],
                          })(
                            <Input
                              prefix={<Icon type="lock"/>}
                              type="password"
                              placeholder="Password"
                            />,
                          )}
                      </Form.Item>
                      <Form.Item label="确认密码">
                          {this.state.confirmPwd = getFieldDecorator('confirmPwd', {
                              rules: [{ required: true, message: 'Please input your Password!',min:8 }],
                          })(
                            <Input
                              prefix={<Icon type="lock"  />}
                              type="password"
                              placeholder="Password"
                            />,
                          )}
                      </Form.Item>
                  </Form>
              </Modal>
          </div>
        );
    }
}

