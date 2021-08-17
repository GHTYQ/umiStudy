import { extend } from 'umi-request';
import { message } from 'antd';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

function errorHandler(error) {
  // 请求已发送但服务端返回状态码非 2xx 的响应
  if (error.response) {
    const { status, statusText } = error.response;
    const errortext = codeMessage[status] || statusText;
    message.error(errortext, 2);
    // 请求初始化时出错或者没有响应返回的异常
  } else {
    const msg = '接口请求失败，请查看网络状态，或刷新页面重试';
    message.error(msg, 3);
  }
  throw error;
}

export const prefix = process.env.NODE_ENV === 'development' ? '/api' : '';

// umi request 实例
const request = extend({
  prefix,
  withCredentials: true,
  errorHandler,
  // mode: 'no-cors',
  // redirect: 'follow',
});

// 请求拦截器
// request.interceptors.request.use((url, options) => {
//   // if (sessionId && sessionId.length) {
//   //   options.data.sessionId = sessionId
//   // }
//   console.log(url, options)
//   return {
//     url,
//     options,
//   }
// })

// 响应拦截器
request.interceptors.response.use(async (res, config) => {
  const {
    resultCode,
    success,
    message: theMessage,
    errDesc,
  } = await res.clone().json();
  const msg = theMessage || errDesc || '系统异常';

  if (!(resultCode === '1' || success === true) && !config.quiet) {
    if (config.throw) {
      //  如果我只想处理正常流的话，就把非正常流抛出异常
      const err = new InfoError(msg);
      throw err;
    } else {
      message.error(msg);
      return res;
    }
  } else {
    return res;
  }
});

export const get = (url, params, config) =>
  request.get(url, { params, ...config });

export const post = (url, data, config) =>
  request.post(url, { data, ...config });

export const put = (url, data, config) => request.put(url, { data, ...config });

export const dele = (url, params, config) =>
  request.delete(url, { params, ...config });
