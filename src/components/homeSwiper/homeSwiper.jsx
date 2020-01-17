/**
 * @Author: yami
 * @DATE: 2020-01-14
 * @TIME: 11:48
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import './homeSwiper.scss'

class Homeswiper extends Component {
  static propTypes = {
    swiperList: PropTypes.array
  }

  static defaultProps = {
    swiperList: []
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { swiperList } = this.props || {}
    return (
      <View className='homeSwiper'>
        <Swiper
          className='home-swiper-container'
          indicatorColor='#fff'
          indicatorActiveColor='#fff'
          circular
          indicatorDots
          autoplay
        >
          {
            swiperList && swiperList.map((item, index) => {
              return (
                <SwiperItem key={index}>
                  <View className='demo-text-1'>
                    <Image
                      className='home-swiper-image'
                      src={item}
                    />
                  </View>
                </SwiperItem>
              )
            })
          }
        </Swiper>
      </View>
    )
  }
}

export default Homeswiper
