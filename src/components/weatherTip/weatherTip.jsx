/**
 * @Author: yami
 * @DATE: 2020-01-13
 * @TIME: 17:09
 * @DESC: '首页天气提示'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
// import { connect } from '@tarojs/redux'
import './weatherTip.scss'

// @connect(({  }) => ({
// }), (dispatch) => ({
//
// }))
class Weathertip extends Component {
  static propTypes = {
    onSelectCityClick: PropTypes.func
  }

  // static defaultProps = {
  //   data: []
  // }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='weatherTip' onClick={this.props.onSelectCityClick}>
        <View className='weather-tip-container'>
          <Text className='weather-tip-image-title'>西安</Text>
          <Image className='weather-tip-image-down' src={require('../../assets/images/home/weatherTip_down.png')} />
        </View>
        <View className='weather-tip-container-bottom'>
          <Text className='weather-tip-image-text'>多云转晴6℃</Text>
        </View>
      </View>
    )
  }
}

export default Weathertip
