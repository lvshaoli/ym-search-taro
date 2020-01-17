import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import 'taro-ui/dist/style/index.scss'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/person/person',
      'pages/serviceType/serviceType', // 全部分类
      'pages/locationAtIndex/locationAtIndex', // 选择城市
      'pages/searchContentView/searchContentView', // 搜索结果
      'pages/hostipallist/hostipallist', // 医院列表
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
    tabBar: {
      list: [{
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/images/tab/home_unselected.png',
        selectedIconPath: './assets/images/tab/home_selected.png'
      }, {
        pagePath: 'pages/person/person',
        text: '我的',
        iconPath: './assets/images/tab/my_unselect.png',
        selectedIconPath: './assets/images/tab/my_selected.png'
      }],
      color: '#888888',
      selectedColor: '#0CC0BD',
      backgroundColor: 'white',
      borderStyle: 'black'
    }

  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
