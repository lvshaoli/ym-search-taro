/**
 * @Author: yami
 * @DATE: 2020-01-14
 * @TIME: 17:24
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Commonimage from '@components/commonimage/commonimage'
import Commonborderbtn from '@components/commonborderbtn/commonborderbtn'
import PropTypes from 'prop-types'
import './commonHosItem.scss'

class Commonhositem extends Component {
  static propTypes = {
    renderGroup: PropTypes.any,
    onItemClick: PropTypes.func
  }
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
      <View className='commonHosItem' onClick={() => {
        this.props.onItemClick && this.props.onItemClick()
      }}
      >
        <View>
          <Commonimage
            imageSource={require('@assets/images/home/home_jddyfsyy.png')}
          />
        </View>

        <View className='common-hos-right-container'>
          <View>
            <Text className='common-hos-item-top-text'>西安交通大学第一附属医院</Text>
          </View>
          {/* 2*/}
          <View className='common-hos-item-center-container'>
            <Text className='common-hos-item-center-left-text'>三甲 | 公立 | 综合医院</Text>

            <Text className='common-hos-item-center-right-text'>6.9km</Text>

          </View>


          {/* 3*/}
          <View className='common-hos-item-dept-container'>
            <Commonborderbtn
              commonBorderText='骨科'
              btnType='border-small'
            />
            <Commonborderbtn
              commonBorderText='骨科'
              btnType='border-small'
            />
          </View>

          <View className='common-hos-item-btn-container'>{ this.props.renderGroup }</View>
        </View>


        <View className='common-hos-item-line'>
          <Text></Text>
        </View>

      </View>
    )
  }
}

export default Commonhositem
