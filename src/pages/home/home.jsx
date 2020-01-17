/**
 * @Author: yami
 * @DATE: 2020-01-13
 * @TIME: 14:51
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import PropTypes from 'prop-types'
// import { connect } from '@tarojs/redux'
import './home.scss'

// @connect(({  }) => ({
// }), (dispatch) => ({
//
// }))
class Home extends Component {
  // static propTypes = {
  //   children: PropTypes.any,
  //   data: PropTypes.array
  // }
  //
  // static defaultProps = {
  //   data: []
  // }

    config = {
      navigationBarTitleText: '首页'
    }

    componentWillReceiveProps (nextProps) {
      console.log(this.props, nextProps)
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
      return (
        <View className='home'>
          <Text>home</Text>
        </View>
      )
    }
}

export default Home
