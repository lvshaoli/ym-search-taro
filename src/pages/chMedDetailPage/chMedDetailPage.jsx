/**
 * @Author: lvshaoli
 * @DATE: 2020-02-05
 * @TIME: 15:48
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import Itemnavheader from '@components/itemNavHeader/itemNavHeader'
import { navigateTo } from '@utils/navUtils'

import {
  Hosdetailtopheader,
  Hosaddrphone,
  Appoint,
  Quesanswer,
  Doctorintrcomponent,
  Relateintrcomponent
} from '../../components'
import './chMedDetailPage.scss'

class Chmeddetailpage extends Component {
    config = {
      navigationBarTitleText: '中医堂详情'
    }
    
    constructor () {
      super(...arguments)
    }

    componentWillReceiveProps (nextProps) {
      console.log(this.props, nextProps)
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    // 中医服务
   renderChMediView = () => {
     return (
       <View className='render-ch-me-view'>
         <View className='render-ch-me-view-top'>
           <Image className='render-ch-me-view-top-img' src={require('@assets/images/home/home_threej_hospital.png')} />
           <Text className='render-ch-me-view-top-title'>中医服务</Text>
         </View>
         <View className='render-ch-me-view-content'>
            中医内科、中医外科、中医儿科、中医妇科、中医内科、中医外科、中医儿科、中医妇科、
         </View>
       </View>
     )
   }

   render () {
     return (
       <View className='chMedDetailPage'>
         <Hosdetailtopheader
           hidenNavBtn
         />
         <Hosaddrphone />

         {/* 中医服务 */}
         { this.renderChMediView() }

         {/* 预约挂号 */}

         <Appoint />

         {/* 问答 */}
         <Quesanswer />

         {/* 医生介绍 */}
         <Doctorintrcomponent />


         {/* 中医堂介绍 */}
         <Relateintrcomponent
           title='中医堂介绍'
           content='西安交通大学第一附属医院是国家卫生计生委西安交通大学第一附属医院是国家卫生计生委西安交通大学第一附属医院是国家卫生计生委西安交通大学第一附属医院是国家卫生计生委'
         />
         {/* 通知 */}

         <View className='ch-med-detail-page-notice'>
           <Itemnavheader
             headerTitle='通知公告'
             headerRightTitle='关于2019年国庆节工作安排的通知'
             onHederNavClick={() => {
               navigateTo('/pages/docNoticeListPage/docNoticeListPage')
             }}
           />
         </View>

       </View>
     )
   }
}

export default Chmeddetailpage
