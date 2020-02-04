/**
 * @Author: lvshaoli
 * @DATE: 2020-02-04
 * @TIME: 12:18
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './answerQue.scss'

class Answerque extends Component {

    config = {
      navigationBarTitleText: '回答问题'
    }
    
    constructor () {
      super(...arguments)
      this.state = {}
    }

    componentWillReceiveProps (nextProps) {
      console.log(this.props, nextProps)
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

  renderQuestionPersonInfo = () => {
    return (
      <View className='question-detail-top-top-conatiner'>
        <Image className='question-detail-top-left-img' src={require('@assets/images/hos/quest-avtor.png')} />
        <View className='question-detail-top-right-container'>
          <View className='question-detail-top-right-name'>张**</View>
          <View className='question-detail-top-right-date'>2019-03-04</View>
        </View>
      </View>
    )
  }

  // 问题介绍
  renderQuestionIntrComponents = () => {
    return (
      <View className='question-detail-top-container'>
        { this.renderQuestionPersonInfo() }
        {/* 第二行 */}
        <View className='question-detail-top-second-container'>
          <Image className='hos-question-item-first-left-img' src={require('@assets/images/hos/question_wen.png')} />
          <Text className='hos-question-item-first-left-text'>问题问问问问问</Text>
        </View>
      </View>
    )
  }

  renderPicView = () => {
    return (
      <View className='render-pic-view-container'>

      </View>
    )
  }

  render () {
    return (
      <View className='answerQue'>
        { this.renderQuestionIntrComponents() }
        { this.renderPicView() }
      </View>
    )
  }
}

export default Answerque
