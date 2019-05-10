import React, { Component } from 'react';
import Layout from '@icedesign/layout';
import { withRouter } from 'react-router';
import Header from './components/Header';
import Aside from './components/Aside';

import BasicLayoutHoc from './BasicLayoutHoc';
import MainRoutes from './MainRoutes';

import styles from './index.module.scss';

@withRouter
@BasicLayoutHoc
export default class BasicLayout extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Layout fixable className={styles.layout}>
        <Layout.Header type="secondary">
            <Header />
        </Layout.Header>

        <Layout.Section>
          <Layout.Aside>
            <Aside />
          </Layout.Aside>

          {/* 主体内容 */}
          <Layout.Main>
            <MainRoutes />
          </Layout.Main>
        </Layout.Section>
      </Layout>
    );
  }
}

