/**
 * @Author: lvshaoli
 * @DATE: 2020-01-24
 * @TIME: 16:49
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import './content2Item.scss'

class Content2item extends Component {
  static propTypes = {
    text: PropTypes.string,
    checked: PropTypes.bool,
    onContentItemClick: PropTypes.func
  }

  static defaultProps = {
    checked: false
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
    const { text, checked, onContentItemClick } = this.props
    return (
      <View className='content2Item' onClick={() => {
        onContentItemClick && onContentItemClick()
      }}
      >
        <View className='filter-content2-item-container'>
          <Text className='filter-content2-item-text'>{ text }</Text>
          {checked && <Image className='filter-content2-item-icon' src={require('@assets/images/hos/hos_filter_select_icon.png')} />}
        </View>
        <View className='filter-content2-line'>
          <Text></Text>
        </View>
      </View>
    )
  }
}

export default Content2item
