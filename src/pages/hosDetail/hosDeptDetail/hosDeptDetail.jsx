/**
 * @Author: lvshaoli
 * @DATE: 2020-02-02
 * @TIME: 11:33
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtListItem } from 'taro-ui'
import Itemnavheader from '@components/itemNavHeader/itemNavHeader'
import Doctorlistitem from '@components/doctorListItem/doctorListItem'
// import PropTypes from 'prop-types'
// import { connect } from '@tarojs/redux'
import './hosDeptDetail.scss'

// @connect(({  }) => ({
// }), (dispatch) => ({  
// }))
class Hosdeptdetail extends Component {

  
    config = {
      navigationBarTitleText: '科室'
    }
    
    constructor () {
      super(...arguments)
      this.state = {
        showMore: false
      }
    }

    componentWillReceiveProps (nextProps) {
      console.log(this.props, nextProps)
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

  doctorIntrClick = () => {}

  render () {
    return (
      <View className='hosDeptDetail'>

        <View className='hos-dept-detail-top-list-container'>
          <AtListItem
            title='联系电话'
            extraText='85323930 85323935'
            arrow='right'
          />
          <AtListItem
            title='门诊地址'
            extraText='门诊部三楼骨科门诊'
            arrow='right'
          />
          <AtListItem
            title='住院部地址'
            extraText='住院部大楼15层'
            arrow='right'
          />

          <View className='hos-dept-detail-deptIntr-container'>
            <Text className='hos-dept-detail-deptIntr-text'>科室介绍</Text>
            <View className={this.state.showMore ? '' : 'hos-dept-detail-intr-content-container'}>
              <Text className='hos-dept-detail-intr-content-text'>
                为院重点科室和优质护理示范单位，学科综合为院重点科室和优质护理示范单位，
                学科综合为院重点科室和优质护理示范单位，学科综合为院重点科室和优质护理示范单位，学科综合
                为院重点科室和优质护理示范单位，学科综合为院重点科室和优质护理示范单位，学科综合为院重点科室和优质护理示范单位，学科综合
                为院重点科室和优质护理示范单位，学科综合为院重点科室和优质护理示范单位，学科综合
              </Text>
            </View>
            <View className='hos-dept-detail-more-container' onClick={() => {
              this.setState({
                showMore: !this.state.showMore
              })
            }}
            >
              <Image
                src={this.state.showMore ? require('@assets/images/home/more_up.png') : require('@assets/images/home/more_down.png')}
                className='hos-dept-detail-more-img'
              />
            </View>

          </View>
        </View>

        {/* 医生介绍 */}
        <View className='hos-detail-doctor-intr-container'>
          <Itemnavheader
            headerIcon={require('@assets/images/home/home_threej_hospital.png')}
            headerTitle='医生介绍'
            headerRightTitle=''
            onHederNavClick={this.doctorIntrClick}
          />

          <View className='hos-detail-doctor-intr-items'>
            <Doctorlistitem />
            <Doctorlistitem />
          </View>
        </View>
      </View>
    )
  }
}

export default Hosdeptdetail
