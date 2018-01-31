import axios from 'axios';
import { Toast } from "antd-mobile";
import originJsonp from 'jsonp'

axios.interceptors.request.use(function (config) {
  Toast.loading('loading...', 0)
  return config;
})

axios.interceptors.response.use(function (config) {
  Toast.hide();
  return config;
})

export function api(url, datas = {}, methods = 'get') {
  axios({
    url: url,
    method: methods,
    data: datas,
    withCredentials: false,
    timeout: 8000,
    maxContentLength: 5000,
    responseType: 'json'
  }).then(function (res) {
    console.log(res)
    if (res.status >= 200 && res.status < 300) {
      return res
    }
  }).catch(function (error) {
    console.log('---->错误啦', error.message);
    Toast.info(error.message)
  });
}


export function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        Toast.info(err.message)
        reject(err)
      }
    })
  })
}

export function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}


