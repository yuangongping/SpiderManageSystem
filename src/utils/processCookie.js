import Cookies from 'js-cookie'

const TOKEN_KEY = 'Token'

// cookie的有效期，单位为天
const COOKIE_EXPIRES = 1

export const setToken = (token) => {
	Cookies.set(TOKEN_KEY, token, { expires: COOKIE_EXPIRES || 1 })
}

export const getToken = () => {
	const token = Cookies.get(TOKEN_KEY)
	if (token) return token
	return false
	
}

export const removeToken = () => {
	Cookies.remove(TOKEN_KEY)
}


