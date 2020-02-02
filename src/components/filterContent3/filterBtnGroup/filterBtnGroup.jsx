/**
 * @Author: lvshaoli
 * @DATE: 2020-01-26
 * @TIME: 12:19
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import './filterBtnGroup.scss'

class Filterbtngroup extends Component {
  static propTypes = {
    onClean: PropTypes.func,
    onFirm: PropTypes.func
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
      <View className='filterBtnGroup'>

        <View className='filter-btn-group-container'>
          <View
            className='filter-btn-group-clean'
            onClick={this.props.onClean}
          >
            <Text className='filter-btn-group-clean-text'>重置</Text>
          </View>
          <View
            className='filter-btn-group-confirm'
            onClick={this.props.onFirm}
          >
            <Text className='filter-btn-group-confirm-text'>确定</Text>
          </View>
        </View>

      </View>
    )
  }
}

export default Filterbtngroup
