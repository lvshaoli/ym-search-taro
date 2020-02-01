/**
 * @Author: lvshaoli
 * @DATE: 2020-02-01
 * @TIME: 10:21
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Commonimage from '@components/commonimage/commonimage'
import Hosdetailborderbtn from '@components/hosDetails/hosdetailborderbtn/hosdetailborderbtn'
// import PropTypes from 'prop-types'
import './hosDetailTopHeader.scss'

class Hosdetailtopheader extends Component {
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
    this.state = {
      isFllow: true
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='hosDetailTopHeader'>
        <View className='hos-detail-topheader-left-container'>
          <Commonimage
            imageSource={require('@assets/images/home/home_jddyfsyy.png')}
            imageStyle={{'width': `${Taro.pxTransform(100)}`,
              'height': Taro.pxTransform(100)}}
          />

          <Hosdetailborderbtn
            onBorderDetailClick={() => {
              console.log('onBorderClick')
              this.setState({
                isFllow: !this.state.isFllow
              })
            }}
            status={this.state.isFllow}
          />

        </View>
        {/* right */}
        <View className='hos-detail-topheader-right-container'>
          <View>
            <Text className='hos-detail-topheader-right-hosText'>西安交通大学第一附属医院</Text>
          </View>

          <View>
            <Text className='hos-detail-tioheader-right-label'>三级甲等</Text>
            <Text className='hos-detail-tioheader-right-label'>综合医院</Text>
          </View>

          <View>
            <Text className='hos-detail-topheader-right-date'>门诊时间：周一至周日 08:00-18:00</Text>
          </View>
        </View>

        {/* right */}
        <View className='hos-detail-topheader-right-bottom-container'>
          <View className='hos-detail-topheader-inner-contaner'>
            <Commonimage
              imageSource={require('@assets/images/home/home_jddyfsyy.png')}
              imageStyle={{'width': `${Taro.pxTransform(46)}`,
                'height': Taro.pxTransform(46)}}
            />
            <View>
              <Text className='right-bottom-text'>院内导航</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Hosdetailtopheader
