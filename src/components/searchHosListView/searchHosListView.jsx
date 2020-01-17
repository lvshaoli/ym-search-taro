/**
 * @Author: yami
 * @DATE: 2020-01-15
 * @TIME: 16:18
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import './searchHosListView.scss'

class Searchhoslistview extends Component {
  static propTypes = {
    title: PropTypes.string,
    bottomTip: PropTypes.string,
    onMoreClick: PropTypes.func
  }
  //
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
      <View className='searchHosListView'>
        <View>
          <Text className='search-hos-list-view-text'>{ this.props.title }</Text>
        </View>

        <View>
          { this.props.children }
        </View>
        <View className='search-hos-list-view-bottom' onClick={this.props.onMoreClick}>
          <Text className='search-hos-list-bottom-text'>{ this.props.bottomTip }</Text>
        </View>

        <View className='search-hos-list-bottom-line'>
          <Text></Text>
        </View>
      </View>
    )
  }
}

export default Searchhoslistview
