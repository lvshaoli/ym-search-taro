/**
 * @Author: yami
 * @DATE: 2020-01-13
 * @TIME: 11:20
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import PropTypes from 'prop-types'
// import { connect } from '@tarojs/redux'

import { Commonborderbtn } from '@components'
import Commonimage from '@components/commonimage/commonimage'
import './person.scss'

// @connect(({  }) => ({
// }), (dispatch) => ({
//
// }))
class Person extends Component {
  // static propTypes = {
  //   children: PropTypes.any,
  //   data: PropTypes.array
  // }
  //
  // static defaultProps = {
  //   data: []
  // }

    config = {
      navigationBarTitleText: '个人中心'
    }

    componentWillReceiveProps (nextProps) {
      console.log(this.props, nextProps)
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    onScrollToUpper () {}

    onScroll (e) {
      console.log(e.detail)
    }

    render () {

      return (
        <View>
          <View className='index-common-border-btn-container'>
            <Commonborderbtn
              commonBorderText='去医院'
              btnType='border-large'
            />
            <Commonborderbtn
              commonBorderText='室内导航'
              btnType='primary-btn'
            />
            <Commonborderbtn
              commonBorderText='骨科'
              btnType='border-small'
            />
          </View>

          {/* 头像图片 */}
          <Commonimage
            imageSource='https://camo.githubusercontent.com/3e1b76e514b8960055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
            imageStyle={{ width: '40px',
              height: '40px',
              borderRadius: '10px'}}
          />
        </View>
      )
    }
}

export default Person
