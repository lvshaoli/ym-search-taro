/**
 * @Author: yami
 * @DATE: 2020-01-14
 * @TIME: 10:09
 * @DESC: '首页item'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import './homeItem.scss'

class Homeitem extends Component {
  static externalClasses = ['item-class']
  static propTypes = {
    imageSize: PropTypes.string, // 图片大小
    imageSource: PropTypes.string, // 图片来源
    itemText: PropTypes.string, // 文字
    onItemClick: PropTypes.func, // item点击事件
    itemClass: PropTypes.string,
    itemStyle: PropTypes.object,
  }

  static defaultProps = {
    imageSize: 'home-item-image',
    itemText: ''
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () {
  }

  componentDidHide () { }

  render () {
    const { imageSize, imageSource, itemText, onItemClick, itemClass, itemStyle } = this.props || {}
    return (
      <View
        className={`homeItem ${itemClass} item-class`}
        onClick={onItemClick}
        style={itemStyle}
      >
        <Image className={imageSize} src={imageSource} />
        <View className='home-item-text-container'>
          <Text className='home-item-text'>{ itemText }</Text>
        </View>
      </View>
    )
  }
}

export default Homeitem
