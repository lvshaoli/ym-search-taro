/**
 * @Author: lvshaoli
 * @DATE: 2020-02-03
 * @TIME: 08:22
 * @DESC: '医生详情'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Hosdetailborderbtn from '@components/hosdetailborderbtn/hosdetailborderbtn'
import Commonimage from '@components/commonimage/commonimage'
// import { connect } from '@tarojs/redux'
import './doctorDetailPage.scss'

// @connect(({  }) => ({
// }), (dispatch) => ({  
// }))
class Doctordetailpage extends Component {

  
    config = {
      navigationBarTitleText: '医生详情'
    }
    
    constructor () {
      super(...arguments)
      this.state = {
        isFollow: false
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
        <View className='doctorDetailPage'>
          {/* 医生简介 */}
          <View className='doctor-detail-page-top-person-intr-container'>
            <View className='doctor-detail-top-left-container'>
              <Commonimage
                imageSource={require('@assets/images/home/home_jddyfsyy.png')}
                imageStyle={{
                  'width': Taro.pxTransform(100),
                  'height': Taro.pxTransform(100)
                }}
              />
              <View className='doc-detail-top-left-right-container'>
                <View className='top-left-right-name'>周旺重</View>
                <View className='top-left-right-dept'>消化内科 主任医师</View>
                <View className='top-left-right-hos'>解放军总医院第七医学儿童医院</View>
              </View>
            </View>

            <View className='doctor-detail-top-right-container'>
              <Hosdetailborderbtn
                onBorderDetailClick={() => {
                  console.log('onBorderClick')
                  this.setState({
                    isFollow: !this.state.isFollow
                  })
                }}
                status={this.state.isFollow}
              />
            </View>

          </View>

          {/* 门诊时间 */}

          <View className='doctor-detail-top-dept-date-container'>
            <Text className='doctor-detail-top-dept-date-title'>门诊时间</Text>
            <Text className='doctor-detail-top-dept-date-subTitle'>周一全天,周二下午</Text>
          </View>

          {/* 擅长主治 */}

          <View className='doctor-detail-center-good-container'>
            <Text className='doctor-detail-top-dept-date-title'>擅长主治</Text>
            <View className='doctor-detail-top-dept-date-subTitle'>
              脑梗塞、脑血管疾病、脑出血、偏头痛、风湿脑梗塞、脑血管疾病、脑出血、偏头痛、风湿
            </View>
          </View>

          {/* 工作简历 */}

          <View className='doctor-detail-center-good-container'>
            <Text className='doctor-detail-top-dept-date-title'>工作简历</Text>
            <View className='doctor-detail-top-dept-date-subTitle'>
              主任医师、教授、博士研究生导师，毕业于北主任医师、教授、博士研究生导师，毕业于北
              主任医师、教授、博士研究生导师，毕业于北主任医师、教授、博士研究生导师，毕业于北
              主任医师、教授、博士研究生导师，毕业于北主任医师、教授、博士研究生导师，毕业于北
              主任医师、教授、博士研究生导师，毕业于北
            </View>
          </View>

        </View>
      )
    }
}

export default Doctordetailpage
