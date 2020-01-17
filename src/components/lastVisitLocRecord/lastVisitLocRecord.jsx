/**
 * @Author: yami
 * @DATE: 2020-01-16
 * @TIME: 10:27
 * @DESC: '最近访问/定位'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import Primaryselectbtn from '@components/primaryselectbtn/primaryselectbtn'
// import PropTypes from 'prop-types'
import './lastVisitLocRecord.scss'

class Lastvisitlocrecord extends Component {
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
      recordList: ['西安', '罗马帝国', '乌鲁木齐', '大不列颠', '美利坚']
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
      <View className='lastVisitLocRecord'>
        <View>
          <Text className='last-visit-loc-record-text'>定位/最近访问</Text>
        </View>

        <View className='last-visit-loc-record-container'>

          {
            this.state.recordList && this.state.recordList.map((recordItem, index) => {

              return <Primaryselectbtn
                key={index}
                primarySelectText={recordItem}
                hasMagin
                btnType='blue-gray'
                checked={false}
                onPrimaryClick={() => {

                }}
              />
            })
          }
        </View>
      </View>
    )
  }
}

export default Lastvisitlocrecord
