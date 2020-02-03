/**
 * @Author: lvshaoli
 * @DATE: 2020-02-03
 * @TIME: 10:17
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './docNoticeDetailPage.scss'

class Docnoticedetailpage extends Component {

    
  constructor () {
    super(...arguments)
    this.state = {}
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  config = {
    navigationBarTitleText: '通知详情'
  }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='docNoticeDetailPage'>
        <Text>docNoticeDetailPage</Text>
      </View>
    )
  }
}

export default Docnoticedetailpage
