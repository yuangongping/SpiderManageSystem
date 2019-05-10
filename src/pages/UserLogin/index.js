import React from 'react';
import Loadable from 'react-loadable';
import { Loading } from '@alifd/next';

/**
 * @EXAMPLE
 * 骨架屏 loader
 * Loadable 实现动态组件映入的高阶组件
*/
export default Loadable({
  loader: () => import(/* webpackChunkName: "UserLogin" */ './UserLogin'),
  loading: () => <Loading className="fit-content" />,
});
