/**
 * @Author: lvshaoli
 * @DATE: 2020-01-15
 * @TIME: 14:11
 * @DESC: '路由工具类'
 * */
import Taro from '@tarojs/taro'


// 跳转到目的页面，打开新页面
function navigateTo (url, params) {
  const paramsStr = handleParams(params)
  Taro.navigateTo({
    url: url + paramsStr
  })

}


function redirectTo (url, params) {
  // 跳转到目的页面，在当前页面打开
  const paramsStr = handleParams(params)
  Taro.redirectTo({
    url: url + paramsStr
  })
}

function navBack (delta) {
  let currentDelta = delta
  if (!delta || typeof delta !== 'number') {
    currentDelta = 1
  }
  Taro.navigateBack({ delta: currentDelta })
}

function handleParams (params) {
  let paramsStr = ''
  if (params && typeof params === 'object') {
    const keys = Object.keys(params) || []
    if (keys && keys.length) {
      keys.forEach((key, index) => {
        // paramsStr =
        if (index === 0) {
          paramsStr += `?${key}=${params[key]}`
        } else {
          paramsStr += `&${key}=${params[key]}`
        }
      })
    }
  }
  return paramsStr
}

export {
  navigateTo,
  redirectTo,
  navBack
}
