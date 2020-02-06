/**
 * @Author: lvshaoli
 * @DATE: 2020-02-06
 * @TIME: 07:30
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { navigateTo } from '@utils/navUtils'
// import PropTypes from 'prop-types'
import './quesAnswer.scss'

class Quesanswer extends Component {
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

  render () {
    return (
      <View className='quesAnswer'>
        <View
          className='render-ques-ans-view'
          onClick={() => {
            navigateTo('/pages/hosQuestionList/hosQuestionList')
          }}
        >
          <View className='render-ques-ans-view-top'>
            <View className='render-ques-ans-view-top-left'>
              <Image
                className='render-ques-ans-view-top-left-img'
                src={require('@assets/images/hos/hos_question_icon.png')}
              />
              <View className='render-ques-ans-view-top-left-title'>西安市医保可以在这里住院吗？</View>
            </View>
            <Image
              className='render-ques-ans-view-top-right-icon'
              src={require('@assets/images/home/home_common_right.png')}
            />
          </View>
          <View className='render-ques-ans-view-bottom'>可以的，支持省市居民、职工医保、农合医职可以的，支持省市居民、职工医保、农合医职</View>
        </View>
      </View>
    )
  }
}

export default Quesanswer
