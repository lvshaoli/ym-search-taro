/**
 * @Author: lvshaoli
 * @DATE: 2020-02-03
 * @TIME: 14:58
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { navigateTo } from '@utils/navUtils'
import Commonimage from '@components/commonimage/commonimage'
// import { connect } from '@tarojs/redux'
import './pharmacyDetailPage.scss'

// @connect(({  }) => ({
// }), (dispatch) => ({  
// }))
class Pharmacydetailpage extends Component {

  constructor () {
    super(...arguments)
    this.state = {}
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }


  config = {
    navigationBarTitleText: '药店详情'
  }

  componentDidShow () { }

  componentDidHide () { }

  // 服务地址
  renderServiceAddrView = () => {

    return (
      <View className='render-service-addr-container'>
        <View className='render-srevice-addr-left'>
          <View className='render-service-addr-left-top'>
            <Image
              className='render-ervice-addr-left-top-icon'
              src={require('@assets/images/hos/common_icon_nav.png')}
            />
            <View className='render-service-addr-left-top-desc'>陕西·西安市雁塔区电子二路18号北侧</View>
          </View>
          <View className='render-service-addr-left-bottom'>距离您6.4km，点击查看路线</View>
        </View>

        <Image
          className='render-srevice-addr-right-img'
          src={require('@assets/images/hos/common_phone_flag.png')}
        />
      </View>
    )
  }

  // 服务项目
  renderServiceItems = () => {
    return (
      <View className='render-service-items-container'>
        <View className='render-service-items-top'>
          <Image
            className='render-service-items-top-img'
            src={require('@assets/images/home/home_threej_hospital.png')}
          />
          <View className='render-service-items-top-title'>服务项目</View>
        </View>

        <View className='render-service-items-bottom'>
          <View className='render-service-items-bottom-content'>
                  1.全天侯免费血压、血糖测试
          </View>
          <View className='render-service-items-bottom-content'>
            2.周一、周四医生坐诊：聘请西安中心医院中西医结合，科唐大伟主任医师（教授）全天坐诊。
          </View>
        </View>

      </View>
    )
  }

  // 问答
  renderQuesAnsView = () => {
    return (
      <View
        className='render-ques-ans-view'
        onClick={() => {
          navigateTo('/pages/hosQuestionList/hosQuestionList')
        }}
      >
        <View className='render-ques-ans-view-top'>
          <View className='render-ques-ans-view-top-left'>
            <Image
              className='render-ques-ans-view-top-left-img'
              src={require('@assets/images/hos/hos_question_icon.png')}
            />
            <View className='render-ques-ans-view-top-left-title'>西安市医保可以在这里住院吗？</View>
          </View>
          <Image
            className='render-ques-ans-view-top-right-icon'
            src={require('@assets/images/home/home_common_right.png')}
          />
        </View>
        <View className='render-ques-ans-view-bottom'>可以的，支持省市居民、职工医保、农合医职可以的，支持省市居民、职工医保、农合医职</View>
      </View>
    )
  }


  render () {
    return (
      <View className='pharmacyDetailPage'>
        {/* 药店介绍 */}
        <View className='pharmacy-detail-intro-container'>
          <Commonimage
            imageSource={require('@assets/images/home/home_jddyfsyy.png')}
            imageStyle={{
              'width': `${Taro.pxTransform(146)}`,
              'height': Taro.pxTransform(146),
              'border-radius': Taro.pxTransform(16)
            }}
          />
          <View className='pharmacy-detail-intr-right'>
            <View className='pharmacy-detail-intr-title'>怡康药店(兴庆南路药店)</View>
            <View className='pharmacy-detail-intr-subTitle'>营业时间:周一至周日 08:00-22:00</View>
          </View>
        </View>

        {/* 服务地址 */}
        { this.renderServiceAddrView() }
        {/* 服务项目 */}
        { this.renderServiceItems() }

        {/* 问答 */}
        { this.renderQuesAnsView() }
      </View>
    )
  }
}

export default Pharmacydetailpage
