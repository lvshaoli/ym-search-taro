/**
 * @Author: lvshaoli
 * @DATE: 2020-02-04
 * @TIME: 11:45
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTextarea, AtButton } from 'taro-ui'
import Commonchooseimg from '@components/commonChooseImg/commonChooseImg'
import './commitQue.scss'

class Commitque extends Component {

  config = {
    navigationBarTitleText: '我要提问'
  }
    
  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      btnDisable: true
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  render () {
    return (
      <View className='commitQue'>
        <AtTextarea
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          maxLength={50}
          placeholder='写下你的问题，来过这里的人会为你解答哦～'
        />
        <Commonchooseimg
          onImgPathCallBack={(imgList) => {
            console.log('-----', imgList)
          }}
        />

        <View className='hos-quetion-btn'>
          <AtButton
            type='primary'
            disabled={this.state.btnDisable}
            onClick={() => {
            }}
          >提交</AtButton>
        </View>
      </View>
    )
  }
}

export default Commitque
