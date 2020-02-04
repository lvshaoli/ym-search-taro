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

  // 问题介绍
  renderQuestionIntrComponents = () => {
    return (
      <View className='question-detail-top-second-container'>
        <Image className='hos-question-item-first-left-img' src={require('@assets/images/hos/question_wen.png')} />
        <Text className='hos-question-item-first-left-text'>问题问问问问问</Text>
      </View>
    )
  }


  render () {
    return (
      <View className='answerQue'>
        <View className='answer-que-top-container'>
          { this.renderQuestionIntrComponents() }
        </View>


      </View>
    )
  }
}

export default Answerque
