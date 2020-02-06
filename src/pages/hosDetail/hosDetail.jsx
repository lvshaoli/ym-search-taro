/**
 * @Author: lvshaoli
 * @DATE: 2020-01-27
 * @TIME: 10:38
 * @DESC: '医院详情'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Itemnavheader from '@components/itemNavHeader/itemNavHeader'
import { navigateTo } from '@utils/navUtils'
import { Hosaddrphone, Quesanswer, Appoint, Doctorintrcomponent } from '@components'

import { Hosdetailtopheader, Relateintrcomponent } from '../../components'
// import PropTypes from 'prop-types'
// import { connect } from '@tarojs/redux'
import './hosDetail.scss'

// @connect(({  }) => ({
// }), (dispatch) => ({  
// }))
class Hosdetail extends Component {
  // static propTypes = {
  //   children: PropTypes.any,
  //   data: PropTypes.array
  // }
  //
  // static defaultProps = {
  //   data: []
  // }
  
    config = {
      navigationBarTitleText: '医院详情'
    }
    
    constructor () {
      super(...arguments)
      this.state = {
      }
    }

    componentWillReceiveProps (nextProps) {
      console.log(this.props, nextProps)
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

  // 科室选择
  selectDeptClick = () => {
    navigateTo('/pages/hosDetail/hosDeptSelect/hosDeptSelect')
  }

  render () {
    return (
      <View className='hosDetail'>
        <Hosdetailtopheader />

        <Hosaddrphone />

        {/* 重点科室 */}
        { this.renderImportDept() }

        {/* 预约挂号 */}
        <Appoint />

        {/* 问答 */}
        <Quesanswer />

        {/* 医生介绍 */}
        <Doctorintrcomponent />

        {/* 医院介绍 */}
        <Relateintrcomponent
          title='医院介绍'
          content='西安交通大学第一附属医院是国家卫生计生委西安交通大学第一附属医院是国家卫生计生委西安交通大学第一附属医院是国家卫生计生委西安交通大学第一附属医院是国家卫生计生委'
        />


        {/* 通知公告 */}
        <View className='hos-detail-doctor-intr-container'>
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


  // 重点科室
  renderImportDept = () => {
    return (
      <View className='hos-detail-doctor-intr-container'>
        <Itemnavheader
          headerIcon={require('@assets/images/home/home_threej_hospital.png')}
          headerTitle='重点科室'
          headerRightTitle=''
          onHederNavClick={this.selectDeptClick}
        />
        {/* 特色科室*/}
        <View className='hos-detail-doctor-dept-container margin-top30'>
          <View className='hos-detail-dept-title'>
            <Text className='hos-detail-dept-title-text'>特色科室:</Text>
          </View>

          <View className='hos-detail-dept-content-container'>
            <View className='hos-detail-dept-content'>男科，妇产科，肿瘤科，器官移植科，男科，妇产科，肿瘤科，器官移植科，男科，妇产科，肿瘤科，器官移植科</View>
          </View>

        </View>

        {/* 可用医保 */}
        <View className='hos-detail-doctor-dept-container margin-top30'>
          <View className='hos-detail-dept-title'>
            <Text className='hos-detail-dept-title-text'>可用医保:</Text>
          </View>

          <View className='hos-detail-dept-content-container'>
            <Text className='hos-detail-dept-content'>居民医保，新农合</Text>
          </View>

        </View>


      </View>
    )
  }

}

export default Hosdetail
