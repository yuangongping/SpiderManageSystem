import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import ContractTable from '../../components/ContractTable';

export default class ContractSearch extends Component {
  static displayName = 'ContractSearch';
  
  // 属性类型
  static propTypes = {};
  // 默认类型
  static defaultProps = {};
  // 构造方法
  constructor(props) {
    // 继承父类，获得this对象
    super(props);
    // 属性设置
    this.state = {
      searchQuery: {},
    };
  }
  // 为检索属性赋新值
  onSearch = (searchQuery) => {
    this.setState({
      searchQuery,
    });
  }
  // 模板渲染
  render() {
    // 获取属性中的查询字典
    const { searchQuery } = this.state;
    
    return (
      <IceContainer>
        <ContractTable searchQuery={searchQuery} />
      </IceContainer>
    );
  }
}
