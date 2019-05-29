import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Button, Dialog, Message } from '@alifd/next';
import ContractTable from '../../components/ContractTable';
import CustomNotice from './components/CustomNotice';
import CreateContractForm from './components/CreateContractForm';
import styles from './index.module.scss';

export default class MyContract extends Component {
  static displayName = 'MyContract';
  // 构造方法
  constructor(props) {
    super(props);
    this.state = {
      // 首先设置对话框的属性为不可见
      createFormVisible: false,
    };
  }
  // 设置对话框的属性为可见状态
  showCreateForm = () => {
    this.setState({
      createFormVisible: true,
    });
  };
  // 隐藏对话框
  hideCreateForm = () => {
    this.setState({
      createFormVisible: false,
    });
  };
  // 添加成功后
  onCreateSubmitSuccess = () => {
    // 显示提示信息
    Message.success('新建成功');
    // 同时将对话框设置为不可见
    this.hideCreateForm();
  };
  // 当点击对话框的取消按钮后，设置为不可见
  onCreateSubmitCancel = () => {
    this.hideCreateForm();
  };

  render() {
    return (
      <IceContainer>
        <CustomNotice />
        <Button
          type="primary"
          className={styles.newContractButton}
          onClick={this.showCreateForm}
        >
          新建合同
        </Button>
        <div className={styles.tableHead}>
          <div className={styles.tableTitle}>我的合同</div>
        </div>
        <ContractTable enableFilter={false} />

        <Dialog
          title="新建合同"
          visible={this.state.createFormVisible}
          footer={false}
          onClose={this.hideCreateForm}
        >
          <CreateContractForm
            onSubmitSuccess={this.onCreateSubmitSuccess}
            onSubmitCancel={this.onCreateSubmitCancel}
          />
        </Dialog>
      </IceContainer>
    );
  }
}
