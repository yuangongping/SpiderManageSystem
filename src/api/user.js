import request from '../utils/request';

export const api_login = params =>
  request.post('login', params);

export const getUserProfile = () =>
  request.auth('user_info');