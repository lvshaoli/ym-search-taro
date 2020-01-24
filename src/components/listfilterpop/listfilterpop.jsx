/**
 * @Author: yami
 * @DATE: 2020-01-17
 * @TIME: 11:18
 * @DESC: '过滤医院列表'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import PropTypes from 'prop-types'
// import { connect } from '@tarojs/redux'
import './listFilterPop.scss'

class Listfilterpop extends Component {
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
      <View className='listFilterPop'>
        <View className='list-filter-pop-top-container'>
          <View><Text>全城</Text></View>
          <View><Text>全城</Text></View>
          <View><Text>全城</Text></View>
        </View>
      </View>
    )
  }
}

export default Listfilterpop
