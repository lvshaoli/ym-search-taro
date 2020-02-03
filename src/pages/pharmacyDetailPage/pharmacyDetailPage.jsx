/**
 * @Author: lvshaoli
 * @DATE: 2020-02-03
 * @TIME: 14:58
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Commonimage from '@components/commonimage/commonimage'
// import { connect } from '@tarojs/redux'
import './pharmacyDetailPage.scss'

// @connect(({  }) => ({
// }), (dispatch) => ({  
// }))
class Pharmacydetailpage extends Component {

  constructor () {
    super(...arguments)
    this.state = {}
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }


  config = {
    navigationBarTitleText: '药店详情'
  }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='pharmacyDetailPage'>
        {/* 药店介绍 */}
        <View className='pharmacy-detail-intro-container'>
          <Commonimage
            imageSource={require('@assets/images/home/home_jddyfsyy.png')}
            imageStyle={{
              'width': `${Taro.pxTransform(146)}`,
              'height': Taro.pxTransform(146),
              'border-radius': Taro.pxTransform(16)
            }}
          />
        </View>
        <Text>pharmacyDetailPage</Text>
      </View>
    )
  }
}

export default Pharmacydetailpage
