import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Input, Grid, Form } from '@alifd/next';
import styles from './index.module.scss';

const { Row } = Grid;
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
            <h3>添加项目</h3>
            <br/>
            <div className={ styles.FormContainer }>
              <Form value={this.state} onChange={this.formChange}>
                <FormItem required requiredMessage="必填" className={ styles.FormItem }>
                    <label  className={ styles.StylesLabel } htmlFor="">项目名称</label>
                    <Input
                        className={ styles.StylesInput }
                        name="account"
                        maxLength={200}
                        placeholder="必须为英文、数字、符号或其组合,不支持中文"
                        autoComplete="name"
                        autoFocus
                        trim
                    />
                </FormItem>
               
                <Row className="formItem">
                  <Form.Submit
                    type="primary"
                    validate
                    loading={this.state.loading}
                    onClick={this.handleSubmit}
                    className="submitBtn"
                  >
                    上 传
                  </Form.Submit>
                </Row>
              </Form>
            </div>
          </div>
        );
      }

}

