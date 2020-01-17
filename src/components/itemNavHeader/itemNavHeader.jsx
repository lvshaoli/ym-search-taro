/**
 * @Author: yami
 * @DATE: 2020-01-14
 * @TIME: 13:33
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import './itemNavHeader.scss'

class Itemnavheader extends Component {
  static propTypes = {
    headerIcon: PropTypes.string, // 左边图标
    headerTitle: PropTypes.string, // 左边标题
    headerRightTitle: PropTypes.string, // 右边文字
    onHederNavClick: PropTypes.func, // 点击事件
  }

  static defaultProps = {
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { headerIcon, headerTitle, headerRightTitle, onHederNavClick } = this.props || {}
    return (
      <View className='itemNavHeader'>
        <View className='item-nav-header-left'>
          <Image className='item-nav-header-left-image' src={headerIcon} />
          <Text className='item-nav-header-left-text'>{ headerTitle }</Text>
        </View>


        <View className='item-nav-header-right' onClick={onHederNavClick}>
          <Text className='item-nav-header-right-text'>{ headerRightTitle }</Text>
          <Image className='item-nav-header-right-image' src={require('@assets/images/home/home_common_right.png')} />
        </View>
      </View>
    )
  }
}

export default Itemnavheader
