/**
 * @Author: lvshaoli
 * @DATE: 2020-01-27
 * @TIME: 10:38
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Itemnavheader from '@components/itemNavHeader/itemNavHeader'
import Doctorlistitem from '@components/doctorListItem/doctorListItem'
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
    }

    componentWillReceiveProps (nextProps) {
      console.log(this.props, nextProps)
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    doctorIntrClick () {
      console.log('doctorIntrClick')
    }

    render () {
      return (
        <View className='hosDetail'>

          {/* 医生介绍 */}
          <View className='hos-detail-doctor-intr-container'>
            <Itemnavheader
              headerIcon={require('@assets/images/home/home_threej_hospital.png')}
              headerTitle='医生介绍'
              headerRightTitle='全部'
              onHederNavClick={this.doctorIntrClick.bind(this)}
            />

            <View className='hos-detail-doctor-intr-items'>
              <Doctorlistitem />
              <Doctorlistitem />
              <Doctorlistitem />
            </View>
          </View>

        </View>
      )
    }
}

export default Hosdetail
