import React, { Component } from 'react';
import cloneDeep from 'lodash.clonedeep';
import PropTypes from 'prop-types';
import { Table, Pagination, Button, Message } from '@alifd/next';
import SearchFilter from './SearchFilter';
import styles from './index.module.scss';

// 查询关键字初始字典
const defaultSearchQuery = {
  id: '',
  archiveId: '',
  applyCode: '',
  name: '',
  otherCompany: '',
  principal: '',
  createTime: [],
  signTime: [],
  endTime: [],
  state: '',
  type: '',
  checkbox: 'false',
};

export default class ContractTable extends Component {
  static displayName = 'ContractTable';

  // 设置属性类型
  static propTypes = {
    enableFilter: PropTypes.bool,
    searchQueryHistory: PropTypes.object,
  };
  // 设置默认的属性
  static defaultProps = {
    // 用于控制是否显示筛选组件
    enableFilter: true,
    searchQueryHistory: null,
  };
  // 构造方法 
  constructor(props) {
    super(props);
    // 设置初始属性
    this.state = {
      // 装载标志
      loading: true,
      // 查询字段为初始状态
      searchQuery: cloneDeep(defaultSearchQuery),
      // 初始页
      pageIndex: 1,
      // 初始表的内容数据为空
      dataSource: [],
    };
  }
  // 生命周期组件，第一次渲染后调用，只在客户端
  componentDidMount() {
    this.fetchDataSource();
  }
  // 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用
  componentWillReceiveProps(nextProps) {
    if (nextProps.hasOwnProperty('searchQueryHistory')) {
      this.setState(
        {
          searchQuery: Object.assign(
            cloneDeep(defaultSearchQuery),
            nextProps.searchQueryHistory
          ),
          pageIndex: 1,
        },
        this.fetchDataSource
      );
    }
  }
  // 设置加载标志
  fetchDataSource = () => {
    this.setState({
      loading: true,
    });

    // 根据当前的 searchQuery/pageIndex 获取列表数据，使用 setTimeout 模拟异步请求
    // const { searchQuery, pageIndex } = this.state;
    setTimeout(() => {
      // 获取内容数据
      const dataSource = Array.from({ length: 10 }).map((item, index) => {
        return {
          id: `${index+1}`,
          name: 'kejiju',
          ourCompany: '上海市科技局',
          otherCompany: '数据组',
          amount: '成都分公司',
          currency: '知文项目',
          state: '90%',
        };
      });
      
      // 重置数据
      this.setState({
        loading: false,
        dataSource,
      });
    }, 1 * 1000);
  };
  // 监听查询字典的内存改变
  onSearchChange = (searchQuery) => {
    this.setState({
      searchQuery,
    });
  };
  // 点击建建设按钮
  onSearchSubmit = (searchQuery) => {
    // 首先设置初始页码为1，更新最新的查重字段
    this.setState(
      {
        searchQuery,
        pageIndex: 1,
      },
      // 获取新数据
      this.fetchDataSource
    );
  };
  // 重置检查字典为初始状态
  onSearchReset = () => {
    this.setState({
      searchQuery: cloneDeep(defaultSearchQuery),
    });
  };
  // 页码控制
  onPaginationChange = (pageIndex) => {
    this.setState(
      {
        pageIndex,
      },
      this.fetchDataSource
    );
  };

  renderState = (value) => {
    return (
      <div className={styles.state}>
        <span className={styles.stateText}>{value}</span>
      </div>
    );
  };
  // 渲染操作列的修改合同与查看详情
  renderOper = () => {
    return (
      <div>
        <Button
          text
          onClick={() => {
            Message.success('修改合同');
          }}
        >
          修改合同
        </Button>
        <span className={styles.separator} />
        <Button
          text
          onClick={() => {
            Message.success('查看详情');
          }}
        >
          查看详情
        </Button>
      </div>
    );
  };

  getTableColumns = () => {
    return [
      {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        lock: true,
        width: 100,
      },
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        lock: true,
        width: 100,
      },
      {
        title: '备注',
        dataIndex: 'ourCompany',
        key: 'ourCompany',
        width: 160,
      },
      {
        title: '开发对象',
        dataIndex: 'otherCompany',
        key: 'otherCompany',
        width: 160,
      },
      {
        title: '应用对象',
        dataIndex: 'amount',
        key: 'amount',
        width: 100,
      },
      {
        title: '应用项目',
        dataIndex: 'currency',
        key: 'currency',
        width: 60,
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
        width: 60,
      },
      {
        title: '操作',
        dataIndex: 'detail',
        key: 'detail',
        cell: this.renderOper,
        width: 200,
      },
    ];
  };

  render() {
    // 从属性中获取控制筛组件是否显示变量
    const { enableFilter } = this.props;
    const { searchQuery, dataSource, loading, pageIndex } = this.state;

    return (
      <div>
        {/* 筛选组件 */}
        {enableFilter && (
          <SearchFilter
            value={searchQuery}
            onChange={this.onSeacrhChange}
            onSubmit={this.onSearchSubmit}
            onReset={this.onSearchReset}
          />
        )}
        <Table dataSource={dataSource} hasBorder={false} loading={loading}>
          {this.getTableColumns().map((item) => {
            return (
              <Table.Column
                title={item.title}
                dataIndex={item.dataIndex}
                key={item.key}
                sortable={item.sortable || false}
                cell={item.cell}
                width={item.width || 'auto'}
                lock={item.lock}
              />
            );
          })}
        </Table>
        <Pagination
          className={styles.pagination}
          current={pageIndex}
          onChange={this.onPaginationChange}
        />
      </div>
    );
  }
}
