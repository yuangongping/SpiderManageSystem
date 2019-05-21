/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from '@alifd/next';
import CustomForm from '../CustomForm';

const formConfig = [

  {
    label: '项目说明',
    component: 'Input',
    componentProps: {
      placeholder: '请输入项目名称',
    },
    formBinderProps: {
      name: 'name',
    },
  },
  {
    label: '应用项目',
    component: 'Select',
    componentProps: {
      placeholder: '请选择',
      dataSource: [
        { label: '杭州xxx科技有限公司', value: 'option1' },
        { label: '上海xxx科技有限公司', value: 'option2' },
      ],
    },
    formBinderProps: {
      name: 'otherCompany',
    },
  },
  {
    label: '开发对象',
    component: 'Select',
    componentProps: {
      placeholder: '请选择',
      dataSource: [
        { label: '淘小宝', value: '淘小宝' },
        { label: '淘大宝', value: '淘大宝' },
      ],
    },
    formBinderProps: {
      name: 'principal',
    },
  },
  {
    label: '创建时间',
    component: 'RangePicker',
    advanced: true,
    componentProps: {
      placeholder: '请选择日期',
    },
    formBinderProps: {
      name: 'createTime',
    },
  },
  {
    label: '项目状态',
    component: 'Select',
    advanced: true,
    componentProps: {
      placeholder: '请选择',
      dataSource: [
        { value: 'draft', label: '起草中' },
        { value: 'approval', label: '审批中' },
        { value: 'effective', label: '待生效' },
        { value: 'abort', label: '终止' },
      ],
    },
    formBinderProps: {
      name: 'state',
    },
  },
  {
    label: '项目类型',
    component: 'Select',
    advanced: true,
    componentProps: {
      placeholder: '请选择',
      dataSource: [
        { label: '主项目', value: 'primary' },
        { label: '变更项目', value: 'change' },
      ],
    },
    formBinderProps: {
      name: 'type',
    },
  },
  {
    label: '查询我批准的项目',
    component: 'Checkbox',
    advanced: true,
    componentProps: {},
    formBinderProps: {
      name: 'checkbox',
    },
  },
];

export default class SearchFilter extends Component {
  static displayName = 'SearchFilter';

  static propTypes = {
    value: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onReset: PropTypes.func,
  };

  static defaultProps = {
    onChange: () => {},
    onSubmit: () => {},
    onReset: () => {},
  }

  state = {
    showAdvancedFields: false,
  };

  /**
   * 提交回调函数
   */
  handleSubmit = (errors, value) => {
    if (errors) {
      console.log({ errors });
      return;
    }
    this.props.onSubmit(value);
  };

  /**
   * 高级搜索
   */
  handleAdvancedSearch = () => {
    const { showAdvancedFields } = this.state;
    this.setState({
      showAdvancedFields: !showAdvancedFields,
    });
  };

  /**
   * 渲染按钮
   */
  renderExtraContent = () => {
    return (
      <Button text style={styles.extraContent} onClick={this.handleAdvancedSearch}>
        高级搜索{' '}
        <Icon
          size="xs"
          type={this.state.showAdvancedFields ? 'arrow-up' : 'arrow-down'}
        />
      </Button>
    );
  };

  render() {
    const { value, onChange, onReset } = this.props;
    const { showAdvancedFields } = this.state;

    const config = showAdvancedFields ? formConfig : (
      formConfig.filter(item => !item.advanced)
    );

    return (
      <CustomForm
        config={config}
        value={value}
        formChange={onChange}
        handleSubmit={this.handleSubmit}
        handleReset={onReset}
        extraContent={this.renderExtraContent()}
      />
    );
  }
}

const styles = {
  extraContent: {
    position: 'absolute',
    right: '0',
    bottom: '0',
  },
};
