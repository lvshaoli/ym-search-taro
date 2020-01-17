/**
 * @Author: yami
 * @DATE: 2020-01-15
 * @TIME: 11:16
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import PropTypes from 'prop-types'
// import { connect } from '@tarojs/redux'
import Servicesingle from '@components/serviceSingle/serviceSingle'
import './serviceType.scss'

// @connect(({  }) => ({
// }), (dispatch) => ({
// }))
class Servicetype extends Component {
  // static propTypes = {
  //   children: PropTypes.any,
  //   data: PropTypes.array
  // }
  //
  // static defaultProps = {
  //   data: []
  // }
  config = {
    navigationBarTitleText: '全部分类'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='serviceType'>
        <Servicesingle
          singleTitle='机构类'
        />
        <Servicesingle
          singleTitle='服务类'
        />
        <Servicesingle
          singleTitle='急诊类'
        />
        <Servicesingle
          singleTitle='其他类'
        />
      </View>
    )
  }
}

export default Servicetype

