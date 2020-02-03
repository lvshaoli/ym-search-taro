/**
 * @Author: lvshaoli
 * @DATE: 2020-02-01
 * @TIME: 18:40
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import Commonimage from '@components/commonimage/commonimage'
import './imgTopTextBtn.scss'

class Imgtoptextbtn extends Component {
  static propTypes = {
    descText: PropTypes.string,
    imgSource: PropTypes.string
  }

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
          imageSource={this.props.imgSource}
          imageStyle={{'width': `${Taro.pxTransform(40)}`,
            'height': Taro.pxTransform(38)}}
        />
        <View className='right-bottom-text'>{this.props.descText}</View>
      </View>
    )
  }
}

export default Imgtoptextbtn
