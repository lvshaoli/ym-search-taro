/**
 * @Author: yami
 * @DATE: 2020-01-15
 * @TIME: 15:03
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import './searchBar.scss'

class Searchbar extends Component {
  static propTypes = {
    onBarClick: PropTypes.any, // search click
    searchPlaceholder: PropTypes.string, // placeholder
    focus: PropTypes.bool, // 是否聚焦
  }

  static defaultProps = {
    searchPlaceholder: '大家都在搜:皮肤病',
    focus: true
  }
  constructor () {
    super(...arguments)
    this.state = {
      searchVal: '',
      searchLabel: '取消'
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onInputChange (e) {
    const targetValue = e.currentTarget.value
    this.setState({
      searchVal: targetValue,
      searchLabel: !targetValue ? '取消' : '搜索'
    })
  }

  onSeachBarClick () {
    this.props.onBarClick && this.props.onBarClick(this.state.searchVal)
  }

  render () {
    return (
      <View className='searchBar'>
        <Input
          placeholder={this.props.searchPlaceholder || '大家都在搜:皮肤病'}
          className='search-bar-input'
          value={this.state.searchVal}
          // onChange={this.onInputChange.bind(this)}
          onInput={this.onInputChange.bind(this)}
          focus={this.props.focus}
        />
        <Image
          className='search-bar-icon'
          src={require('@assets/images/home/search_icon.png')}
        />
        <Text onClick={this.onSeachBarClick.bind(this)} className='search-bar-text'>{ this.state.searchLabel }</Text>
      </View>
    )
  }
}

export default Searchbar
