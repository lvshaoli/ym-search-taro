/**
 * @Author: yami
 * @DATE: 2020-01-15
 * @TIME: 10:09
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import { Commonborderbtn } from '@components'
import './chineseBtnGroup.scss'

class Chinesebtngroup extends Component {
  static propTypes = {
    onToHosClick: PropTypes.func,
    onPhoneClick: PropTypes.func
  }

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
      <View className='chineseBtnGroup'>
        <Commonborderbtn
          commonBorderText='电话联系'
          btnType='border-large'
          onBtnClick={() => {
            this.props.onPhoneClick && this.props.onPhoneClick()
          }}
        />
        <Commonborderbtn
          commonBorderText='去医院'
          btnType='primary-btn'
          onBtnClick={() => {
            this.props.onToHosClick && this.props.onToHosClick()
          }}
        />
      </View>
    )
  }
}

export default Chinesebtngroup
