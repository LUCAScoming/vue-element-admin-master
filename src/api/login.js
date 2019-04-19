import request_org from '@/utils/request'

export default{
  LoginByUsername(form) {
    return request_org({
      url: '/alpha/user/login',
      method: 'POST',
      data: {
        username: form.username,
        password: form.password
      }
    })
  }
}

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request_org({
    url: '/alpha/user/login',
    method: 'POST',
    data
  })
}

// export function loginByUsername(username, password) {
//   return request({
//     // baseURL: process.env.BASE_API,
//     url: 'www.event-dev.xyz:8080/alpha/user/login' + username + '?' + password,
//     method: 'POST'
//     // Parameters: {
//     //   username, password
//     // }
//   })
// }

export function logout() {
  return request_org({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request_org({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

