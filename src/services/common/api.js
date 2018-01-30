import axios from 'axios';
import { Toast } from "antd-mobile";

axios.interceptors.request.use(function (config) {
  Toast.loading('loading...', 0)
  return config;
})

axios.interceptors.response.use(function (config) {
  Toast.hide();
  return config;
})

export function Api(url, datas = {}, methods = 'get') {
  axios({
    url: url,
    method: methods,
    data: datas,
    withCredentials: false,
    timeout: 8000,
    maxContentLength: 5000,
    responseType: 'json',
    proxy: {
      host: 'http://sentence.iciba.com',
    }

  }).then(function (res) {
    if (res.status >= 200 && res.status < 300) {
      return res
    }
  }).catch(function (error) {
    console.log('---->错误啦', error.message);
    Toast.info(error.message)
  });
}
