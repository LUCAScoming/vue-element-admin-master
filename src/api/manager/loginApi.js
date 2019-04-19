import requestOrg from '@/utils/request'
// const url = 'weborg/org'

export default {
  loginOrg(username, password) {
    return requestOrg({
      baseURL: process.env.BASE_API,
      url: '/alpha/user/login',
      method: 'POST',
      data: {
        username, password
      }
    })
  }
}
