/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Input, Button, Grid, Message } from '@alifd/next';
import request from '../../utils/_http';

import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import IceIcon from '@icedesign/foundation-symbol';

const { Row, Col } = Grid;

@withRouter
class UserRegister extends Component {
  static displayName = 'UserRegister';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        name: '',
        email: '',
        passwd: '',
        rePasswd: '',
      },
    };
  }

  checkPasswd = (rule, values, callback) => {
    if (!values) {
      callback('请输入正确的密码');
    } else if (values.length < 4) {
      callback('密码必须大于8位');
    } else if (values.length > 16) {
      callback('密码必须小于16位');
    } else {
      callback();
    }
  };

  checkPasswd2 = (rule, values, callback, stateValues) => {
    if (!values) {
      callback('请输入正确的密码');
    } else if (values && values !== stateValues.passwd) {
      callback('两次输入密码不一致');
    } else {
      callback();
    }
  };

  formChange = (value) => {
    this.setState({
      value,
    });
  };

  register = () => {
    // 创建表单
    const formData = new FormData()
    this.validateAllFormField()
      .then(e => {
        formData.append('username', e.name)
        formData.append('password', e.passwd)
        formData.append('email', e.email)
        if (e) {
          this.setState({
            visible: true
          })
          this.addDataFn(formData)
        }
      })
  }

   // 添加的请求函数
  addDataFn = (params) => {
  	request.post(
  		'register',
  		params
  	)
  		.then(e => {
  		  if (e && e.code === 200 && e.status === 'success') {
          Message.success('注册成功')
  				const { history } = this.props
          history.push('/user/login')
  			} else {
          Message.success('error')
  			}
  	  }, error => {
        //this.loadingClose()
        Message.success('error')
  	  })
  }

  // 验证触发函数
  validateAllFormField = () => {
    return new Promise((resolve, reject) => {
      this.refs.form.validateFields((errors, values) => {
        if (!errors) {
          resolve(values)
        } else {
          reject(errors)
        }
      })
    })
  }

  render() {
    return (
      <div className="user-register">
        <div className="formContainer">
          <h4 className="formTitle">注 册</h4>
          <IceFormBinderWrapper
            value={this.state.value}
            onChange={this.formChange}
            ref="form"
          >
            <div className="formItems">
              <Row className="formItem">
                <Col className="formItemCol">
                  <IceIcon type="person" size="small" className="inputIcon" />
                  <IceFormBinder
                    name="name"
                    required
                    message="请输入正确的用户名"
                  >
                    <Input className="next-input-single" size="large" placeholder="用户名" />
                  </IceFormBinder>
                </Col>
                <Col>
                  <IceFormError name="name" />
                </Col>
              </Row>

              <Row className="formItem">
                <Col className="formItemCol">
                  <IceIcon type="mail" size="small" className="inputIcon" />
                  <IceFormBinder
                    type="email"
                    name="email"
                    required
                    message="请输入正确的邮箱"
                  >
                    <Input className="next-input-single" size="large" maxLength={20} placeholder="邮箱" />
                  </IceFormBinder>
                </Col>
                <Col>
                  <IceFormError name="email" />
                </Col>
              </Row>

              <Row className="formItem">
                <Col className="formItemCol">
                  <IceIcon type="lock" size="small" className="inputIcon" />
                  <IceFormBinder
                    name="passwd"
                    required
                    validator={this.checkPasswd}
                  >
                    <Input
                      className="next-input-single"
                      htmlType="password"
                      size="large"
                      placeholder="至少8位密码"
                    />
                  </IceFormBinder>
                </Col>
                <Col>
                  <IceFormError name="passwd" />
                </Col>
              </Row>

              <Row className="formItem">
                <Col className="formItemCol">
                  <IceIcon type="lock" size="small" className="inputIcon" />
                  <IceFormBinder
                    name="rePasswd"
                    required
                    validator={(rule, values, callback) =>
                      this.checkPasswd2(
                        rule,
                        values,
                        callback,
                        this.state.value
                      )
                    }
                  >
                    <Input
                      className="next-input-single"
                      htmlType="password"
                      size="large"
                      placeholder="确认密码"
                    />
                  </IceFormBinder>
                </Col>
                <Col>
                  <IceFormError name="rePasswd" />
                </Col>
              </Row>

              <Row className="formItem">
                <Button
                  type="primary"
                  onClick={this.register}
                  className="submitBtn"
                >
                  注 册
                </Button>
              </Row>

              <Row className="tips">
                <Link to="/user/login" className="tips-text">
                  使用已有账户登录
                </Link>
              </Row>
            </div>
          </IceFormBinderWrapper>
        </div>
      </div>
    );
  }
}

export default UserRegister;
