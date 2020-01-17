/**
 * @Author: yami
 * @DATE: 2020-01-15
 * @TIME: 09:28
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import PropTypes from 'prop-types'
import Commonborderbtn from '@components/commonborderbtn/commonborderbtn'
import './commonHosBtnGroup.scss'

class Commonhosbtngroup extends Component {
  // static propTypes = {
  //   children: PropTypes.any,
  //   data: PropTypes.array
  // }
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
      <View className='commonHosBtnGroup'>
        <View className='common-hos-btn-groud-first'>
          <Commonborderbtn
            commonBorderText='挂号'
            btnType='border-large'
          />
          <Commonborderbtn
            commonBorderText='咨询'
            btnType='border-large'
          />
        </View>
        <View className='common-hos-btn-groud-second'>
          <Commonborderbtn
            commonBorderText='去医院'
            btnType='border-large'
          />
          <Commonborderbtn
            commonBorderText='室内导航'
            btnType='primary-btn'
          />
        </View>
      </View>
    )
  }
}

export default Commonhosbtngroup
