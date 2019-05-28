import React from 'react';
import {Form, Icon, Input, Modal} from "antd";


class PwdModify extends React.Component {
  state = {
    oldPwd: '',
    newPwd: '',
    confirmPwd: '',
  };

  isRepassEqPass=(rule, value, callback)=>{
    console.log(rule, value, callback);
    callback()
  }

  handleSubmit = () => {
    const {form: {getFieldValue, validateFields}} = this.props;
    validateFields((error) => {
      if (!error) {
        const params = getFieldValue(['newPwd', 'confirmPwd']);
        if (params[0] !== params[1]) {
          this.setState({oldPwd: ''});
          this.setState({newPwd: ''});
          this.setState({confirmPwd: ''});
        }
      }
    })
  };

  handleCloseModal = () => {
    this.props.changeVisible(false);
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div>
        <Modal
          visible={this.props.infoVisible}
          onOk={this.handleSubmit}
          onCancel={this.handleCloseModal}
          title="修改密码"
        >
          <Form className="login-form">
            <Form.Item label="旧密码">
              {this.state.oldPwd = getFieldDecorator('oldPwd', {
                rules: [{required: true, message: 'Please input your Password!'}],
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
                rules: [{required: true, message: 'Please input your Password!', min: 8, validator:this.isRepassEqPass}],
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
                rules: [{required: true, message: 'Please input your Password!', min: 8}],
              })(
                <Input
                  prefix={<Icon type="lock"/>}
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

const WrappedNormalLoginForm = Form.create({name: 'password modify'})(PwdModify);
export default WrappedNormalLoginForm;
