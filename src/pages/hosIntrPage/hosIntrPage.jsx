/**
 * @Author: lvshaoli
 * @DATE: 2020-02-03
 * @TIME: 09:52
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './hosIntrPage.scss'

class Hosintrpage extends Component {
  
    config = {
      navigationBarTitleText: '医院介绍'
    }
    
    constructor () {
      super(...arguments)
    }

    componentWillReceiveProps (nextProps) {
      console.log(this.props, nextProps)
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
      return (
        <View className='hosIntrPage'>
          西安交通大学第一附属医院的发展史与国家的西安交通大学第一附属医院的发展史与国家的
          西安交通大学第一附属医院的发展史与国家的西安交通大学第一附属医院的发展史与国家的西安交通大学第一附属医院的发展史与国家的
          西安交通大学第一附属医院的发展史与国家的西安交通大学第一附属医院的发展史与国家的西安交通大学第一附属医院的发展史与国家的
          西安交通大学第一附属医院的发展史与国家的西安交通大学第一附属医院的发展史与国家的西安交通大学第一附属医院的发展史与国家的
          西安交通大学第一附属医院的发展史与国家的西安交通大学第一附属医院的发展史与国家的西安交通大学第一附属医院的发展史与国家的
          西安交通大学第一附属医院的发展史与国家的西安交通大学第一附属医院的发展史与国家的西安交通大学第一附属医院的发展史与国家的
        </View>
      )
    }
}

export default Hosintrpage
