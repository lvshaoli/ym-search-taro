/**
 * @Author: lvshaoli
 * @DATE: 2020-01-24
 * @TIME: 16:49
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import PropTypes from 'prop-types'
import './content2Item.scss'

class Content2item extends Component {
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
      <View className='content2Item'>
        <View className='filter-content2-item-container'>
          <Text className='filter-content2-item-text'>filterContent2</Text>
        </View>
        <View className='filter-content2-line'>
          <Text></Text>
        </View>
      </View>
    )
  }
}

export default Content2item
