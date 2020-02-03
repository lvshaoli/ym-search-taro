/**
 * @Author: lvshaoli
 * @DATE: 2020-02-03
 * @TIME: 11:05
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './hosQuestionList.scss'

class Hosquestionlist extends Component {
    
  constructor () {
    super(...arguments)
    this.state = {}
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  config = {
    navigationBarTitleText: '问大家(38)'
  }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='hosQuestionList'>

        {/* item */}
        <View className='hos-question-list-item'>
          {/* 第一行 */}
          <View>


          </View>

          {/* 第二行 */}

          {/* 第三行 */}
        </View>

      </View>
    )
  }
}

export default Hosquestionlist
