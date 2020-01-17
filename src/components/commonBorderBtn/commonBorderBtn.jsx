/**
 * @Author: yami
 * @DATE: 2020-01-14
 * @TIME: 15:33
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import './commonBorderBtn.scss'

class Commonborderbtn extends Component {
  static propTypes = {
    commonBorderText: PropTypes.string,
    btnType: PropTypes.string, // border-large  border-small primary-btn
    onBtnClick: PropTypes.func, // 点击事件
  }

  // static defaultProps = {
  //   data: []
  // }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { commonBorderText, btnType, onBtnClick } = this.props || {}
    let contentStyle = 'common-index-border-content',
      textStyle = 'common-index-border-text'
    if (btnType === 'border-large') {
      contentStyle = 'common-border-large-content'
      textStyle = 'common-border-large-text'
    } else if (btnType === 'border-small') {
      contentStyle = 'common-index-border-gray-content'
      textStyle = 'common-index-border-gray-text'
    }
    return (
      <View className={`commonBorderBtn ${contentStyle}`} onClick={onBtnClick}>
        <Text className={`${textStyle}`}>{ commonBorderText }</Text>
      </View>
    )
  }
}

export default Commonborderbtn
