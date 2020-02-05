/**
 * @Author: lvshaoli
 * @DATE: 2020-01-27
 * @TIME: 10:38
 * @DESC: '医院详情'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import Itemnavheader from '@components/itemNavHeader/itemNavHeader'
import Doctorlistitem from '@components/doctorListItem/doctorListItem'
import Hosdetailtopheader from '@components/hosDetails/hosdetailtopheader/hosdetailtopheader'
import Commonimage from '@components/commonimage/commonimage'
import Imgtoptextbtn from '@components/imgtoptextbtn/imgtoptextbtn'
import { AtActionSheet, AtActionSheetItem } from 'taro-ui'
import { navigateTo } from '@utils/navUtils'
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
        isOpen: false
      }
    }

    componentWillReceiveProps (nextProps) {
      console.log(this.props, nextProps)
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    doctorIntrClick () {
      console.log('doctorIntrClick')
      navigateTo('/pages/doctorIntrPage/doctorIntrPage')

    }

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
    this.setState({
      isOpen: false
    })
  }

  handleClick = (item) => {
    console.log('----', item)
    this.setState({
      isOpen: false
    })
  }

  // 科室选择
  selectDeptClick = () => {
    navigateTo('/pages/hosDetail/hosDeptSelect/hosDeptSelect')
  }

  render () {
    return (
      <View className='hosDetail'>
        <Hosdetailtopheader />

        {/* 医院地址 */}
        { this.renderHosAddr() }

        {/* 重点科室 */}
        { this.renderImportDept() }

        {/* 预约挂号 */}
        { this.renderSearchNum() }

        {/* 问答 */}
        { this.renderQuesAnswer() }

        {/* 医生介绍 */}
        { this.renderDocIntr() }

        {/* 医院介绍 */}
        { this.renderHosIntr() }


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

  // 医院介绍
  renderHosIntr = () => {
    return (
      <View className='hos-detail-doctor-intr-container'>
        <Itemnavheader
          headerTitle='医院介绍'
          headerRightTitle=''
          onHederNavClick={() => {
            navigateTo('/pages/hosIntrPage/hosIntrPage')
          }}
        />
        <View className='hos-detail-hosIntr-container'>
          <Text className='hos-detail-hosIntr-text'>
                  西安交通大学第一附属医院是国家卫生计生委西安交通大学第一附属医院是国家卫生计生委西安交通大学第一附属医院是国家卫生计生委
                  西安交通大学第一附属医院是国家卫生计生委西安交通大学第一附属医院是国家卫生计生委西安交通大学第一附属医院是国家卫生计生委
                  西安交通大学第一附属医院是国家卫生计生委西安交通大学第一附属医院是国家卫生计生委
          </Text>
        </View>
      </View>
    )
  }

  // 医院地址
  renderHosAddr = () => {
    return (
      <View className='hos-detail-address-container' onClick={this.hosAddrClick}>

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

        <View className='hos-detail-address-right-container'>
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

  // 预约挂号
  renderSearchNum = () => {
    return (
      <View className='hos-detail-doctor-intr-container hos-detail-space-between'>

        <View className='hos-detail-doctor-gh-inner-container'>

          <View className='hos-detail-doctor-img-container'>
            <Commonimage
              imageSource={require('@assets/images/hos/hos_guah.png')}
              imageStyle={{
                'width': `${Taro.pxTransform(28)}`,
                'height': Taro.pxTransform(28),
              }}
            />

          </View>

          <View className='hos-center-dept-desc-container'>
            <View className='hos-detail-dept-content'>预约挂号</View>
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
    )
  }

  //  问答
  renderQuesAnswer = () => {
    return (
      <View className='hos-detail-doctor-intr-container hos-detail-flex'>
        <View className='hos-detail-wd-label-container'>
          <Commonimage
            imageSource={require('@assets/images/hos/hos_question_icon.png')}
            imageStyle={{
              'width': `${Taro.pxTransform(56)}`,
              'height': Taro.pxTransform(32),
              'position': 'absolute',
              'top': '3px'
            }}
          />
        </View>

        <View
          onClick={() => {
            navigateTo('/pages/hosQuestionList/hosQuestionList')
          }}
          className={{
            'display': 'flex',
            'flex-direction': 'column'
          }}
        >
          <View className='hos-detail-top-wd-container'>
            <Text className='hos-detail-top-wd-text'>西安市医保可以在这里住院吗？</Text>
            <Image className='hos-detail-left-image' src={require('@assets/images/home/home_common_right.png')} />
          </View>

          <View className='hos-detail-bottom-wd-container'>
            <Text className='hos-detail-bottom-wd-text'>可以的，支持省市居民、职工医保、农合医职可以的，支持省市居民、职工医保、农合医职</Text>
          </View>

        </View>

      </View>
    )
  }

  // 医生介绍
  renderDocIntr = () => {
    return (
      <View className='hos-detail-doctor-intr-container'>
        <Itemnavheader
          headerTitle='医生介绍'
          headerRightTitle=''
          onHederNavClick={this.doctorIntrClick.bind(this)}
        />

        <View className='hos-detail-doctor-intr-items'>
          <Doctorlistitem
            onDocItemClick={() => {
              navigateTo('/pages/doctorDetailPage/doctorDetailPage')
            }}
          />
          <Doctorlistitem />
        </View>
      </View>
    )
  }

}

export default Hosdetail
