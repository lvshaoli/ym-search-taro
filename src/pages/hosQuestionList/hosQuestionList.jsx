/**
 * @Author: lvshaoli
 * @DATE: 2020-02-03
 * @TIME: 11:05
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { navigateTo } from '@utils/navUtils'
import './hosQuestionList.scss'

class Hosquestionlist extends Component {
    
  constructor () {
    super(...arguments)
    this.state = {
      itemList: [
        {
          name: '张**',
          question: '今天可以问诊吗?',
          answer: '可以的，记得带上就诊卡哦',
          answerCount: 24
        },
        {
          name: '张**',
          question: '今天可以问诊吗?',
          answer: ''
        },
        {
          name: '张**',
          question: '今天可以问诊吗?',
          answer: '可以的，支持省市居民、职工医保、农合医保支持省市居民、职工医保、农合医保支持省市居民、职工医保、农合医保支持省市居民'
        },
      ]
    }
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

  //  item
  renderItemUI = (item) => {
    return (
      <View
        className='hos-question-list-item'
        onClick={() => {
          navigateTo('/pages/questionDetail/questionDetail')
        }}
      >
        {/* 第一行 */}
        <View className='hos-question-item-first-container'>
          <View className='hos-question-item-first-left'>
            <Image className='hos-question-item-first-left-img' src={require('@assets/images/hos/question_wen.png')} />
            <Text className='hos-question-item-first-left-text'>{item.question}</Text>
          </View>
          <View className='hos-question-item-first-right'>{item.answerCount && `${item.answerCount}个回答` || '暂无回答'}</View>
        </View>

        {/* 第二行 */}

        {
          item.answer && 
            <View className='hos-question-item-second-container'>
              <Image className='hos-question-item-first-left-img' src={require('@assets/images/hos/question_aswner.png')} />
              <Image className='hos-question-item-first-left-img' src={require('@assets/images/hos/quest-avtor.png')} />
              <Text className='hos-question-item-second-text'>张***</Text>
            </View>
          
        }
        {/* 第三行 */}
        {
          item.answer && 
            <View className='hos-question-item-third-container'>
              { item.answer }
            </View>
          
        }
      </View>

    )
  }

  render () {
    return (
      <View className='hosQuestionList'>

        {/* item */}

        {
          this.state.itemList.map((item, index) => {
            return <View key={index}>
              { this.renderItemUI(item) }
            </View>
          })}

        <View className='hos-quetion-btn'>
          <AtButton
            type='primary'
            onClick={() => {
              navigateTo('/pages/commitQue/commitQue')
            }}
          >我要提问</AtButton>
        </View>

      </View>
    )
  }
}

export default Hosquestionlist
