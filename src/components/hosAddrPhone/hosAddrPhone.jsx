/**
 * @Author: lvshaoli
 * @DATE: 2020-02-05
 * @TIME: 19:54
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtActionSheet, AtActionSheetItem } from 'taro-ui'
import { Commonimage } from '@components'
// import PropTypes from 'prop-types'
import './hosAddrPhone.scss'

class Hosaddrphone extends Component {
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
      isOpen: false,
      phoneLists: []
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  //  医院地址点击事件
  hosAddrClick = () => {
    console.log('医院地址')
    this.setState({
      isOpen: true,
      phoneLists: [
        '急诊电话 8833 0120',
        '导医台电话 8833 0116',
        '门诊咨询 8833 5111',
        '医疗收费 8833 0120',
        '服务态度 8833 5155',
        '体检咨询 8833 0230',
        '儿童保健 8833 0132'
      ]
    })
  }


  handleCancel = () => {
    this.setState({
      isOpen: false
    })
  }

  handleClose = () => {
    this.handleCancel()
  }

  handleClick (item) {
    console.log('---', item)
    this.handleCancel()
  }

  render () {
    return (
      <View className='hosAddrPhone'>
        <View
          className='hos-detail-address-container'
          onClick={() => {
            console.log('---address')
          }}
        >

          <View className='hos-detail-address-left-container'>
            <Commonimage
              imageSource={require('@assets/images/hos/common_icon_nav.png')}
              imageStyle={{
                'width': `${Taro.pxTransform(26)}`,
                'height': Taro.pxTransform(30),
                'margin-right': Taro.pxTransform(15),
                'margin-top': Taro.pxTransform(15)
              }}
            />

            <View className='hos-detail-address-text-container'>
              <View className='hos-detail-address-left-top-text'>雁塔区雁塔西路277号西安交通第一附属医院内</View>
              <View className='hos-detail-address-left-bottom-text'>距离您6.4km，点击查看路线</View>
            </View>

          </View>

          <View className='hos-detail-address-right-container' onClick={this.hosAddrClick}>
            <Commonimage
              imageSource={require('@assets/images/hos/common_phone_flag.png')}
              imageStyle={{
                'width': `${Taro.pxTransform(40)}`,
                'height': Taro.pxTransform(40),
                'margin-top': Taro.pxTransform(10)
              }}
            />
            <Commonimage
              imageSource={require('@assets/images/hos/hos_icon_jizhen.png')}
              imageStyle={{
                'width': Taro.pxTransform(48),
                'height': Taro.pxTransform(26),
                'position': 'absolute',
                'left': Taro.pxTransform(5),
                'top': Taro.pxTransform(0)
              }}
            />
          </View>

        </View>

        {/*  电话弹框  */}
        <AtActionSheet isOpened={this.state.isOpen} cancelText='取消' onCancel={this.handleCancel} onClose={this.handleClose}>
          {
            this.state.phoneLists && this.state.phoneLists.map((item, index) => {

              return (
                <AtActionSheetItem
                  key={index}
                  onClick={() => {
                    this.handleClick(item)
                  }}
                >
                  {item}
                </AtActionSheetItem>
              )

            })
          }

        </AtActionSheet>
      </View>
    )
  }
}

export default Hosaddrphone
