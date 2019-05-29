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
import htmlSource from './source'

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
    

    render() {
      return (
        <div className={ styles.AddProject } >
          <br/>
          <div className="formContainer">
            <Row>
                <input className={ styles.url } type="text" placeholder="请输入URL"/>
            </Row>
            <Row>
                <h1>数据渲染区域</h1>
            </Row>
            <Row>
                <div className={ styles.show } >
                    <iframe 
                        name="right" 
                        id="rightMain" 
                        src="http://www.gzcz.gov.cn/" 
                        frameBorder="no" 
                        scrolling="auto" 
                        width="100%" 
                        height="500px" 
                        // srcDoc={ htmlSource }
                        allowtransparency="true">

                    </iframe>
                </div>
            </Row>
            <Row>
                <Col span={3}><button className={ styles.btn }>渲染</button></Col>
                <Col span={3}><button className={ styles.btn }>审查</button></Col>
            </Row>
          </div>
        </div> 
      );
    }
}
