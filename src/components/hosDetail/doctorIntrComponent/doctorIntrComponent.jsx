/**
 * @Author: lvshaoli
 * @DATE: 2020-02-06
 * @TIME: 07:40
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import Itemnavheader from '@components/itemNavHeader/itemNavHeader'
import Doctorlistitem from '@components/doctorListItem/doctorListItem'

import { navigateTo } from '@utils/navUtils'
// import PropTypes from 'prop-types'
import './doctorIntrComponent.scss'

class Doctorintrcomponent extends Component {
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

  render () {
    return (
      <View className='doctorIntrComponent'>
        <Itemnavheader
          headerTitle='医生介绍'
          headerRightTitle=''
          onHederNavClick={this.doctorIntrClick.bind(this)}
        />
        <Doctorlistitem
          onDocItemClick={() => {
            navigateTo('/pages/doctorDetailPage/doctorDetailPage')
          }}
        />
        <Doctorlistitem
          onDocItemClick={() => {
            navigateTo('/pages/doctorDetailPage/doctorDetailPage')
          }}
        />
      </View>
    )
  }
}

export default Doctorintrcomponent
