/**
 * @Author: lvshaoli
 * @DATE: 2020-02-03
 * @TIME: 09:59
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { navigateTo } from '@utils/navUtils'
import './docNoticeListPage.scss'

class Docnoticelistpage extends Component {

    
  constructor () {
    super(...arguments)
    this.state = {}
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }


  config = {
    navigationBarTitleText: '通知公告'
  }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='docNoticeListPage'>
        {/* - */}
        <View className='doc-noticelist-item' onClick={() => {
          navigateTo('/pages/docnoticedetailpage/docnoticedetailpage')
        }}
        >
          <View className='doc-noticeList-item-top-container'>
            <Text className='doc-noticeList-item-top-title'>关于2019年国庆节工作安排的通知</Text>
            <Image className='doc-noticeList-item-top-img' src={require('@assets/images/home/home_common_right.png')} />
          </View>
          <Text className='doc-noticeList-item-bottom-date'>2020-12-12</Text>
        </View>
        {/*  -  */}
        <View className='doc-noticelist-item'>
          <View className='doc-noticeList-item-top-container'>
            <Text className='doc-noticeList-item-top-title'>白内障受试者招募广告</Text>
            <Image className='doc-noticeList-item-top-img' src={require('@assets/images/home/home_common_right.png')} />
          </View>
          <Text className='doc-noticeList-item-bottom-date'>2020-12-12</Text>
        </View>
      </View>
    )
  }
}

export default Docnoticelistpage
