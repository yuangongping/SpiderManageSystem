import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Table, Pagination, Button, Message, Dialog } from '@alifd/next';
import styles from './index.module.scss';

import SearchFilter from '../../components/ContractTable/SearchFilter';

export default class ProjectManageMent extends Component {
    static displayName = 'ProjectManageMent';
    static propTypes = {};
    static defaultProps = {};
    
    constructor(props) {
        super(props);
        this.state = {
          loading: true,
          pageIndex: 1,
          dataSource: [],
          searchQuery: {},
        };
    }
    onSearch = (searchQuery) => {
        this.setState({
          searchQuery,
        });
    }


    getTableColumns = () => {
      return [
        {
          title: '序号',
          dataIndex: 'id',
          key: 'id',
          lock: true,
          width:60,
        },
        {
          title: '项目名称',
          dataIndex: 'projectName',
          key: 'projectName',
          width: 180,
        },
        {
          title: '服务项目',
          dataIndex: 'serviceProject',
          key: 'serviceProject',
          width: 180,
        },
        {
          title: '项目类型',
          dataIndex: 'projectType',
          key: 'projectType',
          width: 120,
        },
        {
          title: '项目申请',
          dataIndex: 'projectApplicant',
          key: 'projectApplicant',
          width: 120,
        },
        {
          title: '项目维护',
          dataIndex: 'ProjectMaintainer',
          key: 'ProjectMaintainer',
          width: 120,
        },
        {
          title: '创建日期',
          dataIndex: 'projectCreationDate',
          key: 'projectCreationDate',
          width: 120,
        },
        {
          title: '运行状态',
          dataIndex: 'state',
          key: 'state',
          width: 120,
        },
        {
          title: '操作',
          dataIndex: 'detail',
          key: 'detail',
          cell: this.renderOper,
          width: 180,
        },
      ];
    }
  


    render() {
        const { searchQuery , loading, dataSource, pageIndex} = this.state;
    
        return (
          <IceContainer>
            {/* 检索组件 */}
            <SearchFilter
              value={searchQuery}
              onChange={this.onSeacrhChange}
              onSubmit={this.onSearchSubmit}
              onReset={this.onSearchReset}
            />

            <Table dataSource={ dataSource } hasBorder={ false } loading={ false }>
              {this.getTableColumns().map((item) => {
                return (
                  <Table.Column
                    title={ item.title }
                    dataIndex={ item.dataIndex }
                    key={ item.key }
                    sortable={ item.sortable || false }
                    cell={ item.cell }
                    width={ item.width || 'auto' }
                    lock={ item.lock }
                  />
                );
              })}
            </Table>

            {/* 翻页组件 */}
            <Pagination
              className={ styles.pagination }
              current={ pageIndex }
              onChange={ this.onPaginationChange }
            />
            <Dialog
              title="添加项目"
              visible={false}
              footer={false}
              onClose={this.hideCreateForm}
            >
            </Dialog>
          </IceContainer>
        );
      }



}