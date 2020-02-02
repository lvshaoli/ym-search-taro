/**
 * @Author: lvshaoli
 * @DATE: 2020-02-02
 * @TIME: 10:55
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import PropTypes from 'prop-types'
// import { connect } from '@tarojs/redux'
import './hosDeptSelect.scss'

// @connect(({  }) => ({
// }), (dispatch) => ({  
// }))
class Hosdeptselect extends Component {
  // static propTypes = {
  //   children: PropTypes.any,
  //   data: PropTypes.array
  // }
  //
  // static defaultProps = {
  //   data: []
  // }
  
  // config = {
  // navigationBarTitleText: '首页'
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
      <View className='hosDeptSelect'>
        <Text>hosDeptSelect</Text>
      </View>
    )
  }
}

export default Hosdeptselect
  
