/**
 * @Author: lvshaoli
 * @DATE: 2020-02-02
 * @TIME: 10:55
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIndexes } from 'taro-ui'
import { navigateTo } from '@utils/navUtils'
// import { connect } from '@tarojs/redux'
import './hosDeptSelect.scss'

// @connect(({  }) => ({
// }), (dispatch) => ({  
// }))
class Hosdeptselect extends Component {
  
  config = {
    navigationBarTitleText: '医院科室列表'
  }
    
  constructor () {
    super(...arguments)
    this.state = {
      deptList: [{
        title: 'A',
        key: 'A',
        items: [
          {
            'name': '阿坝'
            // 此处可加其他业务字段
          },
          {
            'name': '阿拉善'
          }]
      },
      {
        title: 'B',
        key: 'B',
        items: [
          {
            'name': '北京'
          },
          {
            'name': '保定'
          }]
      }]
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  deptClick = (item) => {
    console.log('---', item)
    navigateTo('/pages/hosDetail/hosDeptDetail/hosDeptDetail')
  }

  render () {
    return (
      <View className='hosDeptSelect' style='height:100vh'>
        <AtIndexes
          list={this.state.deptList}
          onClick={this.deptClick}
        />
      </View>
    )
  }
}

export default Hosdeptselect
  
