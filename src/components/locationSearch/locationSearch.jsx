/**
 * @Author: yami
 * @DATE: 2020-01-16
 * @TIME: 11:32
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Searchbar from '@components/searchBar/searchBar'
import PropTypes from 'prop-types'
import './locationSearch.scss'

class Locationsearch extends Component {
  static propTypes = {
    onLocSeachClick: PropTypes.func,
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

  searchResClick (val) {
    if (!val) {
      this.props.onLocSeachClick && this.props.onLocSeachClick()
    } else {
      console.log('调搜索')
    }
  }

  render () {
    return (
      <View className='locationSearch'>
        <Searchbar
          onBarClick={this.searchResClick.bind(this)}
        />
      </View>
    )
  }
}

export default Locationsearch

