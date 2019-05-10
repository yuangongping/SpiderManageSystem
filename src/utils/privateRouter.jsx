import React from 'react';
import {Route,Redirect,withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { setToken, getToken, removeToken} from './processCookie';
import request from './_http';

//私有路由，只有登录的用户才能访问
class PrivateRoute extends React.Component{
    componentWillMount(){
        // 获取cookies中的token
        let token = getToken();
        // 初始化isAuthenticated：表示token的有效性
        let isAuthenticated = false;
        // 如果能获取到token, 则进行验证
        if(token){
          // 对token的有效性重新赋值，调用后端验证token的接口
          isAuthenticated = this._verify_token(token);
        }
        // 将token的有效性添加及设置到属性中
        this.setState({isAuthenticated:isAuthenticated})
        // 如果isAuthenticated == false，则跳转到登录页面的路由
        if(!isAuthenticated){
          const {history} = this.props;
          // 200毫秒内跳转
          setTimeout(() => {
            history.replace("/user/login");
          }, 200)
        }
    }


    // 验证token的函数，传入待验证的token
    _verify_token = (token) => {
      // 创建表单对象
      const formData = new FormData()
      // 表单中添加token参数
      formData.append('token', token)
       // 向后端的token验证端口发出请求
      return request.post(
        'verify_token',
        formData
      ).then(e => {
          // 如果token有效，后端返回200的状态码，返回true
          if (e && e.code === 200 && e.status === 'success') {
            return true;
          } else {
            return false;
          }
        },
        error => {
          return false})  
    }

    render(){
        let { component: Component,path="/",exact=false,strict=false} = this.props;
        return this.state.isAuthenticated ?  (
            <Route  path={path} exact={exact}  strict={strict}  render={(props)=>( <Component {...props} /> )} />
        ) : ("请重新登录");
    }
}
PrivateRoute.propTypes  ={
        path:PropTypes.string.isRequired,
        exact:PropTypes.bool,
        strict:PropTypes.bool,
        component:PropTypes.func.isRequired
}
export default withRouter(PrivateRoute);