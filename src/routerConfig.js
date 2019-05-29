// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import MyContract from './pages/MyContract';
import ContractSearch from './pages/ContractSearch';
import AddProject from './pages/AddProject'
import ProjectManageMent from './pages/ProjectManageMent'


import { getRouterData } from './utils/utils';
import { asideMenuConfig } from './menuConfig';

const routerConfig = [
  {
    path: '/contract/manage',
    component: ProjectManageMent,
  },



  {
    path: '/user/login',
    component: UserLogin,
  },
  {
    path: '/user/register',
    component: UserRegister,
  },
  {
    path: '/contract/my',
    component: MyContract,
  },
  {
    path: '/contract/index',
    component: ContractSearch,
  },
 
  {
    path: '/contract/AddProject',
    component: AddProject,
  }
];

const routerData = getRouterData(routerConfig, asideMenuConfig);
export { routerData };
