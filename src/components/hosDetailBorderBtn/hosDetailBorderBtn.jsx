/**
 * @Author: lvshaoli
 * @DATE: 2020-02-01
 * @TIME: 10:53
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import './hosDetailBorderBtn.scss'

class Hosdetailborderbtn extends Component {
  static propTypes = {
    onBorderDetailClick: PropTypes.func,
    status: PropTypes.bool
  }

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
      <View className={this.props.status ? 'hosDetailBorderBtn' : 'unSelectBorderBtn'} onClick={() => {
        this.props.onBorderDetailClick && this.props.onBorderDetailClick()
      }}
      >
        <Text className={this.props.status ? 'hos-detail-border-btn-text' : 'unSelect-detail-border-btn-text'}>+ 关注</Text>
      </View>
    )
  }
}

export default Hosdetailborderbtn
