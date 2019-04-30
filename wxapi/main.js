const CONFIG = require('./config.js')
const API_BASE_URL = 'https://api.it120.cc'

const request = (url, needSubDomain, method, data) => {
  let _url = API_BASE_URL + (needSubDomain ? '/' + CONFIG.subDomain : '') + url

  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      method: method,
      data: data,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success() {},
      fail() {},
      complete() {}
    })
  })
}