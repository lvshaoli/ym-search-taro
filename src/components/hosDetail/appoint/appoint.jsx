/**
 * @Author: lvshaoli
 * @DATE: 2020-02-06
 * @TIME: 07:13
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { Commonimage, Imgtoptextbtn } from '@components'
// import PropTypes from 'prop-types'
import './appoint.scss'

class Appoint extends Component {
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
      <View className='appoint'>
        <View className='hos-detail-doctor-intr-container hos-detail-space-between'>

          <View className='hos-detail-doctor-gh-inner-container'>

            <View className='hos-center-dept-desc-container'>

              <View className='hos-detail-doctor-img-container'>
                <Commonimage
                  imageSource={require('@assets/images/hos/hos_guah.png')}
                  imageStyle={{
                    'width': `${Taro.pxTransform(28)}`,
                    'height': Taro.pxTransform(28),
                  }}
                />

                <View className='hos-detail-dept-content'>预约挂号</View>
              </View>

              {/* - */}
              <View className='hos-detail-center-label-container'>
                <View className='hos-detail-label-container'>
                  <Image className='hos-select-flag-icon' src={require('@assets/images/hos/hos_select_flag.png')} />
                  <Text className='hos-detail-label-text'>
                    预约免费
                  </Text>
                </View>
                <View className='hos-detail-label-container'>
                  <Image className='hos-select-flag-icon' src={require('@assets/images/hos/hos_select_flag.png')} />
                  <Text className='hos-detail-label-text'>
                    真实号源
                  </Text>
                </View>
              </View>
              {/* - */}


            </View>
            <View>
            </View>
          </View>

          {/* 微信  电话 */}

          <View className='hos-detail-wechat-phone-container'>
            <Imgtoptextbtn
              descText='电话'
              imgSource={require('@assets/images/hos/hos_phone_icon.png')}
            />
            <View className='hos-detail-wechat-line'>
              <Text></Text>
            </View>
            <Imgtoptextbtn
              descText='公众号'
              imgSource={require('@assets/images/hos/hos_wechat_icon.png')}
            />
          </View>

        </View>
      </View>
    )
  }
}

export default Appoint
