import loginApi from './loginApi'

export function getToken(username, password, onGetToken) {
  loginApi.loginOrg(username, password).then(data => {
    if (data.obj) {
      onGetToken(data.obj.token_type + ' ' + data.obj.access_token)
    } else {
      onGetToken('')
    }
  }).catch(err => {
    console.log(err)
    return null
  })
}
