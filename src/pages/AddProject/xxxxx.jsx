import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Link } from 'react-router-dom';
import { Input, Button, Grid, Form, Upload } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import IceIcon from '@icedesign/foundation-symbol';

import styles from './index.module.scss';
const { Row, Col } = Grid;
const FormItem = Form.Item;

@withRouter
export default class AddProject extends Component {
    static displayName = 'AddProject';
    static propTypes = {};

    static defaultProps = {};
  
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
      };
    }
    componentDidMount(){
      var input = ReactDOM.findDOMNode(this.refs.customAttributes)
      input.setAttribute('webkitdirectory', '')
      input.setAttribute('directory', '')
      input.setAttribute('multiple', '')
    }
    onDrop(fileList) {
        console.log('1111111111111111111111', fileList);
    }
    onChange(info){
      console.log('1111111111111111111111', info);

    }


    render() {
      return (
        <div className={ styles.AddProject } >
          <h3>添加项目</h3>
          <br/>
          <div className="formContainer">
            <Form value={this.state} onChange={this.formChange} >
              <Row>
                <Col span={1} ><label htmlFor="">项目名称</label></Col>
                <Col fixedSpan="25">
                  <FormItem required requiredMessage="必填" >
                    <Input
                        name="account"
                        maxLength={100}
                        placeholder="项目名称，英文，数字、符号组合"
                        autoComplete="name"
                        autoFocus
                        trim
                      />  
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={1}><label htmlFor="">开发对象</label></Col>
                <Col fixedSpan="25">
                  <FormItem required requiredMessage="必填" >
                    <Input
                        name="account"
                        maxLength={100}
                        placeholder="项目名称，英文，数字、符号组合"
                        autoComplete="name"
                        autoFocus
                        trim
                      />  
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={1}><label htmlFor="">应用对象</label></Col>
                <Col fixedSpan="25">
                  <FormItem required requiredMessage="必填" >
                    <Input
                        name="account"
                        maxLength={100}
                        placeholder="项目名称，英文，数字、符号组合"
                        autoComplete="name"
                        autoFocus
                        trim
                      />  
                  </FormItem>
                </Col>
              </Row>
              <Row>
               <Col span={1}><label htmlFor="">应用项目</label></Col>
               <Col fixedSpan="25" >
                   <FormItem required requiredMessage="必填" >
                     <Input
                        name="account"
                        maxLength={100}
                        placeholder="项目名称，英文，数字、符号组合"
                        autoComplete="name"
                        autoFocus
                        trim
                      />  
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={1}><label htmlFor="">文件选择</label></Col>
                <Col fixedSpan="25" >
                  <FormItem required requiredMessage="必填" >
                    <input type='file' id='allflie'  ref='customAttributes' />
                  </FormItem>
                </Col>
              </Row>
              <Row justify='start' >
                 <Col span={1} >
                   <Form.Submit
                      type="primary"
                      validate
                      loading={this.state.loading}
                      onClick={this.handleSubmit}
                      className="submitBtn"
                    >
                      上传
                    </Form.Submit>
                  </Col>
              </Row>
            </Form>
          </div>
        </div> 
      );
    }

}
