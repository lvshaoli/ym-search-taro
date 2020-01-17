/**
 * @Author: yami
 * @DATE: 2020-01-14
 * @TIME: 13:59
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import './primarySelectBtn.scss'

class Primaryselectbtn extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    primarySelectText: PropTypes.string,
    onPrimaryClick: PropTypes.func,
    hasMagin: PropTypes.bool, // 是否有下边距
    btnType: PropTypes.string, // blue-gray  green-gray
  }

  static defaultProps = {
    checked: false,
    hasMagin: false
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { checked, primarySelectText, onPrimaryClick, hasMagin, btnType } = this.props || {}

    let selectBtnClass = 'primary-select-bg',
      unSelectBtnClass = 'primary-unselect-bg',
      selectTextClass = 'primary-select-text',
      unSelectTextClass = 'primary-unselect-text'

    if (btnType === 'blue-gray') {
      selectBtnClass = 'primary-select-blue-bg'
      unSelectBtnClass = 'primary-unselect-blue-bg'
      selectTextClass = 'primary-select-blue-text'
      unSelectTextClass = 'primary-unselect-blue-text'
    }


    const myClass = hasMagin ? 'primary-margin-bottom' : ''

    return (
      <View className={checked ? `${selectBtnClass} ${myClass}` : `${unSelectBtnClass} ${myClass}`} onClick={onPrimaryClick}>
        <Text className={checked ? selectTextClass : unSelectTextClass}>{ primarySelectText }</Text>
      </View>
    )
  }
}

export default Primaryselectbtn
