/**
 * @Author: lvshaoli
 * @DATE: 2020-02-04
 * @TIME: 10:34
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { navigateTo } from '@utils/navUtils'
import './questionDetail.scss'

class Questiondetail extends Component {
  
    config = {
      navigationBarTitleText: '蔡某某提问'
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
          { this.renderPicView() }
        </View>
      )
    }

    //  回答问题item
   renderAnswerItem = () => {
     return (
       <View className='answer-item-container'>
         { this.renderQuestionPersonInfo() }

         <View className='answer-item-content-text'>
                可以的，支持省市居民、职工医保、农合医保可以的，支持省市居民、职工医保、农合医保
                可以的，支持省市居民、职工医保、农合医保可以的，支持省市居民、职工医保、农合医保
                可以的，支持省市居民、职工医保、农合医保
         </View>

       </View>
     )
   }

  //  border按钮
  renderBorderBtn = () => {
    return (
      <View className='render-border-btn-container'>
        <Text className='render-border-btn-text'>我要回答</Text>
      </View>
    )
  }

  renderNoContent = () => {
    return (
      <View className='answer-que-bottom-container'>
        <View className='answer-que-bottom-text'>暂无人回答，快来回答吧～</View>
        { this.renderBorderBtn() }
      </View>
    )
  }

  // 图片展示
  renderPicView = () => {
    return (
      <View className='render-pic-view-container'>
        <Image className='render-pic-view-img' src={require('@assets/images/home/home_jddyfsyy.png')} />
        <Image className='render-pic-view-img' src={require('@assets/images/home/home_jddyfsyy.png')} />
        <Image className='render-pic-view-img' src={require('@assets/images/home/home_jddyfsyy.png')} />
      </View>
    )
  }

  render () {
    return (
      <View className='questionDetail'>
        { this.renderQuestionIntrComponents() }
        {/* 没有回答时候展示 */}
        {this.renderNoContent()}
        <View className='question-detail-content-count'>共26个回答</View>
        {this.renderAnswerItem()}
        {this.renderAnswerItem()}
        {this.renderAnswerItem()}

        <View className='question-detail-quetion-btn'>
          <AtButton
            type='primary'
            size='normal'
            onClick={() => {
              navigateTo('/pages/answerQue/answerQue')
            }}
          >我要回答</AtButton>
        </View>
      </View>
    )
  }
}

export default Questiondetail
