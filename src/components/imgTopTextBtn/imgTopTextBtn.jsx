/**
 * @Author: lvshaoli
 * @DATE: 2020-02-01
 * @TIME: 18:40
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import PropTypes from 'prop-types'
import Commonimage from '@components/commonimage/commonimage'
import './imgTopTextBtn.scss'

class Imgtoptextbtn extends Component {
  // static propTypes = {
  //   children: PropTypes.any,
  //   data: PropTypes.array
  // }
  //
  // static defaultProps = {
  //   data: []
  // }

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
      <View className='imgTopTextBtn'>
        <Commonimage
          imageSource={require('@assets/images/home/home_jddyfsyy.png')}
          imageStyle={{'width': `${Taro.pxTransform(46)}`,
            'height': Taro.pxTransform(46)}}
        />
        <View className='right-bottom-text'>院内导航</View>
      </View>
    )
  }
}

export default Imgtoptextbtn
